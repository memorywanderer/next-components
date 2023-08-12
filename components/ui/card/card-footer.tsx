import { forwardRef } from 'react'

export interface CardFooter
  extends React.HTMLAttributes<HTMLDivElement> {

}

const CardFooter = forwardRef<HTMLDivElement, CardFooter>(
  ({ className, children, ...props }, ref) => {
    return (
      <footer
        className={className}
        ref={ref}
        {...props}
      >
        {children}
      </footer>
    )
  })


CardFooter.displayName = 'CardFooter'

export { CardFooter }