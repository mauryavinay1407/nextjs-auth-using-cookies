import {z} from "zod"

export const signupSchema=z.object({
    email:z.string().email("Invalid Email").max(255),
    password:z.string().min(8,"Password must be at least 8 characters").max(255),
    username:z.string().min(3,"Name is requiered").max(255)
});