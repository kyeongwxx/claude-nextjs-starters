import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "연락처",
  description: "문의사항이 있으시면 연락주세요",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            연락처
          </h1>
          <p className="text-xl text-muted-foreground">
            문의사항이 있으시면 언제든지 연락주세요
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <CardTitle>이메일</CardTitle>
              </div>
              <CardDescription>
                이메일로 문의하시면 빠르게 답변드리겠습니다
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:contact@example.com"
                className="text-primary hover:underline"
              >
                contact@example.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                <CardTitle>GitHub</CardTitle>
              </div>
              <CardDescription>
                GitHub에서 이슈를 등록하거나 기여해주세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/yourusername
              </a>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <CardTitle>메시지 보내기</CardTitle>
            </div>
            <CardDescription>
              아래 양식을 작성하여 메시지를 보내주세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                이름
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="홍길동"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                이메일
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="email@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                메시지
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="문의 내용을 입력해주세요..."
              />
            </div>
            <Button type="submit" className="w-full">
              메시지 전송
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
