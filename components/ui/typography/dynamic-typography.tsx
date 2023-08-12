import { createElement } from "react";

export interface DynamicTypographyProps
  extends React.HTMLAttributes<HTMLElement> {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}

export const DynamicTypography = ({ tag, children, ...props }: DynamicTypographyProps) => {
  return createElement(tag, props, children)
}