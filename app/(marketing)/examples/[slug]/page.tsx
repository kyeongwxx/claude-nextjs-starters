import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { examplesData, getExampleBySlug, getExampleSlugs } from "@/lib/examples-data"
import { UIShowcase } from "@/components/examples/ui-showcase"
import { PerformanceDemo } from "@/components/examples/performance-demo"
import { TypeScriptDemo } from "@/components/examples/typescript-demo"
import { DeveloperDemo } from "@/components/examples/developer-demo"
import { ProductionDemo } from "@/components/examples/production-demo"
import { AccessibilityDemo } from "@/components/examples/accessibility-demo"

interface ExamplePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return getExampleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ExamplePageProps): Promise<Metadata> {
  const { slug } = await params
  const example = getExampleBySlug(slug)

  if (!example) {
    return {
      title: "예제를 찾을 수 없습니다",
    }
  }

  return {
    title: `${example.title} 예제`,
    description: example.description,
  }
}

export default async function ExamplePage({ params }: ExamplePageProps) {
  const { slug } = await params
  const example = getExampleBySlug(slug)

  if (!example) {
    notFound()
  }

  const Icon = example.icon

  // 각 slug에 따라 적절한 데모 컴포넌트를 렌더링
  const renderDemo = () => {
    switch (slug) {
      case "performance":
        return <PerformanceDemo />
      case "typescript":
        return <TypeScriptDemo />
      case "ui-showcase":
        return <UIShowcase />
      case "developer":
        return <DeveloperDemo />
      case "production":
        return <ProductionDemo />
      case "accessibility":
        return <AccessibilityDemo />
      default:
        return null
    }
  }

  return (
    <>
      <Section spacing="lg">
        <Container>
          <div className="space-y-6">
            <Badge variant="secondary" className="gap-2">
              <Icon className="h-4 w-4" />
              {example.category}
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {example.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {example.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Separator />

      {renderDemo()}
    </>
  )
}
