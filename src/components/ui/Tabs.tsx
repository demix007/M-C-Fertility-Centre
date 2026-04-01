import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '../../lib/cn'

export const Tabs = TabsPrimitive.Root
export const TabsList = TabsPrimitive.List

export const TabsTrigger = (props: TabsPrimitive.TabsTriggerProps & { className?: string }) => {
  return (
    <TabsPrimitive.Trigger
      {...props}
      className={cn(
        'rounded-full px-4 py-2 text-sm font-extrabold text-foreground/85 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
        props.className,
      )}
    />
  )
}

export const TabsContent = TabsPrimitive.Content

