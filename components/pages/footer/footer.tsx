import { Logo } from "@/components/ui/logo/logo";
import { Typography } from "@/components/ui/typography/typography";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "lucide-react";
import Link from "next/link";



const Footer = () => (
  <footer className="w-full px-4 bg-background py-7 border-t  ">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div id="footer-branding" aria-labelledby="footer-branding-heading">
          <Logo />
        </div>
        <div className="flex-1 grid grid-rows-1 xxs:grid-cols-2 sm:grid-cols-4">
          {siteConfig.footerNav.map((item) => (
            <div key={item.title} className="space-y-4">
              <Typography tag="h4" type="heading-four">
                {item.title}
              </Typography>
              <ul className="space-y-2">
                {item.items.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noreferrer" : undefined}
                      className="flex items-center gap-1 text-on-surface-secondary hover:text-on-surface-primary"
                    >
                      <Typography type="interface-primary">
                        {link.title}
                      </Typography>
                      {link.external && <ExternalLink className="font-normal w-4 h-4" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        id="footer-bottom"
        aria-aria-labelledby="footer-bottom-heading"
        className="flex items-center justify-center space-x-4"
      >
        <small>
          <Typography type="body-small" className="text-on-surface-tertiary">
            &#169; 2023 {siteConfig.name}
          </Typography>
        </small>
      </div>
    </div>
  </footer>
)


export {
  Footer
}