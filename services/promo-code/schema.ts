import * as yup from "yup"

export const promoCodeSchema = yup.object({
    value: yup.number().required(" Please enter promo code amount"),
    type: yup.number().required(" Please select promo code type"),
    discountType: yup.number().required(" Please select discount type"),
    useLimit: yup
        .number().when("hasUseLimit", {
            is: false,
            then: (schema) => schema.required(),
        }), code: yup.string().required(" Please enter valid promo code"),
    validDays: yup.array().of(yup.number()).required("Please select valid days"),
    expiryDate: yup.string().required("Please select expiry date"),
    // hasUpperCase: yup.boolean().required(),
    // hasLowerCase: yup.boolean().required(),
    // hasNumber: yup.boolean().required(),
    hasUseLimit: yup.boolean().required()
})

export type PromoCodePayload = yup.InferType<typeof promoCodeSchema>;
