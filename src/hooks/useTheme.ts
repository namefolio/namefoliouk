import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function currentTheme(): Theme {
  // index.html sets this before first paint, from localStorage or the system setting.
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(currentTheme)

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage unavailable (private mode etc.) — the choice still applies for this visit.
    }
    setThemeState(next)
  }, [])

  // Follow the system setting until the visitor makes an explicit choice.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null
      try {
        saved = localStorage.getItem(STORAGE_KEY)
      } catch {
        // ignore
      }
      if (saved) return
      const next: Theme = e.matches ? 'dark' : 'light'
      document.documentElement.dataset.theme = next
      setThemeState(next)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return { theme, setTheme }
}
