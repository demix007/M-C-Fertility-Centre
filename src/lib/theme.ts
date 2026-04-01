import type { ThemeMode } from '../state/themeStore'

export function resolveTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'light') return 'light'
  if (mode === 'dark') return 'dark'

  const prefersLight =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  return prefersLight ? 'light' : 'dark'
}

export function applyThemeToDocument(mode: ThemeMode) {
  const theme = resolveTheme(mode)
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

