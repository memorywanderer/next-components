import { Shell } from "@/components/shell/shell";
import { Button } from "@/components/ui/button/button";
import { Typography } from "@/components/ui/typography/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  link?: string;
  children: ReactNode,
}

export const Section = ({ title, subtitle, link, children }: SectionProps) => (
  <Shell variant="default" className="md:py-36">
    <div className="mb-12 bg-background p-4 rounded-2xl max-w-2xl">
      <Typography type="heading-two" className="mb-4 border-b text-on-surface-primary border-outline-tertiary">
        {title}
      </Typography>
      <Typography type="body-primary" className={cn("max-w-xl text-on-surface-secondary", link && "mb-4")}>
        {subtitle}
      </Typography>
      {link &&
        <Button href="#" variant="link" className="p-0 text-left w-fit">
          {link}
        </Button>
      }
    </div>
    {children}
  </Shell>
)