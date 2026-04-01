import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useThemeStore } from '../state/themeStore'
import { applyThemeToDocument, resolveTheme } from '../lib/theme'

export function ThemeToggle() {
  const mode = useThemeStore((s) => s.mode)
  const setMode = useThemeStore((s) => s.setMode)

  useEffect(() => {
    // Keep theme class in sync for CSS tokens (light/dark).
    applyThemeToDocument(mode)
  }, [mode])

  const resolved = resolveTheme(mode)
  const nextMode = resolved === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:bg-card/70"
      aria-label={`Switch to ${nextMode} mode`}
      onClick={() => {
        // Quick toggle: if currently dark, set light; otherwise set dark.
        setMode(nextMode)
        try {
          localStorage.setItem('mc_theme_mode', nextMode)
        } catch {
          // ignore storage errors
        }
      }}
    >
      {resolved === 'dark' ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
      <span className="sr-only">{resolved === 'dark' ? 'Dark mode active' : 'Light mode active'}</span>
    </button>
  )
}

