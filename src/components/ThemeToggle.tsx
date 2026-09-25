import type { Theme } from '../hooks/useTheme'

interface ThemeToggleProps {
  theme: Theme
  onChange: (theme: Theme) => void
  className?: string
}

export function ThemeToggle({ theme, onChange, className = '' }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={() => onChange(isDark ? 'light' : 'dark')}
      className={`group label -my-2 cursor-pointer items-center gap-3 py-2 text-muted transition-colors duration-300 hover:text-ink ${className}`}
    >
      <span aria-hidden="true" className="w-[2.25rem] text-right">
        {isDark ? 'Dark' : 'Light'}
      </span>
      <span aria-hidden="true" className="relative inline-block h-3.5 w-7 rounded-full border border-current">
        <span
          className={`absolute top-[2px] left-[2px] h-2 w-2 rounded-full bg-current transition-transform duration-500 ease-editorial ${
            isDark ? 'translate-x-3.5' : 'translate-x-0'
          }`}
        />
      </span>
    </button>
  )
}
