import { VariantProps, cva } from "class-variance-authority"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          'bg-interactive-primary text-on-interactive-primary hover:bg-interactive-primary-hover',
        secondary:
          'bg-interactive-secondary text-on-interactive-secondary hover:bg-interactive-secondary-hover',
        tertiary: "bg-interactive-tertiary text-on-interactive-secondary hover:bg-interactive-tertiary-hover",
        // positive: "bg-interactive-positive hover:bg-interactive-positive-hover",
        // warning: "bg-interactive-warning hover:bg-interactive-warning-hover",
        negative:
          'bg-interactive-secondary text-on-surface-negative hover:bg-interactive-negative hover:text-[color:var(--light)]',
        accent:
          'bg-interactive-accent text-on-interactive-accent hover:bg-interactive-accent-hover',
        outline:
          'border duration-300 hover:bg-interactive-contrast text-on-interactive-contrast hover:text-on-interactive-contrast-hover',
        ghost:
          'bg-transparent',
        link: 'relative z-10 before:absolute before:-z-10 before:bottom-0 before:h-[2px] before:w-full before:bg-interactive-accent before:hover:h-[8px]',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'px-3 py-2',
        lg: 'px-6 py-3',
        icon: 'h-9 w-9',
        link: 'py-0'
      },
      rounded: {
        default: 'rouned-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default'
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, rounded, ...props }, ref) => {
    if (href) {
      return (
        // 15 25
        // 10 20
        // 5 15
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, rounded, className }))}>
          {children}
        </Link>
      )
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        {...props}
      >
        {children}
      </button>
    )
  })

Button.displayName = 'Button'

export { Button }
