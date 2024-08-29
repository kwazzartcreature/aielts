import z from 'zod';

export const registerFormSchema = z.object({
	username: z
		.string()
		.min(3, { message: 'Username min length is 3 characters.' })
		.max(150, { message: 'Username max length is 150 characters.' })
		.transform((s) => s.trim())
		.describe("The user's unique username"),

	email: z
		.string()
		.email({ message: 'Please enter a valid email address.' })
		.transform((s) => s.trim())
		.describe("The user's email address"),

	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long.' })
		.transform((s) => s.trim())
		.describe('A secure password for the user')
	// .refine((password) => /[A-Z]/.test(password), {
	// 	message: 'Password must contain at least one uppercase letter.'
	// })
	// .refine((password) => /[0-9]/.test(password), {
	// 	message: 'Password must contain at least one number.'
	// })
	// .refine((password) => /[!@#$%^&*]/.test(password), {
	// 	message: 'Password must contain at least one special character.'
	// })
});

export const loginFormSchema = z.object({
	identifier: z
		.string()
		.min(1)
		.transform((s) => s.trim())
		.describe("The user's unique identifier (username or email)"),
	password: z
		.string()
		.min(1)
		.transform((s) => s.trim())
		.describe("The user's password for login")
});
