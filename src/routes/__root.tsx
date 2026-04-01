import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import {
  Outlet,
  createRootRoute,
  useLocation,
  Link,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { SiteHeader } from '../components/layout/SiteHeader'
import { SiteFooter } from '../components/layout/SiteFooter'
import { startMocking } from '../mocks/startMocking'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const location = useLocation()
  const isDev = import.meta.env.DEV

  useEffect(() => {
    if (isDev) {
      startMocking()
    }
  }, [isDev])

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-background focus:px-3 focus:py-2 focus:text-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <div className="w-full px-4 py-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <SiteFooter />
      {isDev ? <TanStackRouterDevtools /> : null}
      {/* Hidden link for accessibility / consistent focus targets */}
      <div className="hidden">
        <Link to="/booking" aria-hidden="true">
          Booking
        </Link>
      </div>
    </div>
  )
}

