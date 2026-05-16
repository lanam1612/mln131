import { useId, useRef, type KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface TabItem {
  id: string
  label: string
  shortLabel?: string
}

interface TabsProps {
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
  className?: string
  ariaLabel?: string
  idPrefix?: string
}

export function Tabs({
  items,
  activeId,
  onChange,
  className,
  ariaLabel,
  idPrefix = 'tab',
}: TabsProps) {
  const uid = useId()
  const indicatorId = `${idPrefix}-indicator-${uid}`
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

  const focusAndActivate = (index: number) => {
    const target = buttonsRef.current[index]
    if (target) target.focus()
    onChange(items[index].id)
  }

  const handleKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      focusAndActivate(index === last ? 0 : index + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      focusAndActivate(index === 0 ? last : index - 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      focusAndActivate(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      focusAndActivate(last)
    }
  }

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation="horizontal"
      className={cn(
        'scrollbar-none relative flex w-full overflow-x-auto border-b border-neutral-200',
        className,
      )}
    >
      {items.map((tab, idx) => {
        const isActive = tab.id === activeId
        return (
          <button
            key={tab.id}
            ref={(el) => {
              buttonsRef.current[idx] = el
            }}
            role="tab"
            id={`${idPrefix}-${tab.id}`}
            aria-controls={`${idPrefix}-panel-${tab.id}`}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKey(e, idx)}
            className={cn(
              'relative shrink-0 cursor-pointer rounded-t-md px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ease-out',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2',
              'md:px-6 md:py-4 md:text-base',
              isActive
                ? 'text-brand-red'
                : 'text-neutral-500 hover:text-neutral-900',
            )}
          >
            {tab.shortLabel ?? tab.label}
            {isActive && (
              <motion.span
                layoutId={indicatorId}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand-red md:inset-x-4"
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
