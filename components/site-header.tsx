import { siteConfig } from "@/config/site"
import { DesktopNav } from "./desktop-nav"
import { Button } from "./ui/button/button"
import { MobileNav } from "./mobile-nav"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-center w-full border-b border-outline-tertiary bg-background">
      <div className="container flex items-center h-20">
        <DesktopNav items={siteConfig.desktopNav} />
        <MobileNav mainItems={siteConfig.desktopNav} />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <Button>Look up</Button>
        </div>
      </div>
    </header>
  )
}