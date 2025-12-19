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

export function TypeScriptDemo() {
  const cvaCode = `import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "base-styles",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground"
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
        lg: "h-10 px-8"
      }
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
`

  const zodCode = `import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  email: z.string().email("올바른 이메일을 입력하세요"),
  age: z.number().min(0).max(120),
  password: z.string().min(8, "비밀번호는 최소 8자 이상입니다")
})

type FormData = z.infer<typeof formSchema>

const form = useForm<FormData>({
  resolver: zodResolver(formSchema)
})`

  const configCode = `// tsconfig.json
{
  "compilerOptions": {
    "strict": true,              // 모든 엄격한 타입 검사 활성화
    "noUncheckedIndexedAccess": true,  // 배열/객체 접근 안전성
    "noImplicitAny": true,       // 암시적 any 금지
    "strictNullChecks": true,    // null/undefined 엄격 검사
    "moduleResolution": "bundler", // Next.js 16 모듈 해석
    "paths": {
      "@/*": ["./*"]             // 경로 별칭
    }
  }
}`

  return (
    <>
      {/* CVA Type Safety */}
      <Section spacing="lg" variant="default">
        <Container>
          <ExampleContainer
            title="CVA 타입 안전성"
            description="Class Variance Authority로 타입 안전한 variant 패턴을 구현합니다"
            code={cvaCode}
          >
            <Card>
              <CardHeader>
                <CardTitle>타입 안전한 Variant</CardTitle>
                <CardDescription>
                  컴파일 타임에 잘못된 variant 사용을 감지합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">장점</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>✓ 자동완성 지원</li>
                      <li>✓ 타입 추론 자동화</li>
                      <li>✓ 잘못된 props 사용 시 컴파일 에러</li>
                      <li>✓ VariantProps로 타입 재사용</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50 border">
                    <code className="text-sm">
                      {`// ✓ 타입 안전
<Button variant="default" size="sm">버튼</Button>

// ✗ 컴파일 에러
<Button variant="invalid">버튼</Button>`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Zod Schema */}
      <Section spacing="lg" variant="muted">
        <Container>
          <ExampleContainer
            title="Zod 스키마 검증"
            description="런타임 타입 검증과 TypeScript 타입 추론을 동시에 제공합니다"
            code={zodCode}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>런타임 검증</CardTitle>
                  <CardDescription>
                    실행 시점에 데이터 유효성 검사
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 폼 데이터 검증</li>
                    <li>✓ API 응답 검증</li>
                    <li>✓ 환경 변수 검증</li>
                    <li>✓ 커스텀 에러 메시지</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>타입 추론</CardTitle>
                  <CardDescription>
                    Zod 스키마에서 TypeScript 타입 자동 생성
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ z.infer&lt;typeof schema&gt;</li>
                    <li>✓ 중복 타입 정의 불필요</li>
                    <li>✓ 스키마와 타입 항상 동기화</li>
                    <li>✓ react-hook-form 통합</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* TypeScript Config */}
      <Section spacing="lg" variant="default">
        <Container>
          <ExampleContainer
            title="TypeScript 설정"
            description="프로젝트의 tsconfig.json 주요 설정을 확인하세요"
            code={configCode}
          >
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>strict 모드 활성화</CardTitle>
                  <CardDescription>
                    모든 엄격한 타입 검사 옵션을 한 번에 활성화합니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">포함된 옵션</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• noImplicitAny</li>
                        <li>• strictNullChecks</li>
                        <li>• strictFunctionTypes</li>
                        <li>• strictBindCallApply</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">장점</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 런타임 에러 사전 방지</li>
                        <li>• 더 안전한 코드</li>
                        <li>• 리팩토링 용이</li>
                        <li>• IDE 지원 향상</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>경로 별칭 (@/)</CardTitle>
                  <CardDescription>
                    상대 경로 대신 절대 경로 별칭을 사용합니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="text-xs font-medium text-green-700 dark:text-green-400 mb-2">
                        ✓ 권장 (절대 경로)
                      </div>
                      <code className="text-sm">
                        {`import { Button } from "@/components/ui/button"`}
                      </code>
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <div className="text-xs font-medium text-red-700 dark:text-red-400 mb-2">
                        ✗ 비권장 (상대 경로)
                      </div>
                      <code className="text-sm">
                        {`import { Button } from "../../components/ui/button"`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ExampleContainer>
        </Container>
      </Section>
    </>
  )
}
