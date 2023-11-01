import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../input/input'
import { Button } from '../button/button'
import { TestSchema, testSchema } from '@/lib/validation/test'
import { Typography } from '../typography/typography'
import { Label } from '../label/label'
import { cn } from '@/lib/utils'

export const FormWithReactHookForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(testSchema)
  })

  // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const onSubmit = async (data: TestSchema) => {
    const response = await fetch("api/signup", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    })

    const responseData = await response.json()
    if (!response.ok) {
      alert("Submitting form failed!")
      return
    }
    if (responseData.errors) {
      const errors = responseData.errors
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        alert("Something went wrong!");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Почта</Label>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            placeholder='Ваша почта'
            autoComplete='new-email'
            type='email'
            className={cn(errors.email && 'border-2 border-outline-negative')}
            {...field}
          />
        )}
      />
      {errors.email && (
        <Typography type="interface-error-desktop" className="text-on-surface-negative">
          {errors.email.message}
        </Typography>
      )}
      <Label>Пароль</Label>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            placeholder='Ваш пароль'
            autoComplete='new-password'
            type='password'
            className={cn(errors.password && 'border-2 border-outline-negative')}
            {...field}
          />
        )}
      />
      {errors.password && (
        <Typography type="interface-error-desktop" className="text-on-surface-negative">
          {errors.password.message}
        </Typography>
      )}
      <Label>Пароль</Label>
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <Input
            placeholder='Ваш пароль'
            autoComplete='off'
            type='password'
            className={cn(errors.confirmPassword && 'border-2 border-outline-negative')}
            {...field}
          />
        )}
      />
      {errors.confirmPassword && (
        <Typography type="interface-error-desktop" className="text-on-surface-negative">
          {errors.confirmPassword.message}
        </Typography>
      )}
      <Button className='w-full mt-2 mb-4' type='submit'>Send shit</Button>
    </form>
  )
}