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
          'overflow-hidden bg-slate-900 text-white dark:bg-gray-900 dark:text-gray-50',
        destructive:
          'bg-red-500 text-white  dark:hover:bg-red-600',
      },
      size: {
        default: 'w-fit h-fit',
        sm: ' rounded-md',
        lg: ' rounded-md',
      },
      border: {
        default: '',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
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
  ({ className, children, variant, border, size, href, ...props }, ref) => {
    if (href) {
      <Link
        href={href}
        className={cn(cardVariants({ variant, size, border, className }))}
      >
        {children}
      </Link>
    }
    return (
      <article
        ref={ref}
        className={cn(cardVariants({ variant, size, border, className }))}
        {...props}
      >
        <div className="bg-slate-600 "></div>
        {children}
      </article>
    )
  })

Card.displayName = 'Card'

export { Card }