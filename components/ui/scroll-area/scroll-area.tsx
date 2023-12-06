import React, { forwardRef } from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn } from '@/lib/utils'

const ScrollArea = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className='w-full h-full rounded-[inherit]'>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaScrollbar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollAreaScrollbar = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, children, orientation = 'horizontal', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
      'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' &&
      'h-2.5 border-t border-t-transparent p-[1px]',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className='relative flex-1 rounded-full bg-slate-300 dark:bg-slate-800' />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))

ScrollAreaScrollbar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export {
  ScrollArea,
  ScrollAreaScrollbar,
}