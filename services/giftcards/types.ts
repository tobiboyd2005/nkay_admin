// export interface FormData {
//   startDate: Date | null;
//   endDate: Date | null;
// }

export interface CreateGiftcardBody {
  balance: number;
  clientName: string;
  clientEmail: string;
  senderName: string;
  senderEmail: string;
  sendInstantly: boolean;
  hasNumber: boolean;
  codeLength: number;
  openingMsg: string;
  personalMessage: string;
  sendDate: string;
  closingMsg: string;
  addRules: string[];
  includeValue: boolean;
  currencyEnum: number;
}

export interface GetGiftcardBody {
  DateFrom?: string;
  DateTo?: string;
  page?: number;
  perPage?: number;
}

export interface UseGetGiftCardsResult {
  giftCards: Giftcard[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

// export interface CreateGiftcardResp {
//   status: string;
//   statusText: string;
//   data: string;
//   errors: [
//     {
//       key: string;
//       errorMessages: [string];
//     },
//   ];
// }

export interface GetGiftcardBody {
  DateFrom?: string | undefined;
  DateTo?: string | undefined;
}

export interface Giftcard {
  id: string;
  voucherCode: string;
  clientName: string;
  status: string;
  balance: number;
}
