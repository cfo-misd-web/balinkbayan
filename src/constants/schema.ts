import { z } from "zod";

// Define the schema using Zod
export const loginSchema = z.object({
    email: z.string().email("Invalid email format").nonempty("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
});

export const cmsformSchema = z.object({
    title: z.string().min(1, "Title is required"),
    route: z.string().min(1, "Route is required"),
    description: z.string().optional(),
    content: z.string().min(1, "Content is required"),
    bannerImage: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishDate: z.string().optional(),
});

export type cmsFormValues = z.infer<typeof cmsformSchema>;