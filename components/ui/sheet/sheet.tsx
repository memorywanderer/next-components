
import { cn } from '@/lib/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { X } from 'lucide-react'
import { Typography } from '../typography/typography'
import { VariantProps, cva } from 'class-variance-authority'

const Sheet = DialogPrimitive.Root

const SheetTrigger = DialogPrimitive.Trigger

SheetTrigger.displayName = DialogPrimitive.Trigger.displayName

const DialogPortal = ({
  children, ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal
    {...props}
  >
    <div className='fixed inset-0 top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center'>
      {children}
    </div>
  </DialogPrimitive.Portal>
)

DialogPortal.displayName = DialogPrimitive.Portal.displayName

const DialogOverlay = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/30 backdrop-blur-md transition-opacity animate-in',
      className
    )}
    {...props}
  >
    {children}
  </DialogPrimitive.Overlay>
))

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName


const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-outline-tertiary data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        right: "inset-y-0 right-0 h-full w-3/4 border-l border-outline-tertiary data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      }
    }
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
  VariantProps<typeof sheetVariants> { }

const SheetContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className="absolute p-1 transition-opacity rounded-sm top-2 right-2 bg-interactive-secondary opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-non ">
        <X className="w-4 h-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
SheetContent.displayName = DialogPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <header
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = 'DialogHeader'

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <footer
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end space-x-2',
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = 'DialogFooter'

const SheetTitle = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      className
    )}
    {...props}
  >
    <Typography type="interface-heading-one-desktop">
      {children}
    </Typography>
  </DialogPrimitive.Title>
))
SheetTitle.displayName = DialogPrimitive.Title.displayName

const SheetDescription = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      'text-on-surface-secondary',
      className
    )}
    {...props}
  >
    <Typography type="body-large">
      {children}
    </Typography>
  </DialogPrimitive.Description>
))
SheetDescription.displayName = DialogPrimitive.Description.displayName

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
