import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

const inputVariants = cva(
  'w-full text-xl font-medium',
  {
    variants: {
      variant: {
        default:
          'bg-surface-tertiary placeholder:text-md placeholder:font-medium placeholder:text-on-surface-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-surface-disabled disabled:text-on-surface-disabled',
      },
      size: {
        default: 'min-h-[50px] py-2 px-4',
        sm: 'h-9 px-2',
        lg: 'h-11 px-8',
      },
      radius: {
        full: 'rounded-full',
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
        none: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'none',
    },
  }
)


export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  name?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className,
    onChange,
    id,
    label,
    errorMessage,
    defaultValue,
    variant,
    size,
    radius,
    disabled,
    required,
    ...props },
    ref) => {

    return (
      <input
        ref={ref}
        disabled={disabled}
        required={required}
        className={cn(inputVariants({ variant, size, radius, className }))}
        {...props}
      />
    )
  })
export { Input }