import {
  HTMLAttributes,
  forwardRef
} from 'react'

export interface CardBodyProps
  extends HTMLAttributes<HTMLDivElement> {

}

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={className}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  })

CardBody.displayName = 'CardBody'

export { CardBody }