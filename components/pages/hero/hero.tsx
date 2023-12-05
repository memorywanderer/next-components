import { Grid } from "@/components/layouts/grid/grid";
import { Shell } from "@/components/shell/shell";
import { Button } from "@/components/ui/button/button";
import { Typography } from "@/components/ui/typography/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";


export interface HeroProps {
  title: string;
  buttonTitle: string;
  description?: string;
}

export const Hero = ({ title, description, buttonTitle }: HeroProps) => (
  <Shell className="md:py-14">
    <Grid columns={2}>
      <div className="flex flex-col justify-center max-w-2xl md:px-5">
        <Typography tag="h1" type="heading-one" className="mb-4 text-on-surface-primary">
          {title}
        </Typography>
        {description && <Typography type="subtitle" className="mb-8 text-on-surface-secondary">
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
        width={800}
        height={500}
        className="object-cover rounded-md"
        loading="lazy"
      />
    </Grid>
  </Shell>
)

export const FullscreenHero = ({ title, description, buttonTitle }: HeroProps) => (
  <Shell variant="fullscreen" className="bg-[url('/nat-uN9OSpSsw4A-unsplash.jpg')] bg-cover md:justify-center">
    <div className="absolute top-0 left-0 z-10 w-full h-full bg-dark/10"></div>
    <div className="relative z-10 pt-10">
      <Typography tag="h1" type="title" className="mb-2 text-on-surface-contrast max-w-4xl">
        {title}
      </Typography>
      {description && <Typography type="subtitle" className="mb-6 text-on-surface-contrast  max-w-4xl">
        {description}
      </Typography>}
      <Button variant="outline" size="lg" rounded="lg" className="max-w-fit">
        <Typography type="interface-secondary">
          {buttonTitle}
        </Typography>
      </Button>
    </div>
  </Shell>
)

interface HeroFullscreenVideoProps
  extends HTMLAttributes<HTMLElement> {
  src: string;
}

const HeroFullscreenVideo = ({ className, children, src }: HeroFullscreenVideoProps) => (
  <Shell
    variant="fullscreen"
    className={cn(
      "relative items-end md:justify-center",
      className
    )}
  >
    <HeroVideoOverlay />
    <div className="relative z-10 pl-8 md:pl-0 pb-8">
      {children}
    </div>
    <HeroVideo src={src} />
  </Shell >
)


interface HeroHeadingProps
  extends HTMLAttributes<HTMLHeadingElement> { }

const HeroHeading = ({ className, children }: HeroHeadingProps) => (
  <Typography
    tag="h1"
    type="title"
    className={cn(
      "text-on-surface-contrast max-w-4xl", className
    )}
  >
    {children}
  </Typography>
)
HeroHeading.displayName = "HeroHeading"


interface HeroDescriptionProps
  extends HTMLAttributes<HTMLHeadingElement> { }

const HeroDescription = ({ className, children }: HeroDescriptionProps) => (
  <Typography
    type="subtitle"
    className={cn(
      "mb-10 text-on-surface-contrast max-w-4xl",
      className
    )}
  >
    {children}
  </Typography>
)
HeroDescription.displayName = "HeroDescription"


interface HeroVideoProps {
  src: string;
}
/*
"https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
*/
const HeroVideo = ({ src }: HeroVideoProps) => (
  <video
    className="absolute top-0 left-0 object-cover w-full h-full"
    autoPlay
    loop
    muted
  >
    <source
      src={src}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
)

const HeroVideoOverlay = () => (
  <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/20"></div>
)


export {
  HeroFullscreenVideo,
  HeroHeading,
  HeroDescription
}