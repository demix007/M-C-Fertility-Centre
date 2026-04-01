import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '../../lib/cn'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = AccordionPrimitive.Item

export function AccordionTrigger(props: AccordionPrimitive.AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        {...props}
        className={cn(
          'flex flex-1 items-center justify-between gap-4 px-4 py-3 text-left text-sm font-extrabold text-foreground transition hover:bg-card/60',
          props.className,
        )}
      />
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent(props: AccordionPrimitive.AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      {...props}
      className={cn('overflow-hidden px-4 pb-4 text-sm text-muted-foreground', props.className)}
    />
  )
}

