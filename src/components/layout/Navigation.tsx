import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { id: 'hero', label: 'Mở đầu' },
  { id: 'theory', label: 'Dân tộc' },
  { id: 'theology', label: 'Tôn giáo' },
  { id: 'relations', label: 'Quan hệ DT–TG' },
  { id: 'map', label: 'Bản đồ 4 vùng' },
  { id: 'timeline', label: 'Lịch sử' },
  { id: 'cases', label: 'Cảnh giác' },
  { id: 'quiz', label: 'Quiz' },
] as const

const SECTION_IDS = NAV_ITEMS.map((n) => n.id)

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS as unknown as string[])
  const drawerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const previousActive = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    const focusFirst = () => {
      const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      focusables?.[0]?.focus()
    }
    // Defer one frame so the drawer is in the DOM before focusing.
    const raf = requestAnimationFrame(focusFirst)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setMobileOpen(false)
        return
      }
      if (e.key !== 'Tab' || !drawerRef.current) return
      const nodes = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      ).filter((el) => !el.hasAttribute('aria-hidden'))
      if (nodes.length === 0) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      const activeEl = document.activeElement as HTMLElement | null
      if (e.shiftKey && activeEl === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previousActive?.focus?.()
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-neutral-200/70 bg-bg-cream/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-display flex items-center gap-2 text-base font-bold tracking-tight text-brand-red md:text-lg"
          aria-label="VietMap Chronicle — về đầu trang"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-brand-red"
          />
          VietMap Chronicle
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Chính">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'relative rounded-full px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'text-brand-red'
                    : 'text-neutral-700 hover:text-brand-red',
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-red/10"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="rounded-full border border-neutral-300 bg-bg-paper/80 p-2 md:hidden"
          aria-label="Mở menu"
          aria-expanded={mobileOpen}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-bg-dark/40 backdrop-blur-sm md:hidden"
              aria-hidden
            />
            <motion.div
              key="drawer"
              ref={drawerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 w-72 max-w-[85vw] bg-bg-cream shadow-xl md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu di động"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                <span className="font-display text-base font-bold text-brand-red">
                  Mục lục
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-2 text-neutral-600 hover:bg-neutral-100"
                  aria-label="Đóng menu"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M4 4l10 10M14 4L4 14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col p-2" aria-label="Mục lục di động">
                {NAV_ITEMS.map((item, idx) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-baseline gap-3 rounded-lg px-4 py-3 text-base transition-colors',
                      active === item.id
                        ? 'bg-brand-red/10 text-brand-red'
                        : 'text-neutral-800 hover:bg-neutral-100',
                    )}
                  >
                    <span className="font-mono text-xs text-neutral-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
