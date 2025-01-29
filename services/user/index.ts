import { getCookie, deleteCookie, setCookie } from "cookies-next";

import {
  axiosInstance,
  TOKEN_EXPIRY_DATE_KEY,
  USER_INFO_KEY,
  USER_REFRESH_TOKEN_KEY,
  USER_TOKEN_KEY,
} from "../../constants";
import { Api } from "../../helpers/api"; // Assuming you have this import

import { AuthResponse, LoginPayload } from "./types";

export class UserService {
  // Set the base URLs using environment variables
  private static USER_API_BASE = process.env.NEXT_BASE_URL || "";
  private static AUTH_API_BASE = `/Authentication/`;

  public static saveToken(response: AuthResponse) {
    setCookie(USER_TOKEN_KEY, response.token);
    setCookie(USER_REFRESH_TOKEN_KEY, response.refreshToken);
    setCookie(TOKEN_EXPIRY_DATE_KEY, response.expiresAt);

    setCookie(
      USER_INFO_KEY,
      JSON.stringify({
        id: response.userId,
        circuitId: response.circuitId,
      }),
    );
  }

  public static logOut() {
    deleteCookie(USER_TOKEN_KEY);
    deleteCookie(USER_REFRESH_TOKEN_KEY);
    deleteCookie(USER_INFO_KEY);
    deleteCookie(TOKEN_EXPIRY_DATE_KEY);
  }

  public static async reAuthenticate() {
    const token = getCookie(USER_TOKEN_KEY);
    const refreshToken = getCookie(USER_REFRESH_TOKEN_KEY);

    try {
      const result = (await Api.post<AuthResponse>(
        this.AUTH_API_BASE + "Generate-Refresh-Token",
        {
          body: {
            currentJWT: token,
            refreshToken: refreshToken,
          },
        },
      )) as unknown as AuthResponse;

      this.saveToken(result);

      return result.token;
    } catch (e) {
      this.logOut();
    }

    return null;
  }

  public static async login(payload: LoginPayload) {
    return axiosInstance.post<AuthResponse>(
      `${this.AUTH_API_BASE}LoginLoyalty`,
      payload,
    );
  }

  public static getUser() {
    const info = getCookie(USER_INFO_KEY);

    if (!info) return null;

    return JSON.parse(info) as LoginPayload;
  }

  public static getCircuitId() {
    const info = getCookie(USER_INFO_KEY);

    if (!info) return null;

    return (JSON.parse(info) as any).circuitId;
  }
}
