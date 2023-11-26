import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Typography } from '../typography/typography'

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'relative z-[1] flex max-w-max flex-1 items-center justify-center',
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuIndicator />
    {/* <NavigationMenuViewport /> */}
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  'inline-flex items-center justify-center rounded-full transition-colors border border-outline-secondary bg-surface-primary hover:bg-surface-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-outline-focus focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none h-10 py-2 px-4 group'
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      navigationMenuTriggerStyle(),
      className
    )}
    // onPointerMove={(event) => event.preventDefault()}
    // onPointerLeave={(event) => event.preventDefault()}
    {...props}
  >
    {children}{' '}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-outline-secondary bg-surface-primary text-on-surface-primary shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden',
      className
    )}
    {...props}
  >
    <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-red-800" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export interface ListItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string,
}

const NavigationListItem = React.forwardRef<
  HTMLAnchorElement,
  ListItemProps
>(({ className, children, title, href, ...props }, forwardedRef) => (
  <li>
    <NavigationMenuPrimitive.Link asChild>
      <Link
        ref={forwardedRef}
        href={href}
        className={cn(
          'hover:bg-interactive-secondary block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-outline-focus focus-visible:ring-offset-background',
          className
        )}
        {...props}
      >
        <Typography tag="span" type="interface-primary" className='font-bold text-on-surface-accent'>{title}</Typography>
        <Typography type="interface-caption" className="text-on-surface-secondary">{children}</Typography>
      </Link>
    </NavigationMenuPrimitive.Link>
  </li>
));


export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationListItem
}
