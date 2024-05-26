"use server";

import { noteSchema } from "@/schema/noteSchema";
import { z } from "zod";

export const onSubmit = async (values: z.infer<typeof noteSchema>) => {
  console.log(values);
};
