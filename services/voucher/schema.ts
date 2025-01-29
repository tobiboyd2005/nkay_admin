import * as yup from "yup";

// Define the schema for a voucher
export const voucherSchema = yup.object({
  name: yup.string().required("Voucher Title is required"),
  price: yup.number().required("Price is required").default(0),
  value: yup.number().required("Value is required").default(0),
  type: yup
    .number()
    .oneOf([0, 1], "Select a valid voucher type") // Ensure only 0 or 1 are valid
    .required("Select voucher type")
    .transform((value, originalValue) => {
      // Transform the string values into the corresponding numeric values
      if (typeof originalValue === "string") {
        return originalValue === "Percentage"
          ? 0
          : originalValue === "Amount"
            ? 1
            : NaN;
      }

      return value;
    }),
  expiryDate: yup
    .date()
    .required("Set expiry date")
    .min(new Date(), "Expiry date cannot be in the past"),
  currencyEnum: yup.number().required("Select currency"),
  tickets: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required(),
        cinema: yup.string().required(),
        price: yup.number().required(),
      }),
    )
    .default([])
    .min(1, "Select at least one ticket"),
});

export const createVouchersSchema = yup.object().shape({
  voucherName: yup.string().required("Voucher Name is required"),
  codeQuantity: yup.number().required("Code Quantity is required"),
  clientName: yup.string().required("Client Name is Required"),
  clientEmail: yup.string().email().required("Client Email is required"),
  prefix: yup.string().optional(),
  suffix: yup.string().optional(),
  hasUpperCase: yup.boolean().optional(),
  hasLowerCase: yup.boolean().optional(),
  hasNumber: yup.boolean().optional(),
  sendInstantly: yup.boolean().optional(),
  openingMsg: yup.string().optional(),
  closingMsg: yup.string().optional(),
  includeValue: yup.boolean().optional(),
  addRules: yup.array().of(yup.string()).optional(),
});
