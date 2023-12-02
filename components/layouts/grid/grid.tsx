import { cn } from "@/lib/utils"
import React, { createElement, forwardRef } from "react"

type Tags = 'div' | 'section' | 'article' | 'header' | 'footer' | 'aside'

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  columns?: number,
  rows?: number,
  gap?: number,
  tag?: Tags
}

const Grid = forwardRef<HTMLElement, GridProps>(
  ({ className, children, columns, rows, gap, tag = 'div', ...props }, ref) => (
    <DynamicTag
      ref={ref}
      tag={tag}
      className={cn(className)}
      {...props}
    >
      {children}
    </DynamicTag>
  )
)

interface DynamicTagProps extends React.HTMLAttributes<HTMLElement> {
  tag: Tags
}

const DynamicTag = forwardRef<HTMLElement, DynamicTagProps>(
  ({ tag, children, ...props }, ref) => (
    createElement(tag, { ...props, ref }, children)
  )
)
