"use server";

import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(3, {
    message: "Description must be at least 3 characters.",
  }),
});

export const onSubmit = async (values: z.infer<typeof noteSchema>) => {
  console.log(values);
};
