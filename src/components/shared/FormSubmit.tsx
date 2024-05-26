"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowDownToLine } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { noteSchema } from "@/schema/noteSchema";
import { onSubmit } from "@/actions/note";

export const FormSubmit = () => {
  const noteForm = useForm<z.infer<typeof noteSchema>>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { toast } = useToast();

  return (
    <Popover>
      <PopoverTrigger className={buttonVariants()}>Add Note</PopoverTrigger>
      <PopoverContent className="flex flex-col items-center">
        <Form {...noteForm}>
          <form
            onSubmit={noteForm.handleSubmit((data) => {
              onSubmit({
                title: data.title,
                description: data.description,
              });
            })}
            className="space-y-8"
          >
            <FormField
              control={noteForm.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Go to the gym..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={noteForm.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="I will go to the gym at 2 PM..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              onClick={() => {
                toast({
                  title: "Note has been saved. ✅",
                });
              }}
            >
              Save
              <ArrowDownToLine className="size-4 ml-1" />
            </Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

export default FormSubmit;
