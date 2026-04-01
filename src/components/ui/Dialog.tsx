import * as DialogPrimitive from '@radix-ui/react-dialog'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger

export const DialogPortal = DialogPrimitive.Portal
export const DialogClose = DialogPrimitive.Close

export function DialogContent(props: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
      <DialogPrimitive.Content
        {...props}
        className={cn(
          'fixed left-1/2 top-1/2 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-background p-6 shadow-lg',
          props.className,
        )}
      />
    </DialogPrimitive.Portal>
  )
}

export function DialogHeader({ children }: { children: ReactNode }) {
  return <div className="mb-4">{children}</div>
}

export function DialogTitle(props: DialogPrimitive.DialogTitleProps) {
  return (
    <DialogPrimitive.Title {...props} className={cn('text-base font-extrabold text-foreground', props.className)} />
  )
}

export function DialogDescription(props: DialogPrimitive.DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      {...props}
      className={cn('mt-1 text-sm text-muted-foreground', props.className)}
    />
  )
}

