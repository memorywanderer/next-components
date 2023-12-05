import { Shell } from "@/components/shell/shell";
import { Button } from "@/components/ui/button/button";
import { Typography } from "@/components/ui/typography/typography";
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps {
  children: ReactNode,
}

const Section = ({ children }: SectionProps) => (
  <Shell className="md:py-36">
    {children}
  </Shell>
)

interface SectionTitleProps
  extends HTMLAttributes<HTMLElement> {

}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <Typography
    type="heading-two"
    className="mb-4 border-b text-on-surface-primary border-outline-tertiary max-w-xl"
  >
    {children}
  </Typography>
)

interface SectionSubtitleProps
  extends HTMLAttributes<HTMLElement> {

}

const SectionSubtitle = ({ className, children, ...props }: SectionSubtitleProps) => (
  <Typography
    type="body-primary"
    className="text-on-surface-secondary max-w-3xl"
    {...props}
  >
    {children}
  </Typography>
)

interface SectionLink
  extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const SectionLink = ({ className, href, children }: SectionLink) => (
  <Button href={href} variant="link" className={cn(
    "p-0 text-left w-fit",
    className)
  }>
    {children}
  </Button>
)

export {
  Section,
  SectionTitle,
  SectionSubtitle,
  SectionLink
}