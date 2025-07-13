// components/contact/ContactForm.tsx
"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations, useLocale } from "next-intl";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { sendContactEmail } from "@/app/[locale]/(main)/contact/action";

// Validation schema with translated error messages
export function createContactSchema(t: (key: string) => string) {
  return z.object({
    firstName: z.string().min(1, { message: t("error.required") }).max(50, { message: t("error.maxLength") }),
    email: z.string().email({ message: t("error.invalidEmail") }).min(1, { message: t("error.required") }),
    organization: z.string().max(100, { message: t("error.maxLength") }).optional(),
    subject: z.string().min(1, { message: t("error.required") }).max(100, { message: t("error.maxLength") }),
    message: z.string().min(1, { message: t("error.required") }).max(500, { message: t("error.maxLength") }),
  });
}

type ContactValues = z.infer<ReturnType<typeof createContactSchema>>;

export function ContactForm() {
  const t = useTranslations("ContactPage.Form");
  const tToast = useTranslations("ContactPage.Form.toast");
//   const tError = useTranslations("ContactPage.Form.error");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<ContactValues>({
    resolver: zodResolver(createContactSchema(t)),
    defaultValues: {
      firstName: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
    },
    mode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: sendContactEmail,
    onSuccess: (result) => {
      if (result.success) {
        toast({
          title: tToast("success.title"),
          description: tToast("success.description"),
        });
        form.reset();
      } else {
        toast({
          title: tToast("error.title"),
          description: result.error || tToast("error.description"),
          variant: "destructive",
        });
      }
    },
    onError: (error) => {
      toast({
        title: tToast("error.title"),
        description: error.message || tToast("error.description"),
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: ContactValues) => {
    startTransition(() => {
      const formData = new FormData();
      formData.append("firstName", values.firstName);
      formData.append("email", values.email);
      if (values.organization) formData.append("organization", values.organization);
      formData.append("subject", values.subject);
      formData.append("message", values.message);
      formData.append("locale", locale);
      mutation.mutate(formData);
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">{t("title")}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">{t("description")}</p>
          </div>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t("labels.firstName")}
                </FormLabel>
                <FormControl>
                  <Input className="h-12" placeholder={t("placeholders.firstName")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t("labels.email")}
                </FormLabel>
                <FormControl>
                  <Input type="email" className="h-12" placeholder={t("placeholders.email")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t("labels.organization")}
                </FormLabel>
                <FormControl>
                  <Input className="h-12" placeholder={t("placeholders.organization")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t("labels.subject")}
                </FormLabel>
                <FormControl>
                  <Input className="h-12" placeholder={t("placeholders.subject")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t("labels.message")}
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    rows={6}
                    placeholder={t("placeholders.message")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg font-semibold"
            disabled={isPending}
          >
            <Send className="h-5 w-5 mr-2" />
            {t("buttons.sendMessage")}
          </Button>
        </form>
      </Form>
    </div>
  );
}