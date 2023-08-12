import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";


export interface CardHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <header
        className={cn('m-0 p-0', className)}
        ref={ref}
        {...props}
      >
        {children}
      </header>
    )
  })

CardHeader.displayName = 'CardHeader'

export { CardHeader }