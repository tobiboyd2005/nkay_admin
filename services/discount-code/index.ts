import { axiosInstance } from "../../constants";
import { ApiResponse, PaginatedData } from "../../types";

import {
  GetDiscountCodeBody,
  DiscountCode,
  CreateDiscountCodeRequest,
  DiscountTypes,
  GenerateDiscountRequest,
} from "./types";

export class DiscountCodeService {
  private static DISCOUNT_API_BASE = "/DiscountCodes";
  private static SOURCE_API_BASE = "/Sources";

  public static async getDiscountCodes({ page, perPage }: GetDiscountCodeBody) {
    return axiosInstance.get<ApiResponse<PaginatedData<DiscountCode>>>(
      `${this.DISCOUNT_API_BASE}/ListAllDiscount`,
      {
        params: { page, perPage },
      },
    );
  }

  public static async getDiscountCode(discountId: string) {
    return axiosInstance.get<ApiResponse<DiscountCode>>(
      `${this.DISCOUNT_API_BASE}/${discountId}/GetDiscountById`,
      { params: { discountId } },
    );
  }

  public static async createDiscountCode(request: CreateDiscountCodeRequest) {
    return axiosInstance.post<DiscountCode>(
      `${this.DISCOUNT_API_BASE}/CreateDiscountCode`,
      request,
    );
  }

  public static async createDiscountCodes(
    request: GenerateDiscountRequest,
    discountId: string,
  ) {
    return axiosInstance.patch<DiscountCode>(
      `${this.DISCOUNT_API_BASE}/${discountId}/CreateCodes`,
      request,
    );
  }

  public static async updateDiscountCode(
    discountId: string,
    request: Partial<CreateDiscountCodeRequest>,
  ) {
    return axiosInstance.patch<ApiResponse<DiscountCode>>(
      `${this.DISCOUNT_API_BASE}/${discountId}/UpdateDiscount`,
      request,
    );
  }

  public static async getDiscountCodeTypes() {
    const response = await axiosInstance.get<ApiResponse<DiscountTypes[]>>(
      `${this.DISCOUNT_API_BASE}/DiscountCodeTypes`,
    );

    return response.data.data;
  }

  public static async getSalesSources() {
    return axiosInstance.get<ApiResponse<DiscountTypes[]>>(
      `${this.SOURCE_API_BASE}/ListAll`,
    );
  }
}
