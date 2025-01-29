import * as yup from "yup";

export const createDiscountCodeSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  value: yup.number().integer().positive().required("Value is required"),
  type: yup.number().integer().required("Type is required"),
  expiryDate: yup.string().optional(),
  daysToExpiry: yup.number().optional(),
  currencyEnum: yup.number().integer().required("Currency is required"),
  isActive: yup.boolean().required("Status is required"),
  salesSources: yup
    .array()
    .of(yup.string())
    .required("Sales sources are required"),
  redeemableSources: yup
    .array()
    .of(yup.string())
    .required("Redeemable sources are required"),
  expiryType: yup.number().integer().required("Expiry type is required"),
});

export const createDiscountCodesSchema = yup.object().shape({
  discountName: yup.string().required("Discount Name is required"),
  codeQuantity: yup.number().required("Code Quantity is required"),
  clientName: yup.string().required("Client Name is Required"),
  clientEmail: yup.string().email().required("Client Email is required"),
  hasUpperCase: yup.boolean().optional(),
  hasLowerCase: yup.boolean().optional(),
  hasNumber: yup.boolean().optional(),
  sendInstantly: yup.boolean().optional(),
  openingMsg: yup.string().optional(),
  closingMsg: yup.string().optional(),
  personalMessage: yup.string().optional(),
  includeValue: yup.boolean().optional(),
  currencyEnum: yup.number().optional(),
  addRules: yup.array().of(yup.string()).optional(),
});
