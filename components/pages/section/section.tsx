import { Typography } from "@/components/ui/typography/typography";

interface SectionProps {
  title: string;
  subtitle: string;
  link?: string;
}

export const Section = ({ title, subtitle, link }: SectionProps) => (
  <section>
    <Typography type="heading-two-desktop" className="text-on-surface-primary">
      {title}
    </Typography>
    <Typography type="subtitle">
      {subtitle}
    </Typography>
  </section>
)