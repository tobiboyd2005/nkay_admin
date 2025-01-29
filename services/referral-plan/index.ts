import { axiosInstance } from "../../constants"
import { PaginatedData } from "../../types"
import { ApiResponse } from "../user/types"

export class ReferralPlanService {

    private static REFERAL_PLAN_BASE_URL = "/ReferralPlan"



    public static getAllReferralPlans(payload: { page: number, perPage: number }) {
        return axiosInstance.get<ApiResponse<PaginatedData<ReferralPlan>>>(`${this.REFERAL_PLAN_BASE_URL}/ListAll`, {
            params: payload
        })
    }

    public static createReferralPlan(payload: ReferralPayload) {
        return axiosInstance.post<ApiResponse<any>>(`${this.REFERAL_PLAN_BASE_URL}/Create`, payload)
    }


    public static async getReferralPlanById(referralPlanId: string) {

        return axiosInstance.get(this.REFERAL_PLAN_BASE_URL + `/${referralPlanId}`)
    }


    public static updateReferralPlan(referralPlanReq: any) {

        return axiosInstance.patch<ApiResponse<any>>(this.REFERAL_PLAN_BASE_URL + `/${referralPlanReq.referralPlanId}/Update`, referralPlanReq)
    }

}