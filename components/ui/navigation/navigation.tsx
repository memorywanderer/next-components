import { useNavgationMenuContext } from "@/contexts/navigation-menu-context";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { HTMLAttributes, forwardRef } from "react";

const NavigationMenu = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('', className)}
    {...props}
  />
))
NavigationMenu.displayName = 'NavigationMenu'

const NavigationMenuList = forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('', className)}
    {...props}
  />
))
NavigationMenuList.displayName = 'NavigationMenuList'

const NavigationMenuItem = forwardRef<
  HTMLLIElement,
  HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('', className)}
    {...props}
  />
))
NavigationMenuItem.displayName = 'NavigationMenuItem'


const navigationMenuTriggerStyle = cva(
  'inline-flex items-center justify-center rounded-full transition-colors border border-outline-secondary bg-surface-primary hover:bg-surface-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-outline-focus focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none h-10 py-2 px-4 group'
)

const NavigationMenuTrigger = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { toggleMenu } = useNavgationMenuContext()
  return (
    <button
      ref={ref}
      onClick={toggleMenu}
      className={cn(
        navigationMenuTriggerStyle(),
        className
      )}
      {...props}
    />
  )
})
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'

const NavigationMenuContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useNavgationMenuContext()
  return (
    isOpen && (
      <div
        ref={ref}
        className={cn('', className)}
        {...props}
      />

    )
  )

})
NavigationMenuContent.displayName = 'NavigationMenuContent'

interface NavigationMenuLinkProps
  extends HTMLAttributes<HTMLAnchorElement> {
  href: string
}

const NavigationMenuLink = forwardRef<
  HTMLAnchorElement,
  NavigationMenuLinkProps
>(({ className, href, ...props }, ref) => (
  <Link
    ref={ref}
    href={href}
    {...props}
  />
))
NavigationMenuLink.displayName = 'NavigationMenuLink'


export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle
}