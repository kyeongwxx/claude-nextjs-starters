import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ExampleContainer } from "./example-container"

export function AccessibilityDemo() {
  const ariaCode = `// 스크린 리더 친화적 버튼
<button
  aria-label="메뉴 열기"
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
>
  <MenuIcon />
</button>

// 접근 가능한 네비게이션
<nav aria-label="주요 네비게이션">
  <ul>
    <li><a href="/">홈</a></li>
    <li><a href="/about">소개</a></li>
  </ul>
</nav>

// 폼 레이블
<label htmlFor="email">이메일</label>
<input
  id="email"
  type="email"
  aria-describedby="email-help"
  aria-required="true"
/>
<span id="email-help">유효한 이메일을 입력하세요</span>`

  const semanticCode = `// ✓ 올바른 heading 계층
<h1>페이지 제목</h1>
  <h2>섹션 제목</h2>
    <h3>하위 섹션</h3>
  <h2>다른 섹션</h2>

// ✓ Landmark 요소
<header>...</header>
<nav>...</nav>
<main>...</main>
<aside>...</aside>
<footer>...</footer>

// ✓ 의미론적 HTML
<article>, <section>, <aside>, <figure>`

  const keyboardCode = `// 키보드 네비게이션 지원
<button
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }}
  tabIndex={0}
>
  클릭 가능
</button>

// Skip to main content 링크
<a href="#main-content" className="sr-only focus:not-sr-only">
  메인 콘텐츠로 건너뛰기
</a>

<main id="main-content">
  {/* 콘텐츠 */}
</main>`

  return (
    <>
      {/* ARIA Attributes */}
      <Section spacing="lg" variant="default">
        <Container>
          <ExampleContainer
            title="ARIA 속성"
            description="스크린 리더 사용자를 위한 추가 정보를 제공합니다"
            code={ariaCode}
          >
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>주요 ARIA 속성</CardTitle>
                  <CardDescription>
                    WAI-ARIA로 웹 접근성을 향상시킵니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Role</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• role=&quot;button&quot;</li>
                        <li>• role=&quot;navigation&quot;</li>
                        <li>• role=&quot;dialog&quot;</li>
                        <li>• role=&quot;alert&quot;</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">State</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• aria-expanded</li>
                        <li>• aria-selected</li>
                        <li>• aria-checked</li>
                        <li>• aria-disabled</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Property</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• aria-label</li>
                        <li>• aria-labelledby</li>
                        <li>• aria-describedby</li>
                        <li>• aria-controls</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Relationship</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• aria-owns</li>
                        <li>• aria-activedescendant</li>
                        <li>• aria-flowto</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h4 className="font-medium">실제 예시</h4>
                <div className="flex flex-wrap gap-3">
                  <Button aria-label="홈으로 이동">
                    홈
                  </Button>
                  <Button aria-label="검색" variant="outline">
                    🔍
                  </Button>
                  <Button
                    aria-label="메뉴 열기"
                    aria-expanded="false"
                    variant="secondary"
                  >
                    메뉴
                  </Button>
                </div>
              </div>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Keyboard Navigation */}
      <Section spacing="lg" variant="muted">
        <Container>
          <ExampleContainer
            title="키보드 네비게이션"
            description="마우스 없이도 모든 기능에 접근할 수 있어야 합니다"
            code={keyboardCode}
          >
            <Card>
              <CardHeader>
                <CardTitle>키보드 단축키</CardTitle>
                <CardDescription>
                  Tab 키로 모든 인터랙티브 요소에 접근 가능합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">기본 키</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          <Badge variant="outline" className="mr-2">
                            Tab
                          </Badge>
                          다음 요소로 이동
                        </li>
                        <li>
                          <Badge variant="outline" className="mr-2">
                            Shift+Tab
                          </Badge>
                          이전 요소로 이동
                        </li>
                        <li>
                          <Badge variant="outline" className="mr-2">
                            Enter
                          </Badge>
                          링크/버튼 활성화
                        </li>
                        <li>
                          <Badge variant="outline" className="mr-2">
                            Space
                          </Badge>
                          버튼/체크박스 토글
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">화살표 키</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          <Badge variant="outline" className="mr-2">
                            ↑↓
                          </Badge>
                          메뉴/리스트 이동
                        </li>
                        <li>
                          <Badge variant="outline" className="mr-2">
                            ←→
                          </Badge>
                          탭/슬라이더 이동
                        </li>
                        <li>
                          <Badge variant="outline" className="mr-2">
                            Esc
                          </Badge>
                          모달/드롭다운 닫기
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium text-sm">
                      시도해보세요 (Tab 키로 이동)
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <Button>첫 번째</Button>
                      <Button variant="outline">두 번째</Button>
                      <Button variant="secondary">세 번째</Button>
                      <Button variant="ghost">네 번째</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Semantic HTML */}
      <Section spacing="lg" variant="default">
        <Container>
          <ExampleContainer
            title="시맨틱 HTML"
            description="의미론적으로 올바른 HTML 구조를 사용합니다"
            code={semanticCode}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Heading 계층</CardTitle>
                  <CardDescription>
                    올바른 순서로 heading을 사용합니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">h1 - 페이지 제목</div>
                    <div className="text-xl font-bold pl-4">
                      h2 - 주요 섹션
                    </div>
                    <div className="text-lg font-semibold pl-8">
                      h3 - 하위 섹션
                    </div>
                    <div className="text-base font-semibold pl-12">
                      h4 - 세부 항목
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      ✓ 순서를 건너뛰지 않습니다 (h1 → h3 ✗)
                      <br />
                      ✓ h1은 페이지당 하나만 사용
                      <br />✓ 스타일이 아닌 구조로 사용
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Landmark 요소</CardTitle>
                  <CardDescription>
                    페이지 구조를 명확히 합니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-2 border rounded">
                      <code className="text-xs">&lt;header&gt;</code>
                      <p className="text-xs text-muted-foreground">
                        페이지 상단, 로고, 네비게이션
                      </p>
                    </div>
                    <div className="p-2 border rounded">
                      <code className="text-xs">&lt;nav&gt;</code>
                      <p className="text-xs text-muted-foreground">
                        주요 네비게이션 링크
                      </p>
                    </div>
                    <div className="p-2 border rounded">
                      <code className="text-xs">&lt;main&gt;</code>
                      <p className="text-xs text-muted-foreground">
                        페이지의 주요 콘텐츠
                      </p>
                    </div>
                    <div className="p-2 border rounded">
                      <code className="text-xs">&lt;aside&gt;</code>
                      <p className="text-xs text-muted-foreground">
                        사이드바, 관련 콘텐츠
                      </p>
                    </div>
                    <div className="p-2 border rounded">
                      <code className="text-xs">&lt;footer&gt;</code>
                      <p className="text-xs text-muted-foreground">
                        페이지 하단, 저작권 정보
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Color Contrast */}
      <Section spacing="lg" variant="muted">
        <Container>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">색상 대비</h2>
              <p className="text-lg text-muted-foreground">
                WCAG 2.1 기준을 준수하는 색상 조합을 사용합니다
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>WCAG 기준</CardTitle>
                  <CardDescription>
                    웹 콘텐츠 접근성 가이드라인
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Level AA (일반 텍스트)</span>
                      <Badge>4.5:1</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      최소 대비 비율, 대부분의 텍스트에 적용
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Level AA (큰 텍스트)</span>
                      <Badge>3:1</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      18pt 이상 또는 14pt bold 이상
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Level AAA (일반 텍스트)</span>
                      <Badge variant="secondary">7:1</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      향상된 대비, 저시력 사용자 지원
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>테마별 색상 대비</CardTitle>
                  <CardDescription>
                    라이트/다크 모드 모두 접근성 확보
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">라이트 모드</h4>
                    <div className="p-4 bg-white border rounded">
                      <p className="text-black">
                        검은색 텍스트 + 흰색 배경 = 21:1
                      </p>
                      <p className="text-gray-600 mt-2">
                        회색 텍스트 + 흰색 배경 = 7:1
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">다크 모드</h4>
                    <div className="p-4 bg-gray-950 border rounded">
                      <p className="text-white">
                        흰색 텍스트 + 검은색 배경 = 21:1
                      </p>
                      <p className="text-gray-400 mt-2">
                        밝은 회색 + 검은색 배경 = 8:1
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
