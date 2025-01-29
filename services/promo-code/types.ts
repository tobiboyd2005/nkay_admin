export interface PromoCodeReq {
    id?: string
    value: number;
    type: number;
    useLimit: number;
    code: string;
    validDays: number[] | any;
    discountType: number | string;
    expiryDate: string;
    // hasUpperCase: boolean;
    // hasLowerCase: boolean;
    // hasNumber: boolean;
    hasUseLimit: boolean;
}

export interface PromoCodeBody {
    page: number;
    perPage: number;
}



export interface PromoCodeRes {

    metaData: {},
    pagedList: [

        {
            id: string;
            cinemaId: string;
            cinema: string;
            userId: string;
            user: string;
            value: number;
            type: string;
            validDays: number[];
            discountType: string;
            expiryDate: string;
            useLimit: number;
            code: string;
            isActive: boolean;
        }
    ]
}

export interface TPromoCode {
    id: string;
    cinemaId: string;
    cinema: string;
    userId: string;
    user: string;
    value: number;
    type: string;
    discountType: string;
    validDays: number[];
    expiryDate: string;
    useLimit: number;
    code: string;
    hasUseLimit: boolean;
    isActive: boolean;
}