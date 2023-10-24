import { cn } from '@/lib/utils'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { forwardRef } from 'react'


const Separator = forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    className={cn(
      'bg-outline-slight',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )}
    orientation={orientation}
    decorative={decorative}
    {...props}
  />
))

Separator.displayName = SeparatorPrimitive.Root.displayName

export {
  Separator
}