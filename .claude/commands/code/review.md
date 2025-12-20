---
description: "현재 브랜치의 변경사항을 분석하고 코드 품질, 성능, 베스트 프랙티스를 검토합니다"
allowed-tools:
  [
    "Bash(git diff:*)",
    "Bash(git log:*)",
    "Bash(git status:*)",
    "Bash(git branch:*)",
    "Read",
    "Grep",
    "Glob",
  ]
---

# Claude 명령어: Code Review

현재 브랜치의 모든 변경사항을 main 브랜치와 비교하여 코드 품질, 성능, 베스트 프랙티스를 검토합니다.

## 사용법

```
/review
```

## 프로세스

1. 현재 브랜치 확인 및 main과의 차이 분석
2. 변경된 파일 목록 및 통계 수집
3. 각 파일별 상세 코드 리뷰 수행
4. 발견된 이슈를 카테고리별로 분류
5. 우선순위에 따른 개선 제안 제공

## 리뷰 체크리스트

### 코드 품질 및 베스트 프랙티스

- **React/Next.js 패턴**

  - 서버 컴포넌트 vs 클라이언트 컴포넌트 적절한 사용
  - App Router 패턴 준수
  - RSC (React Server Components) 활용
  - 데이터 페칭 전략 (fetch, cache, revalidate)

- **TypeScript 타입 안전성**

  - any 타입 사용 최소화
  - 적절한 인터페이스/타입 정의
  - 타입 추론 활용
  - strict 모드 준수

- **컴포넌트 설계**

  - 단일 책임 원칙 (SRP)
  - 적절한 컴포넌트 분리
  - Props 타입 명시
  - 재사용 가능한 구조

- **에러 핸들링**

  - try-catch 적절한 사용
  - Error Boundary 활용
  - 사용자 친화적 에러 메시지
  - 에러 로깅

- **코드 중복 (DRY 원칙)**

  - 중복 코드 식별
  - 공통 로직 추출
  - 유틸리티 함수 활용
  - 커스텀 훅 활용

- **복잡도 관리**

  - 함수/컴포넌트 길이 적절성
  - 중첩 depth 최소화
  - 조건문 단순화
  - 순환 복잡도 (Cyclomatic Complexity)

- **네이밍 컨벤션**

  - 명확하고 의미 있는 이름
  - 일관된 네이밍 규칙
  - 약어 사용 최소화
  - 컨텍스트 반영

- **주석 및 문서화**
  - JSDoc 주석 활용
  - 복잡한 로직 설명
  - TODO/FIXME 주석 관리
  - README 업데이트

### 성능 및 최적화

- **렌더링 최적화**

  - 불필요한 리렌더링 방지
  - React.memo 적절한 사용
  - useMemo, useCallback 활용
  - key props 올바른 사용

- **메모이제이션**

  - 비용이 큰 계산 메모이제이션
  - 참조 동등성 유지
  - 의존성 배열 최적화
  - 과도한 메모이제이션 방지

- **이미지 최적화**

  - Next.js Image 컴포넌트 사용
  - 적절한 이미지 포맷 (WebP, AVIF)
  - lazy loading 활용
  - 이미지 크기 최적화

- **번들 크기**

  - 불필요한 의존성 제거
  - Tree shaking 활용
  - Dynamic import 활용
  - 번들 분석 (Bundle Analyzer)

- **클라이언트 사이드 JavaScript**

  - "use client" 최소화
  - 서버 컴포넌트 우선 사용
  - 클라이언트 전용 로직 분리
  - Hydration 최적화

- **Lazy Loading**

  - 동적 import 활용
  - Route 기반 코드 스플리팅
  - 컴포넌트 지연 로딩
  - 조건부 로딩

- **데이터 페칭**

  - 서버 사이드 페칭 우선
  - Parallel 페칭 활용
  - Streaming 활용
  - Cache 전략 (force-cache, no-store, revalidate)

- **CSS 최적화**
  - Tailwind 유틸리티 클래스 활용
  - CSS-in-JS 최소화
  - 불필요한 스타일 제거
  - Critical CSS

## 리뷰 카테고리

### 심각도 레벨

- 🚨 **Critical** - 즉시 수정 필요 (기능 오류, 심각한 보안 이슈, 빌드 실패)
- ⚠️ **Warning** - 우선 수정 권장 (성능 저하, 잠재적 버그, 타입 안전성)
- 💡 **Suggestion** - 개선 제안 (코드 품질, 가독성, 유지보수성)
- ✅ **Good Practice** - 잘 작성된 코드 패턴 (학습 및 장려)

