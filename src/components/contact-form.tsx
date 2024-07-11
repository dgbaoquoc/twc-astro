import { z } from "astro/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { render } from "@react-email/render";
import { ThanksEmail } from "./email-template";

const contactSchema = z.object({
  firstName: z
    .string({
      message: "Please enter your first name",
    })
    .max(50, {
      message: "First name must be less than 50 characters",
    }),
  lastName: z
    .string({
      message: "Please enter your last name",
    })
    .max(50, {
      message: "Last name must be less than 50 characters",
    }),
  company: z.string({
    message: "Please enter your company name",
  }),
  title: z.string({
    message: "Please enter your title",
  }),
  email: z
    .string({
      message: "Please enter your email",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  region: z.string({
    message: "Please enter your region",
  }),
  category: z.enum(["", "media", "marketing"]).default(""),
  message: z
    .string({
      message: "Please enter your message",
    })
    .max(500, {
      message: "Message must be less than 500 characters",
    }),
});

export default function ContactForm() {
  const [isPending, startTranstion] = React.useTransition();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    startTranstion(async () => {
      try {
        const html = render(
          <ThanksEmail name={`${data.firstName} ${data.lastName}`} />
        );
        await fetch("/api/sendEmail.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: data.email,
            html,
          }),
        });

        await fetch(
          "https://script.google.com/macros/s/AKfycbySfN8JLVKV2-KNvoh0gyqenDoVA2wpm5OL3EM1Ni7kt8mn0p5dbcPhhdPuUhS7--vFJA/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              companyName: data.company,
              representer: data.email,
              title: data.title,
              region: data.region,
              enquiryType: data.category,
              stage: "Prospect",
              estValue: "0.00",
              relationshipOwner: "N/A",
              probability: 0,
              notes: data.message,
            }),
          }
        );

        form.reset();
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="contents gap-8 lg:grid lg:grid-cols-2 lg:gap-16"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  className="border-none bg-transparent uppercase placeholder:text-slate-800"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  className="border-none bg-transparent uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Company"
                  {...field}
                  className="border-none bg-transparent uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Title"
                  {...field}
                  className="border-none bg-transparent uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="border-none bg-transparent uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Region"
                  {...field}
                  className="border-none bg-transparent uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="col-span-2 border-b-2 border-b-slate-800">
              <FormControl>
                <select
                  className="w-full border-none bg-transparent px-3 py-2 uppercase placeholder:text-slate-800 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-transparent"
                  onChange={field.onChange}
                  defaultValue={field.value}
                >
                  <option value="">
                    Choose the category that best describes your inquiry
                  </option>
                  <option value="media">Media Solution</option>
                  <option value="marketing">Marketing Solution</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2 border-b-2 border-b-slate-800">
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="How can we help your brand?"
                  className="border-none bg-transparent uppercase placeholder:text-slate-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isPending}
          className="col-span-2 ml-auto rounded-3xl border-2 border-slate-800 bg-transparent
        "
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
}
