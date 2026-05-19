import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const Icon = theme === 'dark' ? Sun : Moon

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center border border-white/25 text-white/65 transition-colors hover:text-white"
      aria-label="Toggle color theme"
    >
      <Icon size={16} />
    </button>
  )
}
