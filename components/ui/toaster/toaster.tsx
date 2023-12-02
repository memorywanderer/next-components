"use client"

import { Toaster as ToasterSonner } from 'sonner'

export const Toaster = () => (
  <ToasterSonner
    position='bottom-right'
    toastOptions={{
      unstyled: true,
      classNames: {
        toast: 'p-4 w-full flex items-center gap-2 rounded-lg',
        title: 'font-bold text-[length:var(--body-primary-desktop)] leading-[var(--body-primary-desktop-leading)] font-charter',
        description: 'text-[length:var(--interface-caption)] leading-[var(--interface-caption-leading)] font-charter',
        success: 'bg-surface-accent text-on-surface-accent border border-outline-accent',
        warning: 'bg-surface-warning text-on-surface-warning border border-outline-warning',
        error: 'bg-surface-negative text-on-surface-negative border border-outline-negative',
        info: 'bg-surface-primary text-on-surface-primary bordre border-outline-tertiary'
      }
    }}
  />
)