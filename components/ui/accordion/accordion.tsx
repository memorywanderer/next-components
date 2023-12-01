import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex transition-transform'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex min-h-[50px] flex-1 cursor-pointer items-center justify-between px-5 text-on-surface-primary text-[length:var(--body-large)] leading-none outline-none [&[data-state=open]>svg]:rotate-180',
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
      'focus-within:shadow-outline-focus mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
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
      'data-[state=open]:animate-accordion-up overflow-hidden text-on-surface-primary text-[length:var(--body-large)] leading-[var(--body-large-leading)]',
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
}