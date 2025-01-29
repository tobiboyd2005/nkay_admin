import { axiosInstance } from "../../constants";
import { ApiResponse } from "../../types";
import { PaginatedData } from "../../types";

import { GetGiftcardBody, Giftcard, CreateGiftcardBody } from "./types";

export class GiftcardsService {
  private static GIFT_API_BASE = "/Giftcards";

  // Fetch giftcards based on date range
  public static async getGiftCards({ DateFrom, DateTo }: GetGiftcardBody) {
    return axiosInstance.get<ApiResponse<PaginatedData<Giftcard>>>(
      `${this.GIFT_API_BASE}/ListAll?DateFrom=${DateFrom}&DateTo=${DateTo}`,
    );
  }

  public static async getGiftCard(giftcardId: string) {
    return axiosInstance.get<ApiResponse<Giftcard[]>>(
      `${this.GIFT_API_BASE}/GetById`,
      { params: { giftcardId: giftcardId } },
    );
  }

  public static async createGiftCard(giftCardData: CreateGiftcardBody) {
    return axiosInstance.post<ApiResponse<Giftcard>>(
      `${this.GIFT_API_BASE}/Create`,
      giftCardData,
    );
  }
}
