import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { ExampleContainer } from "./example-container"

export function UIShowcase() {
  const buttonCode = `import { Button } from "@/components/ui/button"

<Button variant="default">기본 버튼</Button>
<Button variant="destructive">삭제 버튼</Button>
<Button variant="outline">아웃라인 버튼</Button>
<Button variant="secondary">보조 버튼</Button>
<Button variant="ghost">고스트 버튼</Button>
<Button variant="link">링크 버튼</Button>`

  const cardCode = `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드 설명</CardDescription>
  </CardHeader>
  <CardContent>
    <p>카드 내용이 여기에 들어갑니다.</p>
  </CardContent>
</Card>`

  const badgeCode = `import { Badge } from "@/components/ui/badge"

<Badge variant="default">기본</Badge>
<Badge variant="secondary">보조</Badge>
<Badge variant="destructive">경고</Badge>
<Badge variant="outline">아웃라인</Badge>`

  return (
    <>
      {/* Button Showcase */}
      <Section spacing="lg" variant="default">
        <Container>
          <ExampleContainer
            title="Button 컴포넌트"
            description="6가지 variant와 4가지 size 조합으로 다양한 버튼 스타일을 제공합니다"
            code={buttonCode}
          >
            <div className="space-y-8">
              {/* Variants */}
              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground">
                  Variants (기본 크기)
                </h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">기본 버튼</Button>
                  <Button variant="destructive">삭제 버튼</Button>
                  <Button variant="outline">아웃라인 버튼</Button>
                  <Button variant="secondary">보조 버튼</Button>
                  <Button variant="ghost">고스트 버튼</Button>
                  <Button variant="link">링크 버튼</Button>
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground">
                  Sizes (기본 variant)
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">작은 버튼</Button>
                  <Button size="default">기본 버튼</Button>
                  <Button size="lg">큰 버튼</Button>
                  <Button size="icon">⚙</Button>
                </div>
              </div>

              {/* Disabled State */}
              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground">
                  Disabled State
                </h4>
                <div className="flex flex-wrap gap-4">
                  <Button disabled>비활성화됨</Button>
                  <Button variant="outline" disabled>
                    비활성화됨
                  </Button>
                </div>
              </div>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Card Showcase */}
      <Section spacing="lg" variant="muted">
        <Container>
          <ExampleContainer
            title="Card 컴포넌트"
            description="합성 컴포넌트 패턴으로 유연한 카드 레이아웃을 구성합니다"
            code={cardCode}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>기본 카드</CardTitle>
                  <CardDescription>
                    CardHeader, CardTitle, CardDescription을 포함합니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    카드 내용이 여기에 들어갑니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Hover 효과</CardTitle>
                  <CardDescription>
                    마우스를 올리면 그림자가 나타납니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    hover:shadow-lg 클래스를 추가했습니다.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Footer 포함</CardTitle>
                  <CardDescription>
                    CardFooter로 하단 액션 영역을 추가합니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">카드 본문 내용</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    액션 버튼
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Badge Showcase */}
      <Section spacing="lg" variant="default">
        <Container>
          <ExampleContainer
            title="Badge 컴포넌트"
            description="작고 간결한 라벨과 태그를 표시하는 컴포넌트입니다"
            code={badgeCode}
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground">
                  Badge Variants
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">기본</Badge>
                  <Badge variant="secondary">보조</Badge>
                  <Badge variant="destructive">경고</Badge>
                  <Badge variant="outline">아웃라인</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground">
                  실제 사용 예시
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Badge>새 기능</Badge>
                  <Badge variant="secondary">v2.0</Badge>
                  <Badge variant="outline">Beta</Badge>
                  <Badge variant="destructive">중단됨</Badge>
                </div>
              </div>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Separator Showcase */}
      <Section spacing="lg" variant="muted">
        <Container>
          <ExampleContainer
            title="Separator 컴포넌트"
            description="수평 또는 수직 구분선으로 콘텐츠를 시각적으로 분리합니다"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground">
                  Horizontal Separator
                </h4>
                <div className="space-y-4">
                  <p className="text-sm">첫 번째 섹션</p>
                  <Separator orientation="horizontal" />
                  <p className="text-sm">두 번째 섹션</p>
                  <Separator orientation="horizontal" />
                  <p className="text-sm">세 번째 섹션</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground">
                  Vertical Separator
                </h4>
                <div className="flex items-center gap-4 h-12">
                  <span className="text-sm">왼쪽</span>
                  <Separator orientation="vertical" />
                  <span className="text-sm">중간</span>
                  <Separator orientation="vertical" />
                  <span className="text-sm">오른쪽</span>
                </div>
              </div>
            </div>
          </ExampleContainer>
        </Container>
      </Section>

      {/* Color Palette */}
      <Section spacing="lg" variant="default">
        <Container>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">색상 팔레트</h2>
              <p className="text-lg text-muted-foreground">
                Tailwind CSS v4와 OKLCh 색공간을 사용한 의미론적 색상 시스템
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="h-16 rounded-md bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-medium">
                        Primary
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      주요 액션과 브랜드 색상
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="h-16 rounded-md bg-secondary flex items-center justify-center">
                      <span className="text-secondary-foreground font-medium">
                        Secondary
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      보조 액션과 요소
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="h-16 rounded-md bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground font-medium">
                        Muted
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      비활성화 및 배경
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="h-16 rounded-md bg-accent flex items-center justify-center">
                      <span className="text-accent-foreground font-medium">
                        Accent
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      강조 및 하이라이트
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="h-16 rounded-md bg-destructive flex items-center justify-center">
                      <span className="text-destructive-foreground font-medium">
                        Destructive
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      경고 및 삭제 액션
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="h-16 rounded-md border-2 border-border flex items-center justify-center bg-card">
                      <span className="text-card-foreground font-medium">
                        Card
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      카드 및 패널 배경
                    </p>
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
