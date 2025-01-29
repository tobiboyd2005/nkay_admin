// types/productForm.ts

import { Product } from "@prisma/client";

export type FormProps = {
  name: string;
  label?: string;
  labelClass?: string;
  errorClass?: string;
  className?: string;
  containerClass?: string;
};

export type ProductFormProps = {
  product?: Product | null;
  className?: string; // Optional: You may use this to style the whole form
};

// Schema for form values used in validation
export type ProductFormValues = {
  name: string;
  priceInNaira: number;
  description: string;
  file?: File | null;
  image?: File | null;
};
