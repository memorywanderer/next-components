import { z } from 'zod'

export const testSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password must match',
    path: ["confirmPassword"],
  })

export type TestSchema = z.infer<typeof testSchema>