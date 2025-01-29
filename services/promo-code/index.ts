import { axiosInstance } from "../../constants";
import { ApiResponse, PaginatedData } from "../../types";

import { PromoCodeBody, PromoCodeReq, PromoCodeRes } from "./types";
import { PromoCodePayload } from "./schema";

export class PromoCodeService {

    private static PROMO_CODES_BASE_API = `/PromoCodes`


    public static async getAllPromoCodes({ page, perPage }: PromoCodeBody) {
        return axiosInstance.get<ApiResponse<PaginatedData<PromoCodeRes>>>(
            `${this.PROMO_CODES_BASE_API}/ListAll`,
            {
                params: { page, perPage },
            },
        );
    }


    public static async createPromoCode(payload: PromoCodeReq) {


        return axiosInstance.post<ApiResponse<any>>(`${this.PROMO_CODES_BASE_API}/Create`, payload)
    }



    public static getAllPromoCodeTypes() {
        return axiosInstance.get<ApiResponse<any>>(this.PROMO_CODES_BASE_API + '/PromoCodeTypes')
    }

    public static getAllDiscountCodeTypes() {
        return axiosInstance.get<ApiResponse<string[]>>(this.PROMO_CODES_BASE_API + '/DiscountTypes')
    }

    public static async getPromoCodeById(promoCodeId: string) {
        console.log(promoCodeId);

        return axiosInstance.get(this.PROMO_CODES_BASE_API + `/GetById?promoCodeId=${promoCodeId}`)
    }


    public static updatePromoCode(editReq: any) {

        return axiosInstance.patch<ApiResponse<any>>(this.PROMO_CODES_BASE_API + `/${editReq.promoCodeId}/Update`, editReq)
    }

    // public static async getAllBenefitTypes() {
    //     return axiosInstance.get<ApiResponse<string[]>>(this.MEMBERSHIP_TIER_BASE_API + '/BenefitTypes')
    // }


    // public static async getAllItems() {
    //     const url = "https://api.reachcinema.io/api/v1/Items/POSListAll"
    //     return Api.get<ApiResponse<any>>(
    //         url
    //     )
    // }

    // public static async getTicketsByCinema(
    //     circuitId: string,
    //     cinemaId?: string,
    //     isLoyalty?: boolean,
    //     perPage: string = "1000"
    // ): Promise<ApiResponse<PaginatedData<Ticket>>> {
    //     console.log(circuitId);
    //     const queryParams = new URLSearchParams({
    //         perPage,
    //         circuitId,
    //         ...(cinemaId ? { cinemaId } : {}),
    //         ...(isLoyalty !== undefined ? { isLoyalty: String(isLoyalty) } : {})
    //     }).toString();

    //     const url = `https://api.reachcinema.io/api/v1/Tickets/ListTicketsFilter?${queryParams}`;
    //     // console.log('Constructed API URL:', url);

    //     return Api.get<ApiResponse<PaginatedData<Ticket>>>(url, {
    //         query: {
    //             perPage,
    //             circuitId,
    //             cinemaId,
    //             isLoyalty
    //         }
    //     });
    // }


    // public static async createMembershipTier(payload: any) {
    //     return axiosInstance.post<ApiResponse<any>>(this.MEMBERSHIP_TIER_BASE_API + "/Create",
    //         payload,
    //     );
    // }



}