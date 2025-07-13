// lib/payment_data.ts
export interface PaymentMethod {
  name_en: string;
  name_fr: string;
  name_es: string;
  type: string;
  details_en: string[];
  details_fr: string[];
  details_es: string[];
}

export const paymentMethods: PaymentMethod[] = [
  {
    name_en: "Airtel Money",
    name_fr: "Airtel Money",
    name_es: "Airtel Money",
    type: "mobile-money",
    details_en: [
      "Phone Number: +243-XXX-XXX-XXXX",
      "Account Name: ALLEN+ Foundation",
      "Instructions: Dial *500# and select 'Send Money'. Enter the phone number and amount, then confirm with your PIN.",
    ],
    details_fr: [
      "Numéro de téléphone : +243-XXX-XXX-XXXX",
      "Nom du compte : Fondation ALLEN+",
      "Instructions : Composez *500# et sélectionnez 'Envoyer de l'argent'. Entrez le numéro de téléphone et le montant, puis confirmez avec votre code PIN.",
    ],
    details_es: [
      "Número de teléfono: +243-XXX-XXX-XXXX",
      "Nombre de la cuenta: Fundación ALLEN+",
      "Instrucciones: Marca *500# y selecciona 'Enviar dinero'. Ingresa el número de teléfono y el monto, luego confirma con tu PIN.",
    ],
  },
  {
    name_en: "M-Pesa",
    name_fr: "M-Pesa",
    name_es: "M-Pesa",
    type: "mobile-money",
    details_en: [
      "Phone Number: +243-XXX-XXX-XXXX",
      "Account Name: ALLEN+ Foundation",
      "Instructions: Dial *150*00# and select 'Send Money'. Enter the phone number, amount, and confirm with your PIN.",
    ],
    details_fr: [
      "Numéro de téléphone : +243-XXX-XXX-XXXX",
      "Nom du compte : Fondation ALLEN+",
      "Instructions : Composez *150*00# et sélectionnez 'Envoyer de l'argent'. Entrez le numéro de téléphone, le montant, et confirmez avec votre code PIN.",
    ],
    details_es: [
      "Número de teléfono: +243-XXX-XXX-XXXX",
      "Nombre de la cuenta: Fundación ALLEN+",
      "Instrucciones: Marca *150*00# y selecciona 'Enviar dinero'. Ingresa el número de teléfono, el monto y confirma con tu PIN.",
    ],
  },
  {
    name_en: "Orange Money",
    name_fr: "Orange Money",
    name_es: "Orange Money",
    type: "mobile-money",
    details_en: [
      "Phone Number: +243-XXX-XXX-XXXX",
      "Account Name: ALLEN+ Foundation",
      "Instructions: Dial #144# and select 'Transfer Money'. Enter the phone number, amount, and confirm with your PIN.",
    ],
    details_fr: [
      "Numéro de téléphone : +243-XXX-XXX-XXXX",
      "Nom du compte : Fondation ALLEN+",
      "Instructions : Composez #144# et sélectionnez 'Transférer de l'argent'. Entrez le numéro de téléphone, le montant, et confirmez avec votre code PIN.",
    ],
    details_es: [
      "Número de teléfono: +243-XXX-XXX-XXXX",
      "Nombre de la cuenta: Fundación ALLEN+",
      "Instrucciones: Marca #144# y selecciona 'Transferir dinero'. Ingresa el número de teléfono, el monto y confirma con tu PIN.",
    ],
  },
  {
    name_en: "Africell",
    name_fr: "Africell",
    name_es: "Africell",
    type: "mobile-money",
    details_en: [
      "Phone Number: +243-XXX-XXX-XXXX",
      "Account Name: ALLEN+ Foundation",
      "Instructions: Dial *123# and select 'Send Money'. Enter the phone number, amount, and confirm with your PIN.",
    ],
    details_fr: [
      "Numéro de téléphone : +243-XXX-XXX-XXXX",
      "Nom du compte : Fondation ALLEN+",
      "Instructions : Composez *123# et sélectionnez 'Envoyer de l'argent'. Entrez le numéro de téléphone, le montant, et confirmez avec votre code PIN.",
    ],
    details_es: [
      "Número de teléfono: +243-XXX-XXX-XXXX",
      "Nombre de la cuenta: Fundación ALLEN+",
      "Instrucciones: Marca *123# y selecciona 'Enviar dinero'. Ingresa el número de teléfono, el monto y confirma con tu PIN.",
    ],
  },
  {
    name_en: "Bank Transfer",
    name_fr: "Virement bancaire",
    name_es: "Transferencia bancaria",
    type: "bank",
    details_en: [
      "Bank Name: Equity Bank DRC",
      "Account Number: XXXX-XXXX-XXXX-XXXX",
      "Account Name: ALLEN+ Foundation",
      "SWIFT Code: EQBLCDKI",
      "Instructions: Use your bank’s online banking or visit a branch to initiate a transfer. Include your name and 'Donation' in the reference.",
    ],
    details_fr: [
      "Nom de la banque : Equity Bank DRC",
      "Numéro de compte : XXXX-XXXX-XXXX-XXXX",
      "Nom du compte : Fondation ALLEN+",
      "Code SWIFT : EQBLCDKI",
      "Instructions : Utilisez les services bancaires en ligne de votre banque ou rendez-vous dans une agence pour initier un virement. Incluez votre nom et 'Don' dans la référence.",
    ],
    details_es: [
      "Nombre del banco: Equity Bank DRC",
      "Número de cuenta: XXXX-XXXX-XXXX-XXXX",
      "Nombre de la cuenta: Fundación ALLEN+",
      "Código SWIFT: EQBLCDKI",
      "Instrucciones: Usa la banca en línea de tu banco o visita una sucursal para iniciar una transferencia. Incluye tu nombre y 'Donación' en la referencia.",
    ],
  },
];