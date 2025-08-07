import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const dentalButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-dental text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-dental-primary text-white hover:bg-dental-primary-dark shadow-dental hover:shadow-lg hover:scale-105",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover border border-border",
        accent: "bg-dental-accent text-white hover:bg-dental-accent hover:opacity-90 shadow-md",
        outline: "border border-dental-primary text-dental-primary hover:bg-dental-primary hover:text-white",
        ghost: "text-dental-primary hover:bg-dental-primary-light hover:text-dental-primary-dark",
        hero: "bg-gradient-to-r from-dental-primary to-dental-accent text-white hover:from-dental-primary-dark hover:to-dental-accent shadow-dental hover:shadow-xl hover:scale-105 font-semibold",
        emergency: "bg-red-500 text-white hover:bg-red-600 shadow-lg pulse font-semibold",
      },
      size: {
        sm: "h-9 px-3",
        default: "h-11 px-6",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface DentalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof dentalButtonVariants> {
  asChild?: boolean
}

const DentalButton = React.forwardRef<HTMLButtonElement, DentalButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(dentalButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
DentalButton.displayName = "DentalButton"

export { DentalButton, dentalButtonVariants }