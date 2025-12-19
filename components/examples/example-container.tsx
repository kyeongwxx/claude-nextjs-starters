"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "./code-block"

interface ExampleContainerProps {
  title: string
  description: string
  children: React.ReactNode
  code?: string
  language?: string
}

export function ExampleContainer({
  title,
  description,
  children,
  code,
  language = "typescript",
}: ExampleContainerProps) {
  const [showCode, setShowCode] = React.useState(false)

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        {children}
      </div>

      {code && (
        <>
          <Button
            onClick={() => setShowCode(!showCode)}
            variant="outline"
            size="sm"
          >
            {showCode ? "코드 숨기기" : "코드 보기"}
          </Button>

          {showCode && (
            <CodeBlock code={code} language={language} />
          )}
        </>
      )}
    </div>
  )
}
