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
import { Check } from "lucide-react"

export function ProductionDemo() {
  const metadataCode = `import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "페이지 제목",
  description: "페이지 설명",
  openGraph: {
    title: "OG 제목",
    description: "OG 설명",
    url: "https://example.com",
    siteName: "사이트 이름",
    images: [
      {
        url: "https://example.com/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "트위터 제목",
    description: "트위터 설명",
    images: ["https://example.com/og.jpg"],
  },
}`

  const staticParamsCode = `// 빌드 타임에 정적 페이지 생성
export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// 동적 메타데이터 생성
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)

  return {
    title: post.title,
    description: post.description,
  }
}`

  return (
    <>
      {/* Metadata */}
      <Section spacing="lg" variant="default">
        <Container>
          <ExampleContainer
            title="메타데이터 설정"
            description="SEO와 소셜 미디어 최적화를 위한 메타데이터를 설정합니다"
            code={metadataCode}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>SEO 메타데이터</CardTitle>
                  <CardDescription>
                    검색 엔진 최적화를 위한 기본 정보
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ title, description</li>
                    <li>✓ keywords</li>
                    <li>✓ 캐노니컬 URL</li>
                    <li>✓ robots 설정</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>소셜 미디어</CardTitle>
                  <CardDescription>
                    Open Graph와 Twitter Card 설정
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Open Graph (Facebook, LinkedIn)</li>
                    <li>✓ Twitter Card</li>
                    <li>✓ OG 이미지 (1200×630)</li>
                    <li>✓ locale, site_name</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Build Optimization */}
      <Section spacing="lg" variant="muted">
        <Container>
          <ExampleContainer
            title="빌드 최적화"
            description="Next.js의 정적 생성과 동적 라우팅으로 성능을 최적화합니다"
            code={staticParamsCode}
          >
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>정적 생성 (SSG)</CardTitle>
                  <CardDescription>
                    빌드 타임에 페이지를 미리 생성하여 최고 성능 제공
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">장점</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 즉각적인 페이지 로드</li>
                        <li>• CDN 캐싱 가능</li>
                        <li>• 서버 부하 최소화</li>
                        <li>• 뛰어난 SEO</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">사용 사례</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 블로그 포스트</li>
                        <li>• 마케팅 페이지</li>
                        <li>• 문서 사이트</li>
                        <li>• 제품 상세 페이지</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>서버 사이드 렌더링 (SSR)</CardTitle>
                  <CardDescription>
                    요청 시점에 페이지를 생성하여 최신 데이터 제공
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">장점</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 항상 최신 데이터</li>
                        <li>• 개인화된 콘텐츠</li>
                        <li>• 동적 데이터 처리</li>
                        <li>• SEO 지원</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">사용 사례</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 대시보드</li>
                        <li>• 사용자 프로필</li>
                        <li>• 실시간 데이터</li>
                        <li>• 개인화 페이지</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Deployment Checklist */}
      <Section spacing="lg" variant="default">
        <Container>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                배포 체크리스트
              </h2>
              <p className="text-lg text-muted-foreground">
                프로덕션 배포 전 확인해야 할 항목들
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <Badge className="mb-2 w-fit">필수</Badge>
                  <CardTitle>성능 최적화</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">
                          이미지 최적화
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Next.js Image 사용, WebP 포맷
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">
                          코드 스플리팅
                        </div>
                        <div className="text-sm text-muted-foreground">
                          동적 import, lazy loading
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">폰트 최적화</div>
                        <div className="text-sm text-muted-foreground">
                          next/font 사용, 서브셋
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">번들 사이즈</div>
                        <div className="text-sm text-muted-foreground">
                          불필요한 의존성 제거
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge className="mb-2 w-fit">필수</Badge>
                  <CardTitle>SEO 설정</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">메타데이터</div>
                        <div className="text-sm text-muted-foreground">
                          모든 페이지에 title, description
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">
                          Open Graph 이미지
                        </div>
                        <div className="text-sm text-muted-foreground">
                          소셜 미디어 공유 최적화
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">
                          sitemap.xml
                        </div>
                        <div className="text-sm text-muted-foreground">
                          검색 엔진 크롤링 지원
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">
                          robots.txt
                        </div>
                        <div className="text-sm text-muted-foreground">
                          크롤링 규칙 설정
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">
                    권장
                  </Badge>
                  <CardTitle>보안</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">환경 변수</div>
                        <div className="text-sm text-muted-foreground">
                          .env 파일 보안 관리
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">HTTPS</div>
                        <div className="text-sm text-muted-foreground">
                          SSL 인증서 설정
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">보안 헤더</div>
                        <div className="text-sm text-muted-foreground">
                          CSP, HSTS 등 설정
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">의존성 검사</div>
                        <div className="text-sm text-muted-foreground">
                          보안 취약점 정기 점검
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">
                    권장
                  </Badge>
                  <CardTitle>모니터링</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">에러 추적</div>
                        <div className="text-sm text-muted-foreground">
                          Sentry 등 에러 모니터링
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">분석 도구</div>
                        <div className="text-sm text-muted-foreground">
                          Google Analytics, Vercel Analytics
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">성능 모니터링</div>
                        <div className="text-sm text-muted-foreground">
                          Core Web Vitals 추적
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">로그 수집</div>
                        <div className="text-sm text-muted-foreground">
                          중요 이벤트 로깅
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Deployment Platforms */}
      <Section spacing="lg" variant="muted">
        <Container>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">배포 플랫폼</h2>
              <p className="text-lg text-muted-foreground">
                Next.js 애플리케이션을 쉽게 배포할 수 있는 플랫폼들
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Vercel</CardTitle>
                  <Badge variant="secondary" className="w-fit">추천</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">
                    Next.js 제작사의 배포 플랫폼
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Git 연동 자동 배포</li>
                    <li>• 글로벌 CDN</li>
                    <li>• 프리뷰 배포</li>
                    <li>• 무료 SSL</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Netlify</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">
                    강력한 CI/CD 파이프라인
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 자동 빌드 배포</li>
                    <li>• 폼 처리</li>
                    <li>• 서버리스 함수</li>
                    <li>• 분기별 배포</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AWS / GCP / Azure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">
                    클라우드 인프라 플랫폼
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 완전한 제어</li>
                    <li>• 확장성</li>
                    <li>• 커스텀 설정</li>
                    <li>• 엔터프라이즈급</li>
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
