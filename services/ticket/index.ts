import { API_URL_V1, axiosInstance } from "../../constants";
import { ApiResponse, PaginatedData } from "../../types";
import { VoucherTicket } from "../voucher/types";

export class TicketService {
  private static TICKET_API_BASE = `${API_URL_V1}/Tickets/`;

  public static async getTickets(payload: {
    circuitId: string;
    ticketGroupId?: string;
    cinemaId?: string;
    page?: number;
    perPage?: number;
    isLoyalty?: boolean;
  }) {
    return axiosInstance.get<ApiResponse<PaginatedData<VoucherTicket>>>(
      `${this.TICKET_API_BASE}ListTicketsFilter`,
      {
        params: payload,
      },
    );
  }
}
