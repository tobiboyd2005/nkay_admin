import { API_URL_V1, axiosInstance } from "../../constants";
import { ApiResponse, PaginatedData } from "../../types";

import {
  CreateVoucherPayload,
  GenerateVoucherRequest,
  Voucher,
  VoucherDetails,
  VoucherType,
} from "./types";

export class VoucherService {
  private static VOUCHER_API_BASE = `${API_URL_V1}/Vouchers/`;
  // private static TICKETS_API_BASE = `${API_URL_V1}/Tickets/`;

  // Fetch list of vouchers based on payload
  public static async getVouchers(payload: {
    page: number;
    perPage: number;
    totalPages?: number;
    queryString?: string;
  }) {
    return axiosInstance.get<ApiResponse<PaginatedData<Voucher>>>(
      `${this.VOUCHER_API_BASE}ListAll`,
      {
        params: payload,
      },
    );
  }

  public static async getVoucher(voucherId: string) {
    return axiosInstance.get<ApiResponse<VoucherDetails>>(
      `${this.VOUCHER_API_BASE}GetById`,
      { params: { voucherId } },
    );
  }

  // Create a new voucher with given payload
  public static async createVoucher(payload: CreateVoucherPayload) {
    return axiosInstance.post<ApiResponse<Voucher>>(
      `${this.VOUCHER_API_BASE}Create`,
      payload,
    );
  }

  static async getVoucherTypes(): Promise<VoucherType[]> {
    const response = await axiosInstance.get<ApiResponse<VoucherType[]>>(
      `${this.VOUCHER_API_BASE}GetTypes`,
    );

    return response.data.data;
  }

  public static async createVouchers(
    request: GenerateVoucherRequest,
    voucherId: string,
  ) {
    return axiosInstance.patch<Voucher>(
      `${this.VOUCHER_API_BASE}${voucherId}/CreateCodes`,
      request,
    );
  }

  // public static async getTickets(payload: {
  //   circuitId: string;
  //   ticketGroupId?: string;
  //   cinemaId?: string;
  //   page?: number;
  //   perPage?: number;
  //   isLoyalty?: boolean;
  // }) {
  //   return axiosInstance.get<ApiResponse<VoucherTicket>>(
  //     `${this.TICKETS_API_BASE}ListTicketsFilter`,
  //     {
  //       params: payload,
  //     },
  //   );
  // }
}
