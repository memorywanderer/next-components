import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'peer flex min-h-[50px] w-full rounded-md bg-surface-secondary py-2 px-4 font-charter font-normal text-on-surface-secondary text-[length:var(--body-primary-desktop)] placeholder:text-on-surface-tertiary placeholder:font-normal placeholder:text-[length:var(--body-large)] focus:outline-none focus:ring-2 focus:ring-outline-focus   disabled:cursor-not-allowed disabled:opactiy-50 ',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }