import { axiosInstance } from "../../constants";
import { ApiResponse } from "../../types";

import { CinemaCircuitTypeRes, ReferralReportByUserTypeReq, ReferralReportByUserTypeRes, ReferralSummaryTypeReq, ReferralSummaryTypeRes, ReportTypeReq, ReportTypeRes, SoldVouchersTypeRes, TDiscountCodeReportReq, TDiscountCodeReportRes } from "./types";

export class ReportsService {

  private static REPORTS_BASE_API = `/Reports`
  private static REFERRAL_REPORTS_BASE_API = `/ReferralPlanReports`


  public static async getCinemasByCircuit(circuitId?: string) {
    // Construct the URL with the query parameter if `circuitId` is provided
    // const url = `/Cinemas/ListAllByCircuit${circuitId ? `?circuitId=${circuitId}` : ''}`;
    const url = `https://api.reachcinema.io/api/v1/Cinemas/ListAllByCircuit${circuitId ? `?circuitId=${circuitId}` : ''}`;

    return axiosInstance.get<CinemaCircuitTypeRes>(url);
  }

  // public static async getAllMembershipTiers(page: string = "1", perPage: string = "10", query?: string) {
  //     const queryParams = new URLSearchParams({
  //         page,
  //         perPage,
  //         ...(query ? { query } : {})
  //     }).toString();
  //     return axiosInstance.get<ApiResponse<PaginatedData<MembershipTier>>>(
  //         `${this.MEMBERSHIP_TIER_BASE_API}/ListAll?${queryParams}`
  //     )
  // }

  // public static async getAllBenefitTypes() {
  //     return axiosInstance.get<ApiResponse<string[]>>(this.MEMBERSHIP_TIER_BASE_API + '/BenefitTypes')
  // }

  public static async getReferralSummaryReport(payload: ReferralSummaryTypeReq ) {
    return axiosInstance.get<ApiResponse<ReferralSummaryTypeRes>>(
      `${this.REFERRAL_REPORTS_BASE_API}/GetReferralSummaryReport?dateFrom=${payload.dateFrom}&dateTo=${payload.dateTo}`,
    );
  }

  public static async getReferralReportByUser(payload: ReferralReportByUserTypeReq) {
    return axiosInstance.get<ApiResponse<ReferralReportByUserTypeRes>>(
      `${this.REFERRAL_REPORTS_BASE_API}/GetReferralReportByUser?dateFrom=${payload.dateFrom}&dateTo=${payload.dateTo}&memberId=${payload.memberId}`,
    );
  }

  public static async getVoucherReport(payload: ReportTypeReq) {
    return axiosInstance.get<ApiResponse<ReportTypeRes>>(
      `${this.REPORTS_BASE_API}/GetVoucherReports?dateTime=${payload.dateTime}&timeSpan=${payload.timeSpan}&cinemaId=${payload.cinemaId}`,
    );
  }

  public static async getVoucherSalesReport(payload: ReportTypeReq) {
    return axiosInstance.get<ApiResponse<SoldVouchersTypeRes>>(
      `/Vouchers/GetSoldVoucherReports?dateTime=${payload.dateTime}&timeSpan=${payload.timeSpan}&cinemaId=${payload.cinemaId}`,
    );
  }

  public static async getDiscountCodeReport(payload: TDiscountCodeReportReq) {
    return axiosInstance.get<ApiResponse<TDiscountCodeReportRes>>(
      `${this.REPORTS_BASE_API}/GetDiscountCodesReport?DateFrom=${payload.dateFrom}&DateTo=${payload.dateTo}&CinemaId=${payload.cinemaId}`,
    );
  }



  // public static async getVoucherReport(payload: ReportTypeReq) {
  //     return axiosInstance.get<ApiResponse<Giftcard[]>>(
  //         `${this.GIFT_API_BASE}/ListAll?DateFrom=${DateFrom}&DateTo=${DateTo}`,
  //       );
  //     return axiosInstance.get<ApiResponse<ReportTypeRes>>(
  //         `/Reports/GetVoucherReports`, {
  //         params: {
  //             dateTime: payload.dateTime,
  //             timeSpan: payload.timeSpan,
  //             cinemaId: payload.cinemaId
  //         }
  //     }
  //     );
  // }






}