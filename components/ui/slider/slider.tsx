import { cn } from '@/lib/utils'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { forwardRef } from 'react'

const Slider = forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    variant?: "default" | "range",
    thickness?: "default" | "thin",
  }
>(({ className, thickness = "default", variant = "default", ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative w-full flex items-center  touch-none select-none',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(
        'relative w-full h-1.5 grow overflow-hidden rounded-full bg-surface-tertiary',
        thickness === "thin" && "h-0.5"
      )}
    >
      <SliderPrimitive.Range className="absolute h-full bg-fill-interactive" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        'block w-4 h-4 rounded-full bg-fill-interactive shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-focus focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
        thickness === "thin" && "h-3.5 w-3.5",
      )}
    />
    {variant === "range" && (
      <SliderPrimitive.Thumb
        className={cn(
          'block w-4 h-4 rounded-full bg-fill-interactive shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-focus focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
          thickness === "thin" && "h-3.5 w-3.5"
        )}
      />
    )}
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
