# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16과 React 19를 기반으로 한 한국어 마케팅/SaaS 스타터 템플릿입니다. TypeScript strict 모드, Tailwind CSS v4, shadcn/ui 컴포넌트를 사용하며 다크 모드와 접근성을 지원합니다.

## 주요 명령어

```bash
npm run dev      # 개발 서버 시작 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 실행
```

## 아키텍처 구조

### 라우팅 시스템 (App Router)

- `app/(marketing)/` - 마케팅 페이지 라우트 그룹 (괄호는 URL에 포함되지 않음)
  - `page.tsx` - 홈페이지 (HeroSection, FeatureGrid, CtaSection)
  - `about/` - 소개 페이지
  - `contact/` - 연락처 페이지 (폼 포함)
  - `feature/` - 기능 상세 페이지
  - `layout.tsx` - Header와 Footer를 포함한 마케팅 레이아웃

- `app/layout.tsx` - 루트 레이아웃 (ThemeProvider 적용)
- `app/globals.css` - Tailwind v4 전역 스타일 및 CSS 변수

### 컴포넌트 계층 구조

```
components/
├── ui/              # 기본 UI 컴포넌트 (shadcn/ui 스타일)
│   ├── button.tsx   # CVA를 사용한 variant 패턴
│   ├── card.tsx     # Card, CardHeader, CardTitle 등 합성 컴포넌트
│   ├── badge.tsx
│   ├── separator.tsx
│   └── sheet.tsx    # 모바일 드로어/모달
│
├── layout/          # 레이아웃 컴포넌트
│   ├── header.tsx   # "use client" - 네비게이션 및 테마 토글
│   ├── footer.tsx
│   ├── container.tsx  # size variants (sm, md, lg, xl, full)
│   ├── section.tsx    # spacing variants, 테마 variant
│   └── mobile-nav.tsx # "use client" - Sheet 기반 모바일 네비게이션
│
├── marketing/       # 도메인 특화 마케팅 컴포넌트
│   ├── hero-section.tsx
│   ├── feature-grid.tsx
│   ├── feature-card.tsx
│   └── cta-section.tsx
│
└── theme/           # 테마 관리
    ├── theme-provider.tsx  # next-themes 래퍼
    └── theme-toggle.tsx    # "use client" - 다크/라이트 모드 토글
```

### 유틸리티 및 설정

- `lib/utils.ts` - `cn()` 함수 (clsx + tailwind-merge)
- `lib/constants.ts` - `siteConfig`, `mainNav` 등 중앙 집중식 설정
- `hooks/` - 커스텀 React 훅 디렉토리 (필요시 추가)
- `components.json` - shadcn/ui 설정 (style: "new-york", baseColor: "neutral")

## 기술 스택 및 패턴

### 핵심 기술

- **Next.js 16.1.0** - App Router 사용
- **React 19.2.3** - 최신 React 버전
- **TypeScript 5** - strict 모드 활성화
- **Tailwind CSS v4** - @theme 구문과 CSS 변수 기반
- **shadcn/ui** - 접근 가능한 unstyled 컴포넌트 라이브러리

### 폼 및 검증

- **react-hook-form 7.68.0** - 폼 관리
- **zod 4.2.1** - 스키마 검증
- **@hookform/resolvers** - react-hook-form과 zod 통합

### 스타일링 도구

- **Class Variance Authority (CVA)** - 타입 안전 variant 패턴
- **clsx + tailwind-merge** - 조건부 className 병합
- **next-themes** - 다크 모드 관리
- **lucide-react** - 아이콘 라이브러리

### 주요 아키텍처 패턴

1. **서버 컴포넌트 우선** - 기본적으로 서버 컴포넌트 사용, 상호작용이 필요한 경우에만 `"use client"` 추가
2. **Route Groups** - 괄호 `(groupname)`를 사용해 레이아웃 분리 (URL에 영향 없음)
3. **CVA Variant 패턴** - prop 조합 대신 variant 기반 컴포넌트 설계
4. **Path Aliases** - 상대 경로 대신 `@/`를 항상 사용 (`@/components`, `@/lib`)
5. **중앙 집중식 설정** - 네비게이션 및 사이트 설정은 `lib/constants.ts`에서 관리

## 스타일링 시스템

### CSS 변수 기반 테마

`app/globals.css`에서 `:root`와 `.dark` 선택자로 CSS 변수 정의:

```css
@import 'tailwindcss';

@theme {
  --color-primary: oklch(0.6 0.2 250);
  --color-primary-foreground: oklch(1 0 0);
  /* ... */
}

.dark {
  --color-primary: oklch(0.7 0.2 250);
  /* ... */
}
```

- **OKLCh 색공간** 사용 - 지각적으로 균일한 색상
- **의미론적 색상 이름** - primary, secondary, destructive, accent, muted 등
- **반응형 border-radius** - sm, md, lg, xl, 2xl, 3xl, 4xl

### CVA 사용 예시

```typescript
import { cva } from "class-variance-authority"

const buttonVariants = cva("base-styles", {
  variants: {
    variant: { default: "...", destructive: "..." },
    size: { default: "...", sm: "...", lg: "..." }
  },
  defaultVariants: { variant: "default", size: "default" }
})
```

## TypeScript 설정

- **strict: true** - 전체 타입 안전성 활성화
- **moduleResolution: "bundler"** - Next.js 16 모듈 해석
- **paths: { "@/*": ["./*"] }** - 경로 별칭
- **target: ES2017** - 적절한 브라우저 호환성

## 개발 시 주의사항

1. **컴포넌트 추가 시** - 기존 컴포넌트 계층 구조를 따라 적절한 디렉토리에 배치 (ui/layout/marketing/theme)
2. **새 페이지 추가 시** - `(marketing)` 그룹 내에 추가하거나 새로운 route group 생성
3. **스타일 수정 시** - CSS 변수를 활용하고 Tailwind utility 클래스 사용
4. **클라이언트 인터랙션** - 필요한 경우에만 `"use client"` 지시어 추가
5. **경로 참조 시** - 항상 `@/` prefix 사용 (예: `@/components/ui/button`)
6. **설정 변경 시** - `lib/constants.ts`에서 siteConfig와 mainNav 수정
7. **새 컴포넌트 생성 시** - CVA를 사용해 variant 기반으로 설계

## 로컬라이제이션

- 현재 UI 언어: **한국어 (KO)**
- HTML lang 속성: `lang="ko"` (app/layout.tsx)
- 모든 콘텐츠, 네비게이션, 메타데이터가 한국어로 작성됨
- i18n 라이브러리는 현재 미사용 (정적 한국어 콘텐츠)

## 확장 포인트

이 템플릿은 다음과 같은 확장을 쉽게 지원하도록 설계됨:

- 새로운 라우트 그룹 추가 (예: `(dashboard)`, `(auth)`)
- 데이터베이스 통합 (API 라우트 활용)
- 인증 시스템 구현
- 관리자 대시보드 추가
- E-commerce 기능 추가
- `/hooks` 디렉토리에 커스텀 훅 추가

## 접근성 및 성능

- WCAG 준수를 목표로 설계
- 시맨틱 HTML 사용 (적절한 heading 계층)
- 키보드 네비게이션 지원
- aria-label 제공
- Next.js 16 기본 최적화 (코드 스플리팅, 이미지 최적화)
- Core Web Vitals 모니터링 (ESLint 설정)
