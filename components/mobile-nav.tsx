import { DesktopNavItem, SidebarNavItem } from "@/types"
import { useSelectedLayoutSegment } from 'next/navigation'
import { useMemo, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion/accordion"
import { Button } from "./ui/button/button"
import { Icons } from "./icons"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { ScrollArea } from "./ui/scroll-area/scroll-area"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet/sheet"

export interface MobileNavProps {
  mainItems?: DesktopNavItem[]
}

export const MobileNav = ({ mainItems }: MobileNavProps) => {
  const segment = useSelectedLayoutSegment()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const navItems = useMemo(() => {
    const items = mainItems ?? []
    return items
  }, [mainItems])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button>
          <Icons.menu className="w-6 h-6 text-white" />
          o
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Icons.logo className="w-4 h-4 mr-2" aria-hidden="true" />
            <span className="font-bold">{siteConfig.name}</span>
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="pl-1 pr-7">
            <Accordion
              type="multiple"
              defaultValue={navItems.map((item) => item.title)}
            >
              {navItems?.map((item, index) => (
                <AccordionItem value={item.title} key={index}>
                  <AccordionTrigger className="text-sm capitalize">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div>
                      {item.items?.map((subItem, index) => (
                        subItem.href ? (
                          <MobileLink
                            key={index}
                            href={String(subItem.href)}
                            segment={String(segment)}
                            setIsOpen={setIsOpen}
                            disabled={subItem.disabled}
                          >
                            {subItem.title}
                          </MobileLink>
                        ) : (
                          <div
                            key={index}
                            className="transition-colors text-on-surface-secondary"
                          >
                            {item.title}
                          </div>
                        )
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )

}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  disabled?: boolean
  segment: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}