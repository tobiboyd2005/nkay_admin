import * as yup from "yup";

export const membershipTierSchema = yup.object({
    name: yup.string().required("Please enter tier name"),
    description: yup.string().required("Please enter tier description"),
    // ticketId: yup.string().required("Please select ticket"),
    note: yup.string().nullable(),
    benefitType: yup.number().required("Please select benefit type"),
    earnPoint: yup.number(),
    spendAmount: yup.number(),
    isActive: yup.boolean().required(),
    loyaltyItems: yup.array().of(yup.object().shape({
        itemId: yup.string(),
        discount: yup.number(),
        limit: yup.number(),
        hasLimit: yup.boolean()
    })),
    validDays: yup.array().of(yup.string()),
    loyaltyTickets: yup.array().of(yup.object().shape({
        ticketId: yup.string(),
        discount: yup.number(),
        limit: yup.number(),
        hasLimit: yup.boolean()

    })),
    limits: yup.array().of(yup.object().shape({
        limit: yup.number(),
        useLimit: yup.number(),
    })),
});

export type MembershipTierPayload = yup.InferType<typeof membershipTierSchema>;
