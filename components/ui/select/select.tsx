import { forwardRef } from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'relative flex justify-between items-center rounded-md w-full bg-slate-800 box-border px-4 py-3 outline-none',
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
  </SelectPrimitive.Trigger>
))

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>

    <SelectPrimitive.Content
      position={position}
      ref={ref}
      className={cn(
        "relative box-border z-50 min-w-[8rem] data-[state=open]:animate-in data-[state=closed]:animate-out bg-slate-700 rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        position === "popper" &&
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className={cn(
        "p-1",
        position === "popper" &&
        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      )}>
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>

  </SelectPrimitive.Portal>
))

SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'px-[25px] text-xs leading-[25px]',
      className
    )}
    {...props}
  >
    {children}
  </SelectPrimitive.Label>
))

SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'cursor-pointer text-[13px] py-4 leading-none rounded-[3px] flex w-full items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-slate-500 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-blue-800 data-[highlighted]:text-white',
      className
    )}
    {...props}
  >
    <span className='absolute right-2 flex h-3.5 w-3.5 items-center justify-center'>
      <SelectPrimitive.ItemIndicator >
        <Check className="w-4 h-4 mr-2" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700', className)}
    {...props}
  />
))

SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}