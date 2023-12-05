import { Grid } from "@/components/layouts/grid/grid";
import { Shell } from "@/components/shell/shell";
import { Button } from "@/components/ui/button/button";
import { Typography } from "@/components/ui/typography/typography";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import { ComponentProps, HTMLAttributes } from "react";


export interface HeroProps
  extends HTMLAttributes<HTMLElement> {
  imageSrc: string;
  alt: string;
}

const Hero = ({ className, children, imageSrc, alt }: HeroProps) => (
  <Shell className="md:py-14">
    <Grid columns={2}>
      <div
        className={cn(
          "flex flex-col justify-center max-w-2xl md:px-5",
          className
        )}
      >
        {children}
      </div>
      <HeroImage src={imageSrc} alt={alt} />
      {/* <Image
        src="/lukas-bato-4LkjvMlVhOw-unsplash.jpg"
        alt="preparing car for winter"
        // placeholder="blur"
        width={800}
        height={500}
        className="object-cover rounded-md"
        loading="lazy"
      /> */}
    </Grid>
  </Shell>
)

interface HeroFullscreenProps
  extends HTMLAttributes<HTMLElement> {
  imageSrc: string;
}

const HeroFullscreen = ({ className, children, imageSrc }: HeroFullscreenProps) => {
  return (
    <Shell
      variant="fullscreen"
      className={cn(
        `bg-cover md:justify-center`,
        className
      )}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <HeroOverlay />
      <div className="relative z-10 pt-10">
        {children}
      </div>
    </Shell>
  )
}

interface HeroFullscreenVideoProps
  extends HTMLAttributes<HTMLElement> {
  videoSrc: string;
}

const HeroFullscreenVideo = ({ className, children, videoSrc }: HeroFullscreenVideoProps) => (
  <Shell
    variant="fullscreen"
    className={cn(
      "relative items-end md:justify-center",
      className
    )}
  >
    <HeroOverlay />
    <div className="relative z-10 pb-8 pl-8 md:pl-0">
      {children}
    </div>
    <HeroVideo src={videoSrc} />
  </Shell >
)


const heroHeadingVariants = cva(
  "max-w-4xl", {
  variants: {
    variant: {
      default: "text-on-surface-primary",
      contrast: "text-on-surface-contrast"
    }
  },
  defaultVariants: {
    variant: "default",
  }
})

interface HeroHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof heroHeadingVariants> { }

const HeroHeading = ({ className, children, variant }: HeroHeadingProps) => (
  <Typography
    tag="h1"
    type="heading-one"
    className={cn(heroHeadingVariants({ variant, className }))}
  >
    {children}
  </Typography>
)
HeroHeading.displayName = "HeroHeading"

const heroDescriptionVariants = cva(
  "max-w-4xl mb-10", {
  variants: {
    variant: {
      default: "text-on-surface-primary",
      contrast: "text-on-surface-contrast"
    }
  },
  defaultVariants: {
    variant: "default",
  }
})


interface HeroDescriptionProps
  extends HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof heroDescriptionVariants> { }

const HeroDescription = ({ className, children, variant }: HeroDescriptionProps) => (
  <Typography
    type="subtitle"
    className={cn(heroDescriptionVariants({ variant, className }))}
  >
    {children}
  </Typography>
)
HeroDescription.displayName = "HeroDescription"


interface HeroVideoProps {
  src: string;
}

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

interface HeroImageProps
  extends ComponentProps<typeof Image> { }

const HeroImage = ({ className, src, alt }: HeroImageProps) => (
  <div className="relative w-full h-full">
    <Image
      className={cn("", className)}
      src={src}
      alt={alt}
      fill
      objectFit="cover"
    />
  </div>
)

const HeroOverlay = () => (
  <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/20"></div>
)


export {
  Hero,
  HeroFullscreen,
  HeroFullscreenVideo,
  HeroImage,
  HeroHeading,
  HeroDescription
}