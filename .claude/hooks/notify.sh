#!/bin/bash

# Claude Code Stop Hook - 상세 알림
# 토큰 사용량, 도구 사용 통계, 변경된 파일 등을 포함한 상세 알림 제공

# ============================================================================
# 1. stdin에서 JSON 데이터 읽기
# ============================================================================
input=$(cat)

# ============================================================================
# 2. 무한 루프 방지 - stop_hook_active 체크
# ============================================================================
stop_hook_active=$(echo "$input" | grep -o '"stop_hook_active"[[:space:]]*:[[:space:]]*true')
if [ -n "$stop_hook_active" ]; then
  exit 0
fi

# ============================================================================
# 3. transcript_path 추출
# ============================================================================
# jq가 있으면 jq로, 없으면 grep/sed로 추출
if command -v jq &> /dev/null; then
  transcript_path=$(echo "$input" | jq -r '.transcript_path' 2>/dev/null)
else
  # fallback: grep으로 추출
  transcript_path=$(echo "$input" | grep -o '"transcript_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*"\([^"]*\)".*/\1/')
fi

# transcript_path가 비어있거나 null이면 종료
if [ -z "$transcript_path" ] || [ "$transcript_path" = "null" ]; then
  # 기본 알림만 표시
  if command -v osascript &> /dev/null; then
    osascript -e 'display notification "응답 완료" with title "Claude"'
  fi
  exit 0
fi

# ~ 확장 (홈 디렉토리)
transcript_path="${transcript_path/#\~/$HOME}"

# transcript 파일이 존재하는지 확인
if [ ! -f "$transcript_path" ]; then
  # 기본 알림만 표시
  if command -v osascript &> /dev/null; then
    osascript -e 'display notification "응답 완료" with title "Claude"'
  fi
  exit 0
fi

# ============================================================================
# 4. 데이터 분석 - jq 사용 (정교한 분석)
# ============================================================================
analyze_with_jq() {
  local transcript="$1"

  # 성능을 위해 마지막 200줄만 분석 (대부분의 세션은 이 안에 포함됨)
  local recent_data=$(tail -n 200 "$transcript")

  # 토큰 사용량 합계 (실제 transcript 구조에 맞춤)
  total_input=$(echo "$recent_data" | jq -s '[.[] | select(.type == "assistant" and .message.usage.input_tokens) | .message.usage.input_tokens] | add // 0' 2>/dev/null)
  total_output=$(echo "$recent_data" | jq -s '[.[] | select(.type == "assistant" and .message.usage.output_tokens) | .message.usage.output_tokens] | add // 0' 2>/dev/null)

  # 캐시 토큰 (있으면 추가)
  cache_read=$(echo "$recent_data" | jq -s '[.[] | select(.type == "assistant" and .message.usage.cache_read_input_tokens) | .message.usage.cache_read_input_tokens] | add // 0' 2>/dev/null)

  # 도구 사용 통계 - message.content 배열에서 tool_use 타입 추출
  tool_list=$(echo "$recent_data" | jq -s '[.[] | select(.type == "assistant" and .message.content) | .message.content[] | select(.type == "tool_use") | .name] | group_by(.) | map("\(.[0])(\(length))") | join(", ")' 2>/dev/null | tr -d '"')

  # 변경된 파일 개수
  changed_files_count=$(echo "$recent_data" | jq -s '[.[] | select(.type == "assistant" and .message.content) | .message.content[] | select(.type == "tool_use" and (.name == "Edit" or .name == "Write")) | .input.file_path] | unique | length' 2>/dev/null)
}

