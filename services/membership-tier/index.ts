import { API_URL_V1, axiosInstance } from '../../constants';
import { Api } from '../../helpers/api';
import { PaginatedData } from '../../types';
import { ApiResponse } from '../user/types';
import { TCreateTierReq, TTier } from './../members/types';
import { MembershipTier, Ticket, TierBody, TItemsRes } from './types';
export class MembershipTierService {

    private static MEMBERSHIP_TIER_BASE_API = `/MembershipTiers`

    public static async getAllMembershipTiers({ page, perPage }: TierBody) {
        return axiosInstance.get<ApiResponse<PaginatedData<MembershipTier>>>(
            `${this.MEMBERSHIP_TIER_BASE_API}/ListAll`,
            {
                params: { page, perPage },
            },
        );
    }


    public static async getMembershipTierById(tierId: string) {
        return axiosInstance.get(this.MEMBERSHIP_TIER_BASE_API + `/${tierId}`)
    }
    

    public static updateTier(editReq: TCreateTierReq, membershipTierId: string) {

        return axiosInstance.patch<ApiResponse<any>>(this.MEMBERSHIP_TIER_BASE_API + `/${membershipTierId}/Update`, editReq)
    }

    public static async getAllBenefitTypes() {
        return axiosInstance.get<ApiResponse<string[]>>(this.MEMBERSHIP_TIER_BASE_API + '/BenefitTypes')
    }


    public static async getAllItems() {
        const url = "https://api.reachcinema.io/api/v1/Items/POSListAll"
        return Api.get<ApiResponse<any>>(
            url
        )
    }

    public static async getTicketsByCinema(
        circuitId: string,
        cinemaId?: string,
        isLoyalty?: boolean,
        perPage: string = "1000"
    ): Promise<ApiResponse<PaginatedData<Ticket>>> {
        const queryParams = new URLSearchParams({
            perPage,
            circuitId,
            ...(cinemaId ? { cinemaId } : {}),
            ...(isLoyalty !== undefined ? { isLoyalty: String(isLoyalty) } : {})
        }).toString();

        const url = `https://api.reachcinema.io/api/v1/Tickets/ListTicketsFilter?${queryParams}`;

        return Api.get<ApiResponse<PaginatedData<Ticket>>>(url, {
            query: {
                perPage,
                circuitId,
                cinemaId,
                isLoyalty
            }
        });
    }


    public static async createMembershipTier(payload: any) {
        return axiosInstance.post<ApiResponse<any>>(this.MEMBERSHIP_TIER_BASE_API + "/Create",
            payload,
        );
    }





}