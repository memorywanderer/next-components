import { forwardRef } from "react"
import { DynamicTypography, DynamicTypographyProps } from "./dynamic-typography"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva(
  '',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        xxl: 'text-2xl'
      },
      weight: {
        thin: 'font-thin',
        extralight: 'font-extralight',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold'
      },
    },
    defaultVariants: {
      size: 'base',
      weight: 'normal',
    },
  }
)


export interface TypographyProps
  extends React.HtmlHTMLAttributes<HTMLElement>,
  VariantProps<typeof typographyVariants> {
  tag?: DynamicTypographyProps['tag']
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, children, tag = 'p', size, weight, ...props }, ref) => {
    return (
      <DynamicTypography
        className={cn(typographyVariants({ size, weight, className }))}
        tag={tag}
        {...props}
      >
        {children}
      </DynamicTypography>
    )
  })

Typography.displayName = 'Typography'

export { Typography }