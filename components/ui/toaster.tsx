"use client"

import { useToast } from "@/components/ui/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
<ToastProvider>
  {toasts.map(function ({ id, title, description, action, ...props }) {
    return (
      <Toast
        key={id}
        {...props}
        className="flex items-center p-4 mb-4 rounded-lg bg-[hsl(var(--primary))] text-white shadow-lg border border-[hsl(var(--border))] transition-all duration-300 transform hover:scale-105"
      >
        <div className="grid gap-1">
          {title && (
            <ToastTitle className="text-xl font-semibold text-[hsl(var(--primary-foreground))]">
              {title}
            </ToastTitle>
          )}
          {description && (
            <ToastDescription className="text-sm text-[hsl(var(--muted-foreground))] dark:text-neutral-200">
              {description}
            </ToastDescription>
          )}
        </div>
        {action && (
          <div className="ml-4">
            {action}
          </div>
        )}
        <ToastClose className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-300 ml-4" />
      </Toast>
    )
  })}
  <ToastViewport />
</ToastProvider>
  )
}
