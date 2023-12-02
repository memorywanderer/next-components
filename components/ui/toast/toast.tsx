import { ReactNode } from "react";
import { toast } from "sonner";

export interface ToastProps {
  title: string | React.ReactNode,
  description?: string,
  duration?: number,
  icon?: ReactNode,
  className?: string,
  type: ToastTypes
}

type ToastTypes = 'normal' | 'success' | 'info' | 'warning' | 'error' | 'loading';

export const Toast = ({
  title,
  description,
  duration,
  icon,
  className,
  type
}: ToastProps) => {
  console.log(type)
  if (type === "success") {
    return toast.success(title, { description, duration, icon, className })
  } else if (type === "info") {
    return toast.info(title, { description, duration, icon, className })
  } else if (type === "warning") {
    return toast.warning(title, { description, duration, icon, className })
  } else if (type === "error") {
    return toast.error(title, { description, duration, icon, className })
  } else {
    return toast(title, { description, duration, icon, className })
  }
}
