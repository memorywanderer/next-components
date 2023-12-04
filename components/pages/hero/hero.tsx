import { Grid } from "@/components/layouts/grid/grid";
import { Shell } from "@/components/shell/shell";
import { AspectRatio } from "@/components/ui/aspect-ratio/aspect-ratio";
import { Button } from "@/components/ui/button/button";
import { Typography } from "@/components/ui/typography/typography";
import Image from "next/image";


export interface HeroProps {
  title: string;
  buttonTitle: string;
  description?: string;
}

export const Hero = ({ title, description, buttonTitle }: HeroProps) => (
  <Shell className="md:py-14">
    <Grid columns={2}>
      <div className="flex flex-col justify-center max-w-xl md:px-5">
        <Typography tag="h1" type="title" className="mb-2 text-on-surface-primary">
          {title}
        </Typography>
        {description && <Typography type="subtile-desktop" className="mb-6 text-on-surface-secondary">
          {description}
        </Typography>}
        <Button variant="accent" size="lg" className="mb-4 max-w-fit">
          <Typography type="interface-secondary">
            {buttonTitle}
          </Typography>
        </Button>
      </div>
      <Image
        src="/lukas-bato-4LkjvMlVhOw-unsplash.jpg"
        alt="preparing car for winter"
        // placeholder="blur"
        width={1200}
        height={500}
        className="object-cover rounded-md"
        loading="lazy"
      />
    </Grid>
  </Shell>
)