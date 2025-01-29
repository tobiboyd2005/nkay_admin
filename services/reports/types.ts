export type CinemaCircuitTypeRes = {
    status: number,
    statusText: string,
    data: [
        {
            id: string,
            name: string,
            address: string,
            circuitId: string,
            circuit: {
                id: string,
                name: string,
                headOfficeAddress: string,
                headOfficeStateId: string,
                headOfficeState: string,
                headOfficeCountryId: string,
                headOfficeCountry: string,
                dateCreated: string,
                dateModified: string,
                isActive: true
            },
            stateId: string,
            state: string,
            countryId: string,
            country: string,
            dateCreated: string,
            dateModified: string,
            isActive: true,
            isLive: true
        }
    ],
    errors: [
        {
            key: string,
            errorMessages: [
                string
            ]
        }
    ]
}



export type ReportTypeReq = {
    dateTime: string;
    timeSpan: number | null;
    cinemaId: number | null | any;
}

export type ReferralSummaryTypeReq = {
    dateFrom: string;
    dateTo: string;
}

export type ReferralReportByUserTypeReq = {
    dateFrom: string;
    dateTo: string;
    memberId: string;
}



export type ReportTypeRes = {
    status: number;
    statusText: string;
    data: [
        {
            id: string;
            day: string;
            ticketPrice: number;
            amount: number;
            isRefunded: boolean;
            refunded: number;
            dateCreated: string;
        }
    ],
    errors: [
        {
            key: string;
            errorMessages: [
                string
            ]
        }
    ]
}


export type ReferralSummaryTypeRes = {
    status: number;
    statusText: string;
    data: [
        {
            firstName: string,
            lastName: string,
            phoneNumber: string,
            orderCount: number,
            totalAmount: number
        }
    ],
    errors: [
        {
            key: string;
            errorMessages: [
                string
            ]
        }
    ]
}


export type ReferralReportByUserTypeRes = {
    status: number;
    statusText: string;
    data: [
        {
            customerName: string,
            dateCreated: string,
            orderId: string,
            orderSource: number,
            orderTotal: number
        }
    ],
    errors: [
        {
            key: string;
            errorMessages: [
                string
            ]
        }
    ]
}




export type SoldVouchersTypeReq = ReportTypeReq

export type SoldVouchersTypeRes = {
    status: number;
    statusText: string;
    data: [
        {
            day: number;
            cost: number;
            price: number;
            value: number;
            type: number;
            isRefunded: boolean;
            refunded: number;
        }
    ],
    errors: [
        {
            key: string;
            errorMessages: [
                string
            ]
        }
    ]
}



export type TDiscountCodeReportRes = {
    result: {
        discountCode: string;
        discountCodeValue: number;
        afterDiscountAmount: number;
        beforeDiscountAmount: number;
        orderId: string;
        dateCreated: string;
        dateUsed: string;
        userId: string;
        user: string;
    }[],
    paramFilter: {
        dateFrom: string;
        dateTo: string;
        cinema: string;
        dateTimeGenerated: string;
        currency: string;
        vendor: string;
    },
}

export type TDiscountCodeReportReq = {
    dateFrom: string;
    dateTo: string;
    cinemaId: string;

}