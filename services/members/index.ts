import { Member, MemberBody, ReferralPlanBody, TCreateMemberReq, TMember, TMemberList } from "./types";
import { Api } from "../../helpers/api";
import { ApiResponse, PaginatedData } from "../../types";
import { API_URL_V1, axiosInstance } from "../../constants";
import { MemberPayload } from "./schema";



export class MemberService {
    private static LOYALTY_BASE_API = `/Members`;
    private static REFERRAL_PLAN_BASE_API = `/ReferralPlan`;

    public static async getAllMembers({ page, perPage }: MemberBody) {
        return axiosInstance.get<ApiResponse<PaginatedData<Member>>>(
            `${this.LOYALTY_BASE_API}/ListAll`,
            {
                params: { page, perPage },
            },
        );
    }


    public static async createMember(payload: MemberPayload) {
        // return Api.post<ApiResponse<any>>(`https://api.reachcinema.io/api/v1/Members/` + "Create", {
        //     body: payload,
        // });

        return axiosInstance.post<ApiResponse<any>>(`${this.LOYALTY_BASE_API}/Create`, payload)
    }


    public static async getAllReferralPlans({ page, perPage }: ReferralPlanBody) {
        return axiosInstance.get<ApiResponse<PaginatedData<ReferralPlan>>>(
            `${this.REFERRAL_PLAN_BASE_API}/ListAll`,
            {
                params: { page, perPage },
            },
        );
    }




    public static getMemberById(memberId: string) {
        return axiosInstance.get<ApiResponse<any>>(
            this.LOYALTY_BASE_API + `/${memberId}`
        )
    }



    public static editMember(editReq: TCreateMemberReq, memberId: string) {
        console.log(editReq, memberId);

        return axiosInstance.patch<ApiResponse<any>>(
            this.LOYALTY_BASE_API + `/${memberId}/Update`,

            editReq

        )
    }


    public static getAllSources() {
        return axiosInstance.get<ApiResponse<string[]>>(`${this.LOYALTY_BASE_API}/SignUpSources`)
    }






}