export interface DiscountCode {
  id: string;
  name: string;
  value: number;
  type: number;
  expiryDate: string;
  dateCreated: string;
  isActive: boolean;
  currencyEnum: number;
  codes: codes[];
  codesCount: number;
  usedCodes: number;
}

export interface codes {
  id: string;
  clientName: string;
  clientEmail: string;
  code: string;
  isActive: boolean;
  type: string;
  isUsed: boolean;
}

export interface GetDiscountCodeBody {
  page: number;
  perPage: number;
}

export interface DiscountTypes {
  id: string;
  name: string;
}

export interface CreateDiscountCodeRequest {
  name: string;
  value: number;
  type: number;
  expiryDate: string;
  currencyEnum: number;
  isActive: boolean;
  salesSources: string[];
  redeemableSources: string[];
  expiryType: number;
}

// export interface CreateDiscountCodeResponse {
//   name: string;
//   value: number;
//   type: number;
//   expiryDate: string;
//   daysToExpiry: number;
//   currencyEnum: number;
//   isActive: boolean;
//   salesSources: string[];
//   redeemableSources: string[];
//   expiryType: number;
// }

// Request body interface for the API call
export interface GenerateDiscountRequest {
  codeQuantity: number;
  clientName: string;
  clientEmail: string;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
  sendInstantly: boolean;
  openingMsg: string;
  closingMsg: string;
  includeValue: boolean;
  currencyEnum: number;
  addRules: string[];
}
