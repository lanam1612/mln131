import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant
  size?: Size
  asChild?: never
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-red text-white hover:bg-brand-red/90 focus-visible:outline-brand-red shadow-sm',
  secondary:
    'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
  ghost: 'text-neutral-700 hover:text-brand-red hover:bg-brand-red/5',
}

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface LinkButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium no-underline transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
