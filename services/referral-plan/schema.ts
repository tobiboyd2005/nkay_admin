import * as yup from "yup"


export const referralPlanSchema = yup.object().shape({
    name: yup.string().required("Please enter referral plan name"),
    description: yup.string().required("Please enter description"),
    validity: yup.string().required("Please select validity"),
    expiryDate: yup.string().required("Please select expiry date"),
    isBasePlan: yup.boolean().required(),
    benefitCategory: yup.object({
        referredUser: yup.boolean(),
        referrer: yup.boolean(),
    }).required(),
    currency: yup.string().required("Please select your currency"),
    referredUserFields: yup.object().when('benefitCategory.referredUser', {
        is: true,
        then: (schema) => schema.shape({
            percentage: yup.string().required("Benefit Type is required for Referred User."),
            value: yup.number().required("Max Value is required for Referred User."),
            maxBenefit: yup.number().required("Max Benefit is required for Referred User."),
            minimumOrder: yup.number().required("Minimum Order is required for Referred User."),
        }),
        otherwise: (schema) => schema.optional(),
    }),
    referrerFields: yup.object().when('benefitCategory.referrer', {
        is: true,
        then: (schema) => schema.shape({
            percentage: yup.string().required("Benefit Type is required for Referrer."),
            value: yup.number().required("Max Value is required for Referrer."),
            maxBenefit: yup.number().required("Max Benefit is required for Referrer."),
            minimumOrder: yup.number().required("Minimum Order is required for Referrer."),
        }),
        otherwise: (schema) => schema.optional(),
    }),
})

export type AlmostCompleteReferralPlanPayload = yup.InferType<typeof referralPlanSchema>;
