import { VariantProps, cva } from "class-variance-authority"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          'bg-fill-primary text-on-surface-dark hover:bg-fill-hover',
        secondary:
          'bg-fill-secondary text-on-surface-secondary hover:bg-fill-secondary-hover',
        tertiary: "bg-fill-tertiary text-on-surface-secondary hover:bg-fill-tertiary-hover",
        positive: "bg-fill-positive hover:bg-fill-positive-hover",
        warning: "bg-fill-warning hover:bg-fill-warning-hover",
        negative:
          'bg-fill-secondary text-on-surface-negative hover:bg-fill-negative hover:text-background',
        accent:
          'bg-fill-interactive text-on-surface-dark hover:bg-fill-interactive-hover',
        outline:
          'bg-transparent border duration-300 hover:bg-fill-primary hover:border-outline-hover hover:text-on-surface-dark',
        ghost:
          'bg-transparent',
        link: 'relative z-10 before:absolute before:-z-10 before:bottom-0 before:h-[2px] before:w-full before:bg-fill-interactive before:hover:h-[8px]',
      },
      size: {
        default: 'h-9 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-9 w-9',
        link: 'py-0'
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}>
          {children}
        </Link>
      )
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    )
  })

Button.displayName = 'Button'

export { Button }
