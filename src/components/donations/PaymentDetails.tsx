// components/donations/PaymentDetails.tsx
"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditCard, ChevronDown, Shield, Lock, CheckCircle } from "lucide-react";
import { paymentMethods, PaymentMethod } from "@/lib/payment_data";

export function PaymentDetails() {
  const t = useTranslations("DonationPage.PaymentDetails");
  const locale = useLocale();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  // Select name and details based on locale
  const getPaymentMethodName = (method: PaymentMethod) => {
    switch (locale) {
      case "fr":
        return method.name_fr;
      case "es":
        return method.name_es;
      default:
        return method.name_en;
    }
  };

  const getPaymentMethodDetails = (method: PaymentMethod) => {
    switch (locale) {
      case "fr":
        return method.details_fr;
      case "es":
        return method.details_es;
      default:
        return method.details_en;
    }
  };

  return (
    <section id="payment-details" className="py-16 bg-card">
      <Card className="max-w-3xl mx-auto border dark:border-foreground/30 shadow-xl bg-card/60 rounded-2xl">
        <CardHeader className="p-6 bg-gradient-to-r from-green-50/80 to-teal-50/80 dark:from-green-700/80 dark:to-teal-700/80 rounded-t-2xl">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-fit bg-green-500 rounded-lg p-1 flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">{t("title")}</CardTitle>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{t("description")}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Shield className="h-4 w-4 text-green-500" />
            <span className="text-xs font-medium">{t("secure")}</span>
            <Lock className="h-4 w-4 text-green-500" />
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-4">
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.name_en} // Use name_en as a stable key
                className={`border rounded-lg overflow-hidden ${selectedPaymentMethod === method.name_en ? "border-green-500 bg-green-50/30" : "border-foreground/20"}`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedPaymentMethod(selectedPaymentMethod === method.name_en ? null : method.name_en)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="text-sm font-medium">{getPaymentMethodName(method)}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${selectedPaymentMethod === method.name_en ? "rotate-180" : ""}`}
                  />
                </button>
                {selectedPaymentMethod === method.name_en && (
                  <div className="p-4 bg-card border-t border-gray-200">
                    {getPaymentMethodDetails(method).map((detail, index) => (
                      <p key={index} className="text-sm text-gray-600 dark:text-gray-300 mb-2">{detail}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-xs text-gray-600 dark:text-gray-300">{t("trust.ssl")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-xs text-gray-600 dark:text-gray-300">{t("trust.taxDeductible")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="h-4 w-4 text-green-500" />
              <span className="text-xs text-gray-600 dark:text-gray-300">{t("trust.pci")}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}