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
        'relative w-full h-1.5 grow overflow-hidden rounded-full bg-slate-900',
        thickness === "thin" && "h-0.5"
      )}
    >
      <SliderPrimitive.Range className="absolute h-full bg-slate-700" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        'block w-4 h-4 rouned-full border border-slate-500 bg-slate-950 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500 disabled:pointer-events-none disabled:opacity-50',
        thickness === "thin" && "h-3.5 w-3.5",
      )}
    />
    {variant === "range" && (
      <SliderPrimitive.Thumb
        className={cn(
          "block w-5 h-5  rounded-full border-2 border-slate-500 bg-slate-950 ring-red-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          thickness === "thin" && "h-3.5 w-3.5"
        )}
      />
    )}
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
