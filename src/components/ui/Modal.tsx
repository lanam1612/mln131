import { useEffect, useRef, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

interface ModalProps {
  open: boolean
  onClose: () => void
  /** Slide-in side panel (default) or centered dialog. */
  variant?: 'side' | 'center'
  title: string
  /** Optional element rendered next to the title (e.g., region badge). */
  titleAdornment?: ReactNode
  children: ReactNode
  className?: string
  /** Used for aria-labelledby; defaults to "modal-title". */
  labelledBy?: string
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function Modal({
  open,
  onClose,
  variant = 'side',
  title,
  titleAdornment,
  children,
  className,
  labelledBy = 'modal-title',
}: ModalProps) {
  const reduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  // Body scroll lock + ESC handler + focus management.
  useEffect(() => {
    if (!open) return
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Focus the first focusable element inside the panel.
    const t = window.setTimeout(() => {
      const node = containerRef.current
      if (!node) return
      const focusables = node.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (focusables.length > 0) {
        focusables[0].focus()
      } else {
        node.focus()
      }
    }, 50)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key === 'Tab' && containerRef.current) {
        const focusables = Array.from(
          containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
        ).filter((el) => !el.hasAttribute('disabled'))
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        const active = document.activeElement as HTMLElement | null
        if (e.shiftKey && active === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)

    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = original
      document.removeEventListener('keydown', onKey)
      previouslyFocusedRef.current?.focus?.()
    }
  }, [open, onClose])

  const panelInitial =
    variant === 'side'
      ? { x: reduced ? 0 : '100%', opacity: reduced ? 0 : 1 }
      : { y: 16, opacity: 0, scale: reduced ? 1 : 0.98 }
  const panelAnimate =
    variant === 'side'
      ? { x: 0, opacity: 1 }
      : { y: 0, opacity: 1, scale: 1 }
  const panelExit =
    variant === 'side'
      ? { x: reduced ? 0 : '100%', opacity: reduced ? 0 : 1 }
      : { y: 8, opacity: 0, scale: reduced ? 1 : 0.98 }

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          className={cn(
            'fixed inset-0 z-[100] flex',
            variant === 'side' ? 'justify-end' : 'items-center justify-center p-4',
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
        >
          <motion.button
            type="button"
            aria-label="Đóng cửa sổ chi tiết"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 cursor-pointer bg-neutral-900/40 backdrop-blur-sm"
          />

          <motion.div
            ref={containerRef}
            tabIndex={-1}
            initial={panelInitial}
            animate={panelAnimate}
            exit={panelExit}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'relative flex flex-col overflow-hidden bg-white shadow-2xl outline-none',
              variant === 'side'
                ? 'h-full w-full md:max-w-2xl lg:max-w-3xl'
                : 'max-h-[90vh] w-full max-w-3xl rounded-2xl',
              className,
            )}
          >
            <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-neutral-200 bg-white/95 px-6 py-4 backdrop-blur md:px-8 md:py-5">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                {titleAdornment}
                <h2
                  id={labelledBy}
                  className="font-display truncate text-lg font-bold tracking-tight text-neutral-900 md:text-xl"
                >
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng"
                className="-mr-1 inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </header>

            <div className="flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
