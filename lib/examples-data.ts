import { LucideIcon, Zap, Shield, Palette, Code2, Rocket, Users } from "lucide-react"

export interface ExampleMetadata {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  category: string
}

export const examplesData: ExampleMetadata[] = [
  {
    slug: "performance",
    title: "초고속 성능",
    description: "Next.js 16의 최신 최적화 기술을 활용한 성능 향상 방법을 확인하세요",
    icon: Zap,
    category: "성능",
  },
  {
    slug: "typescript",
    title: "타입 안전성",
    description: "TypeScript strict 모드와 타입 안전한 패턴으로 안정적인 코드를 작성하세요",
    icon: Shield,
    category: "타입",
  },
  {
    slug: "ui-showcase",
    title: "아름다운 UI",
    description: "Tailwind CSS v4와 shadcn/ui 컴포넌트로 만든 세련된 UI를 살펴보세요",
    icon: Palette,
    category: "디자인",
  },
  {
    slug: "developer",
    title: "개발자 중심",
    description: "최고의 개발 경험을 위한 모던 툴링과 모범 사례를 알아보세요",
    icon: Code2,
    category: "DX",
  },
  {
    slug: "production",
    title: "프로덕션 준비 완료",
    description: "프로덕션 배포를 위한 최적화와 설정 방법을 확인하세요",
    icon: Rocket,
    category: "배포",
  },
  {
    slug: "accessibility",
    title: "접근성",
    description: "WCAG 표준을 준수하는 접근 가능한 웹 애플리케이션을 만드세요",
    icon: Users,
    category: "접근성",
  },
]

/**
 * 모든 예제의 slug 배열을 반환합니다.
 * generateStaticParams에서 사용됩니다.
 */
export function getExampleSlugs() {
  return examplesData.map((example) => example.slug)
}

/**
 * slug로 예제 데이터를 찾아 반환합니다.
 */
export function getExampleBySlug(slug: string) {
  return examplesData.find((example) => example.slug === slug)
}
