import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root


const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>

    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'text-gray-50 shadow-gray-600 hover:bg-slate-500 group flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-gray-900 px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className='w-4 h-4'
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName


const AccordionItem = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'focus-within:shadow-blue-900 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Item>
))

AccordionItem.displayName = AccordionPrimitive.Item.displayName


const AccordionContent = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'text-white bg-gray-900 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
    {...props}
  >
    <div className="py-[15px] px-5">{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
}