import { DynamicTypography, DynamicTypographyProps } from "./dynamic-typography"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva(
  '',
  {
    variants: {
      type: {
        "title":
          'font-bold md:text-[length:var(--title-desktop)] md:leading-[var(--title-desktop-leading)] text-[length:var(--title-mobile)] leading-[var(--title-mobile-leading)] font-neue-montreal',

        "subtitle":
          'text-[length:var(--subtitle-mobile)] leading-[var(--subtitle-mobile-leading)] md:text-[length:var(--subtitle-desktop)] md:leading-[var(--subtitle-desktop-leading)] font-charter',

        "heading-one":
          "font-bold text-[length:var(--heading-one-mobile)] leading-[var(--heading-one-mobile-leading)] md:text-[length:var(--heading-one-desktop)] md:leading-[var(--heading-one-desktop-leading)] font-neue-montreal",

        "heading-two":
          'font-bold text-[length:var(--heading-two-mobile)] leading-[var(--heading-two-mobile-leading)] md:text-[length:var(--heading-two-desktop)] md:leading-[var(--heading-two-desktop-leading)] font-neue-montreal',

        "heading-three":
          'font-bold text-[length:var(--heading-three)] leading-[var(--heading-three-leading)] font-neue-montreal',

        "heading-four":
          'font-bold text-[length:var(--heading-four-mobile)] leading-[var(--heading-four-mobile-leading)]md:text-[length:var(--heading-four-desktop)] md:leading-[var(--heading-four-desktop-leading)] font-neue-montreal',

        "heading-five":
          'font-bold text-[length:var(--heading-five)] leading-[var(--heading-five-leading)] font-neue-montreal',

        "heading-six":
          'font-bold text-[length:var(--heading-six-desktop)] leading-[var(--heading-six-mobile-leading)] md:th:var(--heading-six-desktop)] md:leading-[var(--heading-six-desktop-leading)] font-neue-montreal',

        "body-primary":
          'text-[length:var(--body-primary-mobile)] leading-[var(--body-primary-mobile-leading)] md:text-[length:var(--body-primary-desktop)] md:leading-[var(--body-primary-desktop-leading)] font-charter',

        "body-secondary":
          'text-[length:var(--body-secondary-mobile)] leading-[var(--body-secondary-mobile-leading)] md:text-[length:var(--body-desktop-secondary)] md:leading-[var(--body-secondary-desktop-leading)] font-charter',

        "body-large":
          'text-[length:var(--body-large)] leading-[var(--body-large-leading)] font-charter',

        "body-medium":
          'text-[length:var(--body-medium)] leading-[var(--body-medium-leading)] font-charter',

        "body-small":
          'text-[length:var(--body-small)] leading-[var(--body-small-leading)] font-charter',

        "interface-heading-one":
          'font-bold text-[length:var(--interface-heading-one-mobile)] leading-[var(--interface-heading-one-mobile-leading)] md:text-[length:var(--interface-heading-one-desktop)] md:leading-[var(--interface-heading-one-desktop-leading)] font-neue-montreal',

        "interface-primary":
          'text-[length:var(--interface-primary)] leading-[var(--interface-primary-leading)] font-charter',

        "interface-secondary":
          'text-[length:var(--interface-secondary)] leading-[var(--interface-secondary-leading)] font-charter',

        "interface-caption":
          'text-[length:var(--interface-caption)] leading-[var(--interface-caption-leading)] font-charter',

        "interface-error-mobile":
          'text-[length:var(--interface-error-mobile)] leading-[var(--interface-error-mobile-leading)] md:text-[length:var(--interface-error-desktop)] md:leading-[var(--interface-error-desktop-leading)] font-charter',
      },
      weight: {
        thin: 'font-thin',
        extralight: 'font-extralight',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold'
      },
    },
    defaultVariants: {
      type: 'body-medium',
      weight: 'normal',
    },
  }
)


export interface TypographyProps
  extends React.HtmlHTMLAttributes<HTMLElement>,
  VariantProps<typeof typographyVariants> {
  tag?: DynamicTypographyProps['tag']
}

const Typography = (
  ({ className, children, tag = 'p', type, weight, ...props }: TypographyProps) => {
    return (
      <DynamicTypography
        className={cn(typographyVariants({ type, weight, className }))}
        tag={tag}
        {...props}
      >
        {children}
      </DynamicTypography>
    )
  })


export { Typography }

// Test
/*
      <Typography type={"title-desktop"}>
        Title desktop
      </Typography>
      <Typography type={"title-mobile"}>
        Title mobile
      </Typography>
      <Typography type="subtile-desktop">
        Subtitle desktop
      </Typography>
      <Typography type="subtitle-mobile">
        Subtitle mobile
      </Typography>
      <Typography type="heading-one-desktop">
        Heading 1 desktop
      </Typography>
      <Typography type="heading-one-mobile">
        Heading 1 mobile
      </Typography>
      <Typography type="heading-two-desktop">
        Heading 2 desktop
      </Typography>
      <Typography type="heading-two-mobile">
        Heading 2 mobile
      </Typography>
      <Typography type="heading-three">
        Heading 3
      </Typography>
      <Typography type="heading-four-desktop">
        Heading 4 desktop
      </Typography>
      <Typography type="heading-four-mobile">
        Heading 4 mobile
      </Typography>
      <Typography type="heading-five">
        Heading 5
      </Typography>
      <Typography type="heading-six-desktop">
        Heading 6 desktop
      </Typography>
      <Typography type="heading-six-mobile">
        Heading 6 mobile
      </Typography>
      <Typography type="body-primary-desktop">
        Body primary desktop
      </Typography>
      <Typography type="body-primary-mobile">
        Body primary mobile
      </Typography>
      <Typography type="body-secondary-desktop">
        Body secondary desktop
      </Typography>
      <Typography type="body-secondary-mobile">
        Body secondary mobile
      </Typography>
      <Typography type="body-large">
        Body large
      </Typography>
      <Typography type="body-medium">
        Body medium
      </Typography>
      <Typography type="body-small">
        Body small
      </Typography>
      <Typography type="interface-heading-one-desktop">
        Interface heading one desktop
      </Typography>
      <Typography type="interface-heading-one-mobile">
        Interface heading one mobile
      </Typography>
      <Typography type="interface-primary">
        Interface primary
      </Typography>
      <Typography type="interface-secondary">
        Interface secondary
      </Typography>
      <Typography type="interface-caption">
        Interface caption
      </Typography>
      <Typography type="interface-error-desktop">
        Interface error desktop
      </Typography>
      <Typography type="interface-error-mobile">
        Interface error mobile
      </Typography>
*/