### 카테고리

- 🎨 **코드 구조** - 아키텍처, 파일 구조, 모듈화, 디렉토리 구성
- 🔧 **베스트 프랙티스** - React/Next.js 권장 패턴, 업계 표준
- ⚡ **성능** - 렌더링, 번들링, 최적화, 메모이제이션
- 🛡️ **타입 안전성** - TypeScript 타입, 인터페이스, any 사용
- 🎯 **로직** - 비즈니스 로직, 알고리즘, 데이터 처리
- 📦 **의존성** - import 구조, 외부 라이브러리, 번들 크기
- 💅 **스타일** - CSS, Tailwind, 스타일 컴포넌트
- 📚 **문서화** - 주석, JSDoc, README, 타입 정의
- ♿ **접근성** - ARIA, 시맨틱 HTML, 키보드 네비게이션
- 🧪 **테스트** - 테스트 커버리지, 테스트 품질
- 🔒 **보안** - 입력 검증, XSS 방지, 인증/인가

## 출력 포맷

### 요약 섹션

```
📊 코드 리뷰 요약

브랜치: feature/xxx → main
변경된 파일: 12개
추가: +450줄 | 삭제: -120줄

심각도별 이슈:
🚨 Critical: 0개
⚠️ Warning: 3개
💡 Suggestion: 8개
✅ Good Practice: 5개
```

### 상세 리뷰

````
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 app/components/NewFeature.tsx

⚠️ Warning: 성능 - 불필요한 리렌더링
  라인 45-52: props로 전달되는 객체가 매 렌더링마다 새로 생성됨

  현재 코드:
  ```tsx
  <ChildComponent data={{ items, total }} />
````

제안:

```tsx
const memoizedData = useMemo(() => ({ items, total }), [items, total])
<ChildComponent data={memoizedData} />
```

💡 Suggestion: 타입 안전성
라인 12: any 타입 사용으로 타입 안전성 저하

현재 코드:

```tsx
const handleSubmit = (data: any) => { ... }
```

제안:

```tsx
interface FormData {
  name: string
  email: string
}
const handleSubmit = (data: FormData) => { ... }
```

✅ Good Practice: 코드 구조

- 서버 컴포넌트와 클라이언트 컴포넌트가 명확히 분리되어 있음
- 적절한 컴포넌트 분해로 재사용성이 높음
- 파일 구조가 App Router 패턴을 잘 따르고 있음

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 lib/utils/formatters.ts

💡 Suggestion: 코드 중복
라인 15-30: 유사한 포맷팅 로직이 반복됨

제안: 공통 로직을 추출하여 DRY 원칙 적용

```

## 리뷰 기준

### Next.js 16 & React 19 특화

- **App Router 패턴**
  - Route Groups 적절한 사용
  - Layout 계층 구조
  - Loading/Error UI
  - Streaming & Suspense

- **서버 컴포넌트 우선**
  - 기본적으로 서버 컴포넌트 사용
  - "use client" 최소화
  - 클라이언트 경계 명확히
  - 서버 액션 활용

- **Data Fetching**
  - fetch API 활용
  - Parallel/Sequential 페칭
  - Cache 설정
  - Revalidation 전략

### TypeScript Strict 모드

- any 타입 사용 최소화
- 명시적 타입 정의
- 타입 가드 활용
- 제네릭 적절한 사용

### Tailwind v4 & shadcn/ui

- Tailwind 유틸리티 클래스 활용
- CSS 변수 (@theme) 사용
- CVA (Class Variance Authority) 패턴
- shadcn/ui 컴포넌트 활용

### 접근성 (a11y)

- WCAG 2.1 AA 준수
- 시맨틱 HTML
- ARIA 속성 적절한 사용
- 키보드 네비게이션
- 색상 대비
- alt 텍스트

## 참고사항

- main 브랜치와의 모든 차이를 검토
- 프로젝트의 CLAUDE.md 가이드라인 준수 확인
- Next.js 16, React 19 베스트 프랙티스 적용
- TypeScript strict 모드 기준 검토
- Tailwind v4 및 shadcn/ui 패턴 확인
- 접근성(a11y) 기본 체크
- 한국어 프로젝트 특성 고려
- Core Web Vitals 영향 분석
- SEO 최적화 확인

## 리뷰 제외 항목

- 자동 생성 파일 (build 산출물, .next 등)
- 의존성 파일 (node_modules, package-lock.json)
- 설정 파일 (.gitignore, .eslintrc 등) - 단, 중요한 변경은 검토
- 마이그레이션 스크립트 - 단, 로직 오류는 지적
```
