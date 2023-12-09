import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Typography } from "../typography/typography";

export interface LogoProps {
  href?: string;
}
export const Logo = ({ href }: LogoProps) => (
  (href) ? (
    <Link className="flex w-fit items-center space-x-2" href={href}>
      <Icons.logo className="h-6 w-6" />
      <Typography tag="span" type="interface-heading-one">{siteConfig.name}</Typography>
      <span className="sr-only">Home</span>
    </Link>
  ) : (
    <div className="flex w-fit items-center space-x-2">
      <Icons.logo className="h-6 w-6" />
      <Typography tag="span" type="interface-heading-one">{siteConfig.name}</Typography>
    </div>
  )
)
