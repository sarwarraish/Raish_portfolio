
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        gradient: 
          "border-transparent bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow hover:opacity-90 dark:text-white",
        success:
          "border-transparent bg-gradient-to-r from-emerald-400 to-green-500 text-white shadow hover:opacity-90",
        info:
          "border-transparent bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow hover:opacity-90",
        warning:
          "border-transparent bg-gradient-to-r from-amber-400 to-orange-500 text-navy shadow hover:opacity-90 dark:text-white",
        elite: 
          "border-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow hover:opacity-90",
        premium: 
          "border-transparent bg-gradient-to-r from-yellow-400 to-amber-600 text-navy shadow hover:opacity-90 dark:text-white",
        creative: 
          "border-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow hover:opacity-90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
