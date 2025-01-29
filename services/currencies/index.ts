import { axiosInstance } from "../../constants";
import { ApiResponse } from "../../types";

export class CurrencyService {
  private static CURRENCIES_API_BASE = "/Currencies";

  public static async getCurrencies() {
    return axiosInstance.get<ApiResponse<string[]>>(
      `${this.CURRENCIES_API_BASE}/ListAll`,
    );
  }
}
