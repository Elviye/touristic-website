import type { ReactNode } from 'react'

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 font-inter text-[0.65rem] font-medium uppercase tracking-[0.28em] text-accent">
      {children}
    </p>
  )
}
