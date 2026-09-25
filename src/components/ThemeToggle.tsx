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
      <span aria-hidden="true" className="w-[2.5rem] text-right">
        {isDark ? 'Dark' : 'Light'}
      </span>
      {/* A small square-cornered switch: hairline track, solid knob. */}
      <span aria-hidden="true" className="relative inline-block h-3 w-6 border border-current">
        <span
          className={`absolute top-px left-px h-2 w-2 bg-current transition-transform duration-500 ease-editorial ${
            isDark ? 'translate-x-3' : 'translate-x-0'
          }`}
        />
      </span>
    </button>
  )
}
