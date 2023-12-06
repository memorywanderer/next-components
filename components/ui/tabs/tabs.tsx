import * as TabsPrimitive from '@radix-ui/react-tabs'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => (
  <div className="overflow-x-auto no-scrollbar">
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'shrink-0 flex border-b border-outline-secondary',
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  </div>
))

TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'bg-background-secondary px-2 py-2 md:px-5 flex-1 flex items-center justify-center select-none first:rounded-tl-md last:rounded-tr-md hover:text-on-surface-accent data-[state=active]:border-b-2 data-[state=active]:border-outline-focus data-[state=active]:font-bold data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current outline-none focus-visible:ring-2 focus-visible:ring-outline-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer',
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.Trigger>
))

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'grow p-5 borde text-on-surface-secondary rounded-b-md outline-none focus-visible:ring-2 focus-visible:ring-outline-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.Content>
))

TabsContent.displayName = TabsPrimitive.Content.displayName

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
}
