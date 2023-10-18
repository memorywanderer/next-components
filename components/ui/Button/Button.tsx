import { VariantProps, cva } from "class-variance-authority"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-darker dark:hover:bg-secondary/80',
        destructive:
          'bg-secondary text-destructive hover:bg-destructive hover:text-background',
        outline:
          'bg-transparent border border-input shadow-sm duration-300 hover:bg-primary  hover:border-primary hover:text-primary-foreground',
        ghost:
          'bg-transparent',
        link: 'p-0 relative before:absolute before:origin-top-left before:-bottom-1 before:h-[2px] before:w-full before:bg-accent before:transition-transform before:scale-0 hover:before:scale-100 underline-offset-[7px] ',
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
