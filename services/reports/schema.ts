import * as yup from "yup"

export const reportSchema = yup.object({
    dateTime: yup.string(),
    timeSpan: yup.number(),
    cinemaId: yup.string(),
})


export const referralSummaryReportSchema = yup.object({
    dateFrom: yup.string(),
    dateTo: yup.string(),
})

export const referralReportByUserSchema = yup.object({
    dateFrom: yup.string(),
    dateTo: yup.string(),
})


export const TDiscountCodeReportSchema = yup.object({
    dateFrom: yup.string(),
    dateTo: yup.string(),
    cinemaId: yup.string(),
})

export type reportPayload = yup.InferType<typeof reportSchema>
export type ReferralSummaryReportPayload = yup.InferType<typeof referralSummaryReportSchema>
export type ReferralReportByUserPayload = yup.InferType<typeof referralReportByUserSchema>



export type DiscountCodePayload = yup.InferType<typeof TDiscountCodeReportSchema>
