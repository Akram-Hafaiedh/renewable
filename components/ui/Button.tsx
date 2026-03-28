import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          {
             "bg-primary text-black hover:bg-primary-dark": variant === "primary",
             "bg-transparent text-white border border-white/20 hover:bg-white/10": variant === "outline",
             "h-10 px-6 py-2": size === "default",
             "h-12 px-8 py-3 text-base": size === "lg",
             "h-8 px-3 text-xs": size === "sm",
             "w-10 h-10 p-0": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
