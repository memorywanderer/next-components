"use client"

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { TestSchema, testSchema } from '@/lib/validation/test'
import { Button } from '../ui/button/button'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form/form"

import { Input } from '../ui/input/input'
import { Typography } from '../ui/typography/typography'
import { cn } from '@/lib/utils'
type Inputs = z.infer<typeof testSchema>

export const TestForm = () => {
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<Inputs>({
    resolver: zodResolver(testSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    }
  })

  const onSubmit = (data: Inputs) => {

    console.log('Submitted')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Почта</FormLabel>
              <FormControl>
                <Input placeholder='name@mail.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input placeholder='******' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>
          <Typography>
            Войти
          </Typography>
          <span className="sr-only">Продолжить на страницу подтверждения почты</span>
        </Button>
      </form>
    </Form>
  )
}