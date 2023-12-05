import { cn } from '@/lib/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { X } from 'lucide-react'
import { Typography } from '../typography/typography'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

DialogTrigger.displayName = DialogPrimitive.Trigger.displayName

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

const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 grid scale-100 gap-4 bg-background border border-outline-slight p-6 pt-10 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10 max-h-[85vh] w-[90vw] max-w-[450px]',
        className
      )}
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
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
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
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
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
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = forwardRef<
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
    <Typography type="interface-heading-one">
      {children}
    </Typography>
  </DialogPrimitive.Title>
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = forwardRef<
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
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
