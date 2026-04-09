import * as React from "react"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none ${className}`}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
