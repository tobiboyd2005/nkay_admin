import * as yup from "yup";
export const giftcardsSchema = yup.object({
  startDate: yup.date().nullable().optional(),
  endDate: yup.date().nullable().optional(),
});

export const createGiftcardsSchema = yup.object({
  clientName: yup
    .string()
    .required("Client Name is required")
    .min(2, "Client Name must be at least 2 characters"),
  clientEmail: yup
    .string()
    .email("Invalid email address")
    .required("Client Email is required"),
  balance: yup
    .number()
    .required("Balance is required")
    .min(0, "Balance must be a positive number"),
  senderName: yup
    .string()
    .required("Sender Name is required")
    .min(2, "Sender Name must be at least 2 characters"),
  senderEmail: yup
    .string()
    .email("Invalid email address")
    .required("Sender Email is required"),
  currencyEnum: yup
    .number()
    .required("Currency is required")
    .min(0, "Currency is invalid"),
  openingMsg: yup
    .string()
    .max(500, "Opening message must not exceed 500 characters"),
  closingMsg: yup
    .string()
    .max(500, "Closing message must not exceed 500 characters"),
  personalMessage: yup
    .string()
    .max(500, "Personal message must not exceed 500 characters"),
});
