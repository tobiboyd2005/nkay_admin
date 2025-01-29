// services/product/schema.ts
import * as yup from "yup";

// Define the validation schema for the product form
export const productSchema = yup.object().shape({
  name: yup
    .string()
    .required("Product name is required")
    .min(3, "Product name must be at least 3 characters long"),

  priceInNaira: yup
    .number()
    .required("Price is required")
    .min(1, "Price must be greater than zero")
    .typeError("Price must be a valid number"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long"),

  file: yup
    .mixed()
    .required("File is required")
    .test("fileSize", "File size is too large", (value) => {
      // Adjust the file size check as needed (example: 5MB max)
      return value ? value.size <= 5 * 1024 * 1024 : true;
    }),

  image: yup
    .mixed()
    .required("Image is required")
    .test("fileSize", "Image size is too large", (value) => {
      // Adjust the image size check as needed (example: 5MB max)
      return value ? value.size <= 5 * 1024 * 1024 : true;
    }),
});

// Define the TypeScript type based on the schema
export type ProductPayload = yup.InferType<typeof productSchema>;
