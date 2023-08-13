import { forwardRef } from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Link from "next/link";

const cardVariants = cva(
  '',
  {
    variants: {
      variant: {
        default:
          'flex flex-col overflow-hidden bg-slate-900 text-white dark:bg-gray-900 dark:text-gray-50',
        destructive:
          'bg-red-500 text-white dark:hover:bg-red-600',
      },
      size: {
        default: 'w-fit h-fit',
        sm: 'rounded-md',
        lg: 'rounded-md',
      },
      border: {
        default: '',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
      hover: {
        default: '',
        shadow: 'transition-shadow hover:shadow-md hover:shadow-cyan-500/50',
        size: 'transition-transform hover:scale-[1.01]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },

)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> {
  href?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant, border, size, hover, href, ...props }, ref) => {
    if (href) {

      return (
        <Link
          href={href}
          className={cn(cardVariants({ variant, size, border, hover, className }))}
        >
          {children}
        </Link >
      )
    }
    return (
      <article
        ref={ref}
        className={cn(cardVariants({ variant, size, border, hover, className }))}
        {...props}
      >
        {children}
      </article>
    )
  })

Card.displayName = 'Card'

export { Card }