import {z}  from 'zod'

const AuthRegisterSchema = z.object({
  firstname: z.string().nonempty('First name is required'),
  lastname: z.string().nonempty('Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters longs' })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: 'Password should contain at least 1 special character',
    }),
  confirmPassword: z
    .string()
    .min(1, { message: 'Confirm Password is required' }),
}).refine((input) => input.password === input.confirmPassword, {
        message: "Password and Confirm Password does not match",
        path: ["confirmPassword"],
    });

type RegisterForm=z.infer<typeof AuthRegisterSchema>;





const AuthLoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
  .string()
  .min(8, { message: 'Password must be at least 8 characters longs' })
  .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
    message: 'Password should contain at least 1 special character',
  }),
});

type LoginForm=z.infer<typeof AuthLoginSchema>;



export { AuthRegisterSchema,AuthLoginSchema,type RegisterForm,
  type LoginForm
}
