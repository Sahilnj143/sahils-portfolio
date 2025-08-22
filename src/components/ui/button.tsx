import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-glow hover:scale-105 hover:-translate-y-1",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline:
          "border-2 border-primary/30 bg-background/80 backdrop-blur-sm text-primary hover:bg-primary/10 hover:border-primary hover:shadow-glow hover:scale-105 hover:-translate-y-1",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-card hover:shadow-elegant hover:scale-105",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground hover:scale-105 backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105",
        hero: "hero-gradient text-white font-bold shadow-intense hover:shadow-neon hover:scale-110 hover:-translate-y-2 border-0 neon-glow",
        gradient: "bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold shadow-elegant hover:shadow-intense hover:scale-110 hover:-translate-y-2 pulse-glow",
        glass: "glass-effect text-white hover:bg-white/30 shadow-glass hover:shadow-glow hover:scale-105 hover:-translate-y-1",
        neon: "bg-transparent border-2 border-primary text-primary neon-glow hover:bg-primary/20 hover:text-white hover:scale-110 hover:-translate-y-2 font-bold",
        cyber: "bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 backdrop-blur-xl border border-primary/50 text-primary hover:from-primary/40 hover:via-accent/40 hover:to-secondary/40 hover:border-primary hover:scale-105 shimmer",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-2xl px-10 text-base font-semibold",
        xl: "h-16 rounded-2xl px-12 text-lg font-bold",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
