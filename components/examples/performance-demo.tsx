import Image from "next/image"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExampleContainer } from "./example-container"

export function PerformanceDemo() {
  const imageOptimizationCode = `import Image from "next/image"

<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
  placeholder="blur"
/>`

  const serverComponentCode = `// 서버 컴포넌트 (기본값)
export default function Page() {
  // 서버에서 렌더링, 클라이언트 번들에 포함되지 않음
  const data = await fetchData()
  return <div>{data}</div>
}

// 클라이언트 컴포넌트 (필요시에만)
"use client"
export function Interactive() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}`

  return (
    <>
      {/* Image Optimization */}
      <Section spacing="lg" variant="default">
        <Container>
          <ExampleContainer
            title="이미지 최적화"
            description="Next.js Image 컴포넌트로 자동 최적화, lazy loading, 반응형 이미지를 구현합니다"
            code={imageOptimizationCode}
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Next.js Image</CardTitle>
                    <CardDescription>
                      자동 최적화 및 lazy loading
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>✓ 자동 WebP/AVIF 변환</li>
                      <li>✓ 반응형 이미지 생성</li>
                      <li>✓ Lazy loading 기본 제공</li>
                      <li>✓ Blur placeholder 지원</li>
                      <li>✓ 레이아웃 시프트 방지</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>일반 img 태그</CardTitle>
                    <CardDescription>최적화 없음</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✗ 수동 형식 변환 필요</li>
                      <li>✗ 단일 크기만 제공</li>
                      <li>✗ 수동 lazy loading 구현</li>
                      <li>✗ Placeholder 없음</li>
                      <li>✗ CLS 발생 가능</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Server Components */}
      <Section spacing="lg" variant="muted">
        <Container>
          <ExampleContainer
            title="서버 컴포넌트"
            description="React 19와 Next.js 16의 서버 컴포넌트로 번들 사이즈를 줄이고 성능을 향상시킵니다"
            code={serverComponentCode}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Badge className="mb-2 w-fit">서버 컴포넌트</Badge>
                  <CardTitle>기본값 (추천)</CardTitle>
                  <CardDescription>
                    서버에서 렌더링, 클라이언트 번들 크기 0KB
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 데이터 fetching 최적화</li>
                    <li>✓ 클라이언트 번들 감소</li>
                    <li>✓ 서버 리소스 직접 접근</li>
                    <li>✓ 자동 코드 스플리팅</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">
                    클라이언트 컴포넌트
                  </Badge>
                  <CardTitle>&quot;use client&quot;</CardTitle>
                  <CardDescription>
                    인터랙션 필요시에만 사용
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ useState, useEffect 사용</li>
                    <li>✓ 이벤트 핸들러</li>
                    <li>✓ 브라우저 API 접근</li>
                    <li>⚠ 클라이언트 번들 증가</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Core Web Vitals */}
      <Section spacing="lg" variant="default">
        <Container>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Core Web Vitals
              </h2>
              <p className="text-lg text-muted-foreground">
                Google이 정의한 웹 성능 지표로 사용자 경험을 측정합니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>LCP</CardTitle>
                  <CardDescription>
                    Largest Contentful Paint
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-3xl font-bold text-primary">
                    &lt; 2.5s
                  </div>
                  <p className="text-sm">
                    페이지의 주요 콘텐츠가 로드되는 시간
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Image 최적화와 서버 컴포넌트로 개선
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>FID / INP</CardTitle>
                  <CardDescription>First Input Delay / Interaction to Next Paint</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-3xl font-bold text-primary">
                    &lt; 100ms
                  </div>
                  <p className="text-sm">
                    사용자 입력에 대한 응답 시간
                  </p>
                  <p className="text-xs text-muted-foreground">
                    클라이언트 컴포넌트 최소화로 개선
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>CLS</CardTitle>
                  <CardDescription>Cumulative Layout Shift</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-3xl font-bold text-primary">
                    &lt; 0.1
                  </div>
                  <p className="text-sm">
                    레이아웃 시프트의 누적 점수
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Image width/height 속성으로 방지
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
