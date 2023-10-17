import * as React from 'react'
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Link from "next/link";

const cardVariants = cva(
  '',
  {
    variants: {
      variant: {
        default:
          'border shadow bg-card text-card-foreground',
      },
      size: {
        default: 'w-fit h-fit',
      },
      border: {
        default: 'rounded-sm',
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

const Card = React.forwardRef<HTMLDivElement, CardProps>(
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

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6', className)}
      {...props}
    />
  ))
CardContent.displayName = 'CardContent'


const CardHeader = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={cn('m-0 p-0 flex flex-col', className)}
      {...props}
    />
  ))

CardHeader.displayName = 'CardHeader'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn('flex items-center', className)}
      {...props}
    />
  ))
CardFooter.displayName = 'CardFooter'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" | "h3" }
>(({ className, as: Comp = "h3", ...props }, ref) => (
  <Comp
    ref={ref}
    className={cn(
      'font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-sm text-muted-foreground',
      className
    )}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'



export {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
}