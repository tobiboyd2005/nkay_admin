import * as yup from "yup";

export const membersSchema = yup.object({
  firstName: yup.string().required("Firstname is required"),
  // password: yup.string().required("Password is required"),
  // confirmPassword: yup
  //   .string()
  //   .required("Confirm Password is required")
  //   .oneOf([yup.ref("password")], "Passwords must match"),
  lastName: yup.string().required("Lastname is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
  ageRange: yup.string().required("Age Range is required"),
  email: yup.string().email().required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  dateOfBirth: yup.string().required("Date of Birth is required"),
  membershipPlanId: yup.string().required("A plan must be selected"),
  referralCode: yup.string().required("Referral Code is required"),
  referralPlanId: yup.string().required("A referral plan must be selected"),
  source: yup.number().required("Source is required"),
  isActive: yup.boolean().required("status is required"),
  // spendAmount: yup.number().required("Enter spend amount"),
});

export type MemberPayload = yup.InferType<typeof membersSchema>;
