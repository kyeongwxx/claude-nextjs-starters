import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { ExampleContainer } from "./example-container"

export function DeveloperDemo() {
  const structureCode = `프로젝트 구조:

app/
├── (marketing)/          # Route Group - URL에 포함되지 않음
│   ├── layout.tsx       # 마케팅 레이아웃 (Header + Footer)
│   ├── page.tsx         # 홈페이지 (/)
│   ├── about/           # /about
│   ├── feature/         # /feature
│   └── examples/        # /examples
│       ├── page.tsx     # 예제 랜딩 페이지
│       └── [slug]/      # 동적 라우팅
│
components/
├── ui/                  # shadcn/ui 기본 컴포넌트
├── layout/              # 레이아웃 컴포넌트
├── marketing/           # 마케팅 도메인 컴포넌트
├── examples/            # 예제 컴포넌트
└── theme/               # 테마 관리

lib/
├── utils.ts             # 유틸리티 함수 (cn)
└── constants.ts         # 중앙 집중식 설정`

  const importCode = `// 경로 별칭 사용 (권장)
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/constants"

// 상대 경로 (비권장)
import { Button } from "../../components/ui/button"
import { cn } from "../../../lib/utils"`

  const patternsCode = `// 1. CVA 패턴
const buttonVariants = cva("base", {
  variants: { variant: { ... }, size: { ... } }
})

// 2. 합성 컴포넌트 패턴
<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
  </CardHeader>
  <CardContent>내용</CardContent>
</Card>

// 3. cn() 유틸리티
import { cn } from "@/lib/utils"

<div className={cn(
  "base-styles",
  variant === "primary" && "variant-styles",
  className
)} />`

  return (
    <>
      {/* Project Structure */}
      <Section spacing="lg" variant="default">
        <Container>
          <ExampleContainer
            title="프로젝트 구조"
            description="체계적인 디렉토리 구조로 확장성과 유지보수성을 높입니다"
            code={structureCode}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Route Groups</CardTitle>
                  <CardDescription>
                    괄호 (groupname)로 레이아웃 분리
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <code className="text-xs">(marketing)</code> - URL에 영향
                      없음
                    </li>
                    <li>✓ 독립적인 레이아웃 적용</li>
                    <li>✓ Header와 Footer 공유</li>
                    <li>✓ 향후 (dashboard), (auth) 추가 가능</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>컴포넌트 분류</CardTitle>
                  <CardDescription>
                    역할별로 디렉토리 구조화
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <code className="text-xs">ui/</code> - 기본 UI 컴포넌트
                    </li>
                    <li>
                      <code className="text-xs">layout/</code> - 레이아웃 컴포넌트
                    </li>
                    <li>
                      <code className="text-xs">marketing/</code> - 도메인 특화
                    </li>
                    <li>
                      <code className="text-xs">theme/</code> - 테마 관리
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Path Aliases */}
      <Section spacing="lg" variant="muted">
        <Container>
          <ExampleContainer
            title="경로 별칭"
            description="@/ prefix로 깔끔한 import 경로를 사용합니다"
            code={importCode}
          >
            <Card>
              <CardHeader>
                <CardTitle>경로 별칭의 장점</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">가독성 향상</h4>
                    <p className="text-sm text-muted-foreground">
                      ../../../ 대신 @/로 시작하는 명확한 경로
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">리팩토링 용이</h4>
                    <p className="text-sm text-muted-foreground">
                      파일 이동 시 import 경로 자동 업데이트
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">오타 방지</h4>
                    <p className="text-sm text-muted-foreground">
                      IDE 자동완성으로 정확한 경로 입력
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">일관성 유지</h4>
                    <p className="text-sm text-muted-foreground">
                      프로젝트 전체에서 동일한 규칙 적용
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Component Patterns */}
      <Section spacing="lg" variant="default">
        <Container>
          <ExampleContainer
            title="컴포넌트 패턴"
            description="재사용 가능하고 타입 안전한 컴포넌트 패턴을 사용합니다"
            code={patternsCode}
          >
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>CVA (Class Variance Authority)</CardTitle>
                  <CardDescription>
                    타입 안전한 variant 기반 스타일링
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 조건부 className 대신 variant props</li>
                    <li>✓ TypeScript 자동완성 지원</li>
                    <li>✓ 복잡한 스타일 조합 관리</li>
                    <li>✓ 버튼, 배지 등 모든 UI 컴포넌트에 적용</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>합성 컴포넌트 패턴</CardTitle>
                  <CardDescription>
                    유연한 내부 구조를 가진 컴포넌트
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Card, Sheet 등에서 사용</li>
                    <li>✓ 각 부분을 독립적으로 사용 가능</li>
                    <li>✓ 스타일 일관성 유지</li>
                    <li>✓ 커스터마이징 용이</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>cn() 유틸리티</CardTitle>
                  <CardDescription>
                    clsx + tailwind-merge 조합
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 조건부 className 처리</li>
                    <li>✓ Tailwind 클래스 충돌 해결</li>
                    <li>✓ 깔끔한 코드 작성</li>
                    <li>✓ 모든 컴포넌트에서 표준으로 사용</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Development Tools */}
      <Section spacing="lg" variant="muted">
        <Container>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">개발 도구</h2>
              <p className="text-lg text-muted-foreground">
                생산성을 높이는 최신 개발 도구와 설정
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>TypeScript 5</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">strict 모드 활성화</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 컴파일 타임 에러 검출</li>
                    <li>• 자동완성 및 IntelliSense</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ESLint</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">Next.js 권장 규칙</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 코드 품질 유지</li>
                    <li>• 잠재적 버그 사전 발견</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tailwind CSS v4</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">CSS 변수 기반 테마</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 빠른 빌드 속도</li>
                    <li>• 다크 모드 기본 지원</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geist Font</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">Vercel의 최적화 폰트</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sans와 Mono 포함</li>
                    <li>• 자동 서브셋 최적화</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>React DevTools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">컴포넌트 디버깅</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 컴포넌트 트리 검사</li>
                    <li>• Props/State 실시간 확인</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Git</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">버전 관리</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 협업 및 코드 이력 관리</li>
                    <li>• CI/CD 통합</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
