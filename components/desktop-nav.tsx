"use client"

import { DesktopNavItem } from "@/types"
import { NavigationListItem, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation/navigation"
import { Icons } from "./icons"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Typography } from "./ui/typography/typography"

export interface DesktopNavProps {
  items?: DesktopNavItem[]
}

export const DesktopNav = ({ items }: DesktopNavProps) => {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link href="/" className="items-center hidden space-x-2 lg:flex">
        <Icons.logo className="w-6 h-6" aria-hidden="true" />
        <Typography type="interface-heading-one-desktop" tag="span"> {siteConfig.name}</Typography>
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {items ? (items?.map((item, index) => (
            (item.items)
              ? (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger index={index}>
                    {item?.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    index={index}
                    id={`menu-content-${index}`}
                  >
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {item?.items?.map((item) => (
                        <NavigationListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </NavigationListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink href={item.href ? item.href : "#"} className={cn(navigationMenuTriggerStyle())}>
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )


          ))) : (
            null
          )}

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}