import { useEffect, useRef, useState } from 'react'
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion'

interface AnimatedNumberProps {
  value: number
  decimals?: number
  duration?: number
  format?: (n: number) => string
  className?: string
}

export function AnimatedNumber({
  value,
  decimals = 0,
  duration = 1.6,
  format,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const motionValue = useMotionValue(0)
  const reduced = useReducedMotion()
  const [animated, setAnimated] = useState('0')

  useEffect(() => {
    if (reduced || !inView) return
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setAnimated(formatNumber(latest, decimals, format))
      },
    })
    return () => controls.stop()
  }, [inView, reduced, value, decimals, duration, format, motionValue])

  const display = reduced ? formatNumber(value, decimals, format) : animated

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}

function formatNumber(
  n: number,
  decimals: number,
  format?: (n: number) => string,
) {
  if (format) return format(n)
  return n.toLocaleString('vi-VN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}
