// services/login/schema.ts
import * as yup from "yup";

export const loginSchema = yup.object().shape({
  userName: yup.string().required("Email or Username is required"),
  password: yup.string().required("Password is required"),
});

export type LoginPayload = yup.InferType<typeof loginSchema>;
