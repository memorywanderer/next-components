import * as TabsPrimitive from '@radix-ui/react-tabs'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'shrink-0 flex border-b border-gray-500 ',
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.List>
))

TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'bg-slate-700 px-2 md:px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-white select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue-400 data-[state=active]:text-blue-400 data-[state=active]:font-bold data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-white outline-none cursor-default',
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
      'grow p-5 bg-black rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black',
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
