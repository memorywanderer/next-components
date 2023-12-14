import * as React from 'react'
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Link from "next/link";

const cardVariants = cva(
  'flex-1 flex flex-col',
  {
    variants: {
      variant: {
        default:
          'border border-outline-tertiary bg-background text-on-surface-primary',
      },
      size: {
        default: 'w-fit',
      },
      rounded: {
        default: 'rounded-lg',
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
  ({ className, children, variant, rounded, size, hover, href, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(cardVariants({ variant, size, rounded, hover, className }))}
        >
          {children}
        </Link>
      )
    }
    return (
      <article
        ref={ref}
        className={cn(cardVariants({ variant, size, rounded, hover, className }))}
        {...props}
      >
        {children}
      </article>
    )
  })

Card.displayName = 'Card'

export interface CardAsLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof cardVariants> {
  href: string;
}

const CardAsLink = React.forwardRef<HTMLAnchorElement, CardAsLinkProps>(
  ({ className, children, variant, rounded, size, hover, href, ...props }, ref) => (
    <Link
      href={href}
      className={cn(cardVariants({ variant, size, rounded, hover, className }))}
    >
      {children}
    </Link>
  ))

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex-1 ', className)}
      {...props}
    />
  ))
CardBody.displayName = 'CardBody'


const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, ...props }, ref) => (
    <div
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
    <div
      ref={ref}
      className={cn('flex items-center px-2 pb-2', className)}
      {...props}
    />
  ))
CardFooter.displayName = 'CardFooter'


export {
  Card,
  CardAsLink,
  CardBody,
  CardHeader,
  CardFooter
}