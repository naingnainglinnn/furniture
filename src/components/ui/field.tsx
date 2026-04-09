import * as React from "react"

export const Field = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2">{children}</div>
}

export const FieldLabel = ({
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className="text-sm font-medium" {...props}>
      {children}
    </label>
  )
}

export const FieldDescription = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <p className={`text-xs text-gray-500 ${className}`}>{children}</p>
}

export const FieldGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-4">{children}</div>
}

export const FieldSeparator = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <hr className="flex-1 border-gray-300" />
      {children && <span className="text-xs text-gray-500">{children}</span>}
      <hr className="flex-1 border-gray-300" />
    </div>
  )
}
