import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import { cn } from '../../lib/cn'

export const PlusAccordion = AccordionPrimitive.Root
export const PlusAccordionItem = AccordionPrimitive.Item

export function PlusAccordionTrigger(props: AccordionPrimitive.AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        {...props}
        className={cn(
          'group flex flex-1 items-center justify-between gap-4 rounded-2xl bg-background/30 px-4 py-3 text-left text-sm font-extrabold text-foreground shadow-sm transition-colors hover:bg-background/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          props.className,
        )}
      >
        <span className="flex-1">{props.children}</span>
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-background/40 ring-1 ring-border/40 transition-transform duration-200 group-data-[state=open]:rotate-45"
        >
          <Plus className="h-4 w-4 text-primary" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function PlusAccordionContent(props: AccordionPrimitive.AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      {...props}
      className={cn(
        'overflow-hidden rounded-b-2xl bg-background/15 px-4 pb-4 pt-0 text-sm text-muted-foreground',
        props.className,
      )}
    />
  )
}

