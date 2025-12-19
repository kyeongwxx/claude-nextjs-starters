import type { Metadata } from "next"
import Link from "next/link"
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
import { examplesData } from "@/lib/examples-data"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "예제",
  description: "Next.js 스타터킷의 주요 기능을 실제 예제로 확인하세요",
}

export default function ExamplesPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              예제 둘러보기
            </h1>
            <p className="text-xl text-muted-foreground">
              6가지 핵심 기능을 인터랙티브한 예제로 직접 경험해보세요
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="md" variant="muted">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examplesData.map((example) => {
              const Icon = example.icon
              return (
                <Card
                  key={example.slug}
                  className="hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{example.title}</CardTitle>
                    <CardDescription>{example.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" className="w-full gap-2">
                      <Link href={`/examples/${example.slug}`}>
                        예제 보기
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>
    </>
  )
}
