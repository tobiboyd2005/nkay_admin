import * as yup from "yup";

import { voucherSchema } from "./schema";

// export interface Voucher {
//   voucherCode: string;
//   clientName: string;
//   status: string;
//   balance: number;
// }

export type Voucher = {
  id: string;
  name: string;
  price: number;
  redeemed: number;
  sold: number;
  value: number;
  type: string;
  expiryDate: string;
  dateCreated: string;
  isActive: boolean;
  currencyEnum: number;
  codes: VoucherCode[];
  tickets: string[];
};

export type Ticket = {};

export type VoucherCode = {
  voucherCode: any;
  id: string;
  clientName: string;
  clientEmail: string;
  code: string;
  isActive: boolean;
  status: string;
};

export type CreateVoucherFormType = yup.InferType<typeof voucherSchema>;

export type PaginationQuery = {
  page: number;
  perPage: number;
};

export type ListVoucherPayload = PaginationQuery & {
  queryString: string;
};

export type CreateVoucherPayload = Omit<
  yup.InferType<typeof voucherSchema>,
  "tickets"
> & {
  tickets: string[];
};

export type VoucherType = {
  id: number;
  name: string;
};

export interface VoucherDetails {
  id: string;
  name: string;
  price: number;
  redeemed: number;
  sold: number;
  value: number;
  type: string;
  expiryDate: string;
  dateCreated: string;
  isActive: boolean;
  currencyEnum: number;
  codes: VoucherCode[];
  tickets: VoucherTicket[];
}

export interface VoucherTicket {
  id: string;
  cinemaId: string;
  cinema: string;
  seatClassId: string;
  seatClass: string;
  ticketName: string;
  ticketGroup: string;
  ticketGroupId: string;
  shortName: string;
  ticketSources: {
    source: string;
    sourceId: string;
  }[];
  price: number;
  isActive: boolean;
}

export interface GenerateVoucherRequest {
  codeQuantity: number;
  clientName: string;
  clientEmail: string;
  prefix: string;
  suffix: string;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
  sendInstantly: boolean;
  openingMsg: string;
  closingMsg: string;
  includeValue: boolean;
  addRules: string[];
}
