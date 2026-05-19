import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface BracketButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'light' | 'dark'
  to?: string
}

const base =
  'inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap border px-6 font-inter text-[0.75rem] tracking-[0.08em] transition-colors'

const variants = {
  light: 'border-white/65 bg-transparent text-white hover:bg-white/12',
  dark: 'border-foreground/40 bg-transparent text-foreground hover:bg-foreground/6',
}

export function BracketButton({ children, variant = 'dark', to, className = '', ...props }: BracketButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  const label = `[ ${children} ]`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {label}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {label}
    </button>
  )
}
