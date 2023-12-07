import { Shell } from "@/components/shell/shell";
import { Button } from "@/components/ui/button/button";
import { Typography } from "@/components/ui/typography/typography";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

const sectionVariants = cva("container grid gap-6 px-4 py-6 mx-auto md:py-20", {
  variants: {
    variant: {
      vertical: "",
      horizontal: "md:grid-cols-2"
    }
  },
  defaultVariants: {
    variant: "vertical",
  }
})

interface SectionProps
  extends HTMLAttributes<typeof HTMLElement>,
  VariantProps<typeof sectionVariants> {
  children: ReactNode,
}

const Section = ({ className, variant, children }: SectionProps) => (
  <section className={cn(sectionVariants({ variant, className }))}>
    {children}
  </section>
)
Section.displayName = "Section"


const sectionHeaderVariants = cva(
  "flex gap-4", {
  variants: {
    variant: {
      horizontal: "justify-between",
      vertical: "flex-col",
      centered: "flex-col items-center text-center"
    },
    order: {
      first: "order-first",
      last: "order-last",
    }
  },
  defaultVariants: {
    variant: "horizontal",
    order: "first",
  }
}
)

interface SectionHeaderProps
  extends HTMLAttributes<HTMLElement>,
  VariantProps<typeof sectionHeaderVariants> { }

const SectionHeader = ({ className, variant, order, children }: SectionHeaderProps) => (
  <div className={cn(
    sectionHeaderVariants({ variant, order, className })
  )}>
    {children}
  </div>
)
SectionHeader.displayName = "SectionHeader"


const sectionBodyVariants = cva(
  "flex gap-8", {
  variants: {
    variant: {
      vertical: "flex-col items-baseline",
      horizontal: ""
    }
  },
  defaultVariants: {
    variant: "horizontal",
  }
}
)

interface SectionBodyProps
  extends HTMLAttributes<HTMLElement>,
  VariantProps<typeof sectionBodyVariants> { }

const SectionBody = ({ className, variant, children }: SectionBodyProps) => (
  <div className={cn(
    sectionBodyVariants({ variant, className })
  )}>
    {children}
  </div>
)
SectionBody.displayName = "SectionBody"


interface SectionHeadingProps
  extends HTMLAttributes<HTMLElement> {

}

const SectionHeading = ({ className, children }: SectionHeadingProps) => (
  <Typography
    tag="h2"
    type="heading-two"
    className={cn(
      "max-w-xl w-1/2 border-b h-fit text-on-surface-primary border-outline-tertiary",
      className
    )}
  >
    {children}
  </Typography>
)
SectionHeading.displayName = "SectionHeading"

interface SectionDescriptionProps
  extends HTMLAttributes<HTMLElement> {

}

const SectionDescription = ({ className, children, ...props }: SectionDescriptionProps) => (
  <Typography
    type="body-primary"
    className={cn(
      "max-w-3xl text-on-surface-secondary",
      className
    )}
    {...props}
  >
    {children}
  </Typography>
)
SectionDescription.displayName = "SectionDescription"

interface SectionLinkProps
  extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const SectionLink = ({ className, href, children }: SectionLinkProps) => (
  <Button href={href} variant="link" className={cn(
    "flex p-0 text-left w-fit",
    className)
  }>
    <Typography>
      {children}
    </Typography>
  </Button>
)
SectionLink.displayName = "SectionLink"

export {
  Section,
  SectionHeader,
  SectionBody,
  SectionHeading,
  SectionDescription,
  SectionLink
}