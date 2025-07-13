// app/[locale]/contact/mutation.ts
import { useMutation } from "@tanstack/react-query";
import { sendContactEmail } from "./action";
import { useToast } from "@/components/ui/use-toast";
import { useTranslations } from "next-intl";


export function useContactFormMutation() {
  const tToast = useTranslations("ContactPage.Form.toast");
  const { toast } = useToast();

  return useMutation({
    mutationFn: sendContactEmail,
    onSuccess: (result) => {
      if (result.success) {
        toast({
          title: tToast("success.title"),
          description: tToast("success.description"),
        });
      } else {
        toast({
          title: tToast("error.title"),
          description: result.error || tToast("error.description"),
          variant: "destructive",
        });
      }
    },
    onError: () => {
      toast({
        title: tToast("error.title"),
        description: tToast("error.description"),
        variant: "destructive",
      });
    },
  });
}