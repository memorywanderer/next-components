import { z } from 'zod'

export const testSchema = z
  .object({
    email: z.string().email('Вы уверенны?'),
    password: z.string().min(6, 'Пароль должен быть больше шести символов'),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password must match',
    path: ["confirmPassword"],
  })

export type TestSchema = z.infer<typeof testSchema>