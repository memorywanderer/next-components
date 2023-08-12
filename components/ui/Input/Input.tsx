import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"


const inputVariants = cva(
  'w-full h-6 px-4 py-6',
  {
    variants: {
      variant: {
        default:
          'bg-gray-100 text-gray-800 placeholder:text-gray-300 dark:bg-gray-800 dark:text-gray-100',
        disabled:
          'cursor-not-allowed bg-gray-400 text-gray-200 placeholder:text-gray-300 dark: bg-gray-600 dark:text-gray-300',
      },
      size: {
        default: 'h-10 py-2 px-4',
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