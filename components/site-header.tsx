import { siteConfig } from "@/config/site"
import { DesktopNav } from "./desktop-nav"
import { Button } from "./ui/button/button"
import { MobileNav } from "./mobile-nav"
import { ModeToggle } from "./mode-toggle"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-center w-full bg-background border-b border-outline-tertiary">
      <div className="container flex items-center h-[var(--header-height)] px-4 mx-auto">
        <DesktopNav items={siteConfig.desktopNav} />
        <MobileNav mainItems={siteConfig.desktopNav} />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <Button>Look up</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}