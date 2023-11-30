import { Eye, EyeOff } from "lucide-react"
import { Button } from "../button/button"
import { ElementRef, forwardRef, useState } from "react"
import { Input, InputProps } from "../input/input"
import { cn } from "@/lib/utils"


const PasswordInput = forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative">
      <Input
        ref={ref}
        type={showPassword ? "password" : "text"}
        className={cn('pr-12', className)}
        {...props}
      />
      <Button
        variant="ghost"
        className="absolute p-2 -translate-y-1/2 right-2 top-1/2"
        onClick={() => setShowPassword(prev => !prev)}
      >
        {showPassword
          ? <Eye className="w-6 h-6" />
          : <EyeOff className="w-6 h-6" />
        }
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>
    </div>
  )
})
PasswordInput.displayName = "PasswordInput"

export {
  PasswordInput
}