# ============================================================================
# 5. 데이터 분석 - grep/sed 사용 (fallback)
# ============================================================================
analyze_with_grep() {
  local transcript="$1"

  # 마지막 200줄만 분석
  local recent_data=$(tail -n 200 "$transcript")

  # 간단한 카운트 (실제 구조: "name" 필드 사용)
  # Read 도구 카운트
  read_count=$(echo "$recent_data" | grep -c '"name"[[:space:]]*:[[:space:]]*"Read"' 2>/dev/null || echo "0")

  # Edit 도구 카운트
  edit_count=$(echo "$recent_data" | grep -c '"name"[[:space:]]*:[[:space:]]*"Edit"' 2>/dev/null || echo "0")

  # Write 도구 카운트
  write_count=$(echo "$recent_data" | grep -c '"name"[[:space:]]*:[[:space:]]*"Write"' 2>/dev/null || echo "0")

  # Bash 도구 카운트
  bash_count=$(echo "$recent_data" | grep -c '"name"[[:space:]]*:[[:space:]]*"Bash"' 2>/dev/null || echo "0")

  # Grep 도구 카운트
  grep_count=$(echo "$recent_data" | grep -c '"name"[[:space:]]*:[[:space:]]*"Grep"' 2>/dev/null || echo "0")

  # Glob 도구 카운트
  glob_count=$(echo "$recent_data" | grep -c '"name"[[:space:]]*:[[:space:]]*"Glob"' 2>/dev/null || echo "0")

  # Task 도구 카운트
  task_count=$(echo "$recent_data" | grep -c '"name"[[:space:]]*:[[:space:]]*"Task"' 2>/dev/null || echo "0")

  # 도구 목록 생성 (0이 아닌 것만)
  tool_list=""
  [ "$read_count" -gt 0 ] && tool_list="${tool_list}Read(${read_count}), "
  [ "$edit_count" -gt 0 ] && tool_list="${tool_list}Edit(${edit_count}), "
  [ "$write_count" -gt 0 ] && tool_list="${tool_list}Write(${write_count}), "
  [ "$bash_count" -gt 0 ] && tool_list="${tool_list}Bash(${bash_count}), "
  [ "$grep_count" -gt 0 ] && tool_list="${tool_list}Grep(${grep_count}), "
  [ "$glob_count" -gt 0 ] && tool_list="${tool_list}Glob(${glob_count}), "
  [ "$task_count" -gt 0 ] && tool_list="${tool_list}Task(${task_count}), "

  # 마지막 쉼표와 공백 제거
  tool_list=$(echo "$tool_list" | sed 's/, $//')

  # 변경된 파일 개수
  changed_files_count=$((edit_count + write_count))

  # 토큰과 비용은 grep으로 추출하기 어려우므로 기본값
  total_input="N/A"
  total_output="N/A"
  total_cost="N/A"
  cache_read=0
}

# ============================================================================
# 6. 데이터 분석 실행
# ============================================================================
if command -v jq &> /dev/null; then
  analyze_with_jq "$transcript_path"
else
  analyze_with_grep "$transcript_path"
fi

# ============================================================================
# 7. 상세 알림 생성 및 발송
# ============================================================================
if command -v osascript &> /dev/null; then
  # 알림 메시지 구성
  notification_body=""

  # 토큰 정보
  if [ "$total_input" != "N/A" ] && [ "$total_output" != "N/A" ]; then
    # 천 단위 구분자 추가
    input_formatted=$(printf "%'d" "$total_input" 2>/dev/null || echo "$total_input")
    output_formatted=$(printf "%'d" "$total_output" 2>/dev/null || echo "$total_output")
    notification_body="${notification_body}📊 토큰: ${input_formatted} 입력 / ${output_formatted} 출력"

    # 캐시 정보 (있으면 추가)
    if [ "$cache_read" -gt 0 ]; then
      cache_formatted=$(printf "%'d" "$cache_read" 2>/dev/null || echo "$cache_read")
      notification_body="${notification_body} (캐시: ${cache_formatted})"
    fi
    notification_body="${notification_body}
"
  fi

  # 비용 정보
  if [ "$total_cost" != "N/A" ] && [ "$total_cost" != "0" ]; then
    notification_body="${notification_body}💰 비용: \$${total_cost}
"
  fi

  # 도구 사용 정보
  if [ -n "$tool_list" ] && [ "$tool_list" != "null" ]; then
    notification_body="${notification_body}🔧 도구: ${tool_list}
"
  fi

  # 파일 변경 정보
  if [ "$changed_files_count" -gt 0 ]; then
    notification_body="${notification_body}📝 변경: ${changed_files_count}개 파일"
  fi

  # 알림이 비어있으면 기본 메시지
  if [ -z "$notification_body" ]; then
    notification_body="응답 완료"
  fi

  # macOS 알림 발송
  osascript -e "display notification \"${notification_body}\" with title \"Claude 응답 완료\""
fi

exit 0
