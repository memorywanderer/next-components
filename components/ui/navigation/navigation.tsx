import { useNavgationMenuContext } from "@/contexts/navigation-menu-context";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { HTMLAttributes, forwardRef, useEffect } from "react";
import { Typography } from "../typography/typography";
import { ChevronDown } from "lucide-react";

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
    className={cn('flex items-center gap-2', className)}
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
    className={cn('relative', className)}
    {...props}
  />
))
NavigationMenuItem.displayName = 'NavigationMenuItem'


const navigationMenuTriggerStyle = cva(
  'inline-flex items-center justify-center rounded-full transition-colors border border-outline-secondary bg-surface-primary hover:bg-surface-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-outline-focus focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none h-10 py-4 px-4 group'
)

const NavigationMenuTrigger = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & {
    index: number
  }
>(({ className, children, index, ...props }, ref) => {
  const { openIndex, toggleMenuAtIndex } = useNavgationMenuContext()
  const isOpen = openIndex === index
  const handleClick = () => {
    toggleMenuAtIndex(index)
  }

  return (

    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        navigationMenuTriggerStyle(),
        "flex items-center ",
        className
      )}
      {...props}
    >
      <Typography>{children}</Typography> {" "}
      <ChevronDown className={cn(
        "relative top-[1px] ml-1 h-3 w-3 transition duration-300",
        isOpen && "-rotate-180"
      )} />
    </button>


  )
})
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'

const NavigationMenuContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    index: number
  }
>(({ className, index, ...props }, ref) => {
  const { openIndex } = useNavgationMenuContext()
  const isOpen = openIndex === index

  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-[100%] bg-surface-primary border border-outline-secondary rounded-md left-0 h-0 opacity-0 invisible transition-opacity duration-200",
        isOpen && 'h-auto opacity-100 visible',
        className)}
      {...props}
    />
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

export interface ListItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string | undefined,
}

const NavigationListItem = forwardRef<
  HTMLAnchorElement,
  ListItemProps
>(({ className, children, title, href, ...props }, forwardedRef) => (
  <li>
    <Link
      ref={forwardedRef}
      href={href ? href : "/"}
      className={cn(
        'hover:bg-interactive-secondary block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-outline-focus focus-visible:ring-offset-surface-primary',
        className
      )}
      {...props}
    >
      <Typography tag="span" type="interface-primary" className='font-bold text-on-surface-accent'>{title}</Typography>
      <Typography type="interface-caption" className="text-on-surface-secondary">{children}</Typography>
    </Link>
  </li>
));
NavigationListItem.displayName = "NavigationListItem"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationListItem,
  navigationMenuTriggerStyle
}