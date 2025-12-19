import { CopyButton } from "./copy-button"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = "typescript", filename }: CodeBlockProps) {
  return (
    <div className="relative rounded-lg border bg-muted/50">
      {filename && (
        <div className="flex items-center justify-between border-b px-4 py-2 text-xs text-muted-foreground">
          <span>{filename}</span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4">
          <code className={`language-${language} text-sm`}>
            {code}
          </code>
        </pre>
        <CopyButton
          text={code}
          className="absolute top-2 right-2"
        />
      </div>
    </div>
  )
}
