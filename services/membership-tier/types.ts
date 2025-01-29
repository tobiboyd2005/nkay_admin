export interface TTierList {
    metaData: {
        page: number;
        perPage: number;
        total: number;
        totalPages: number;
    },
    pagedList: [
        {
            id: string;
            description: string;
            name: string;
            note: string;
            benefitType: string;
            earnPoint: number;
            spendAmount: number;
            circuitId: string;
            circuit: string;
            dateCreated: string;
            dateModified: string;
            plans: number;
            isActive: boolean | string;
        }
    ]
}
export type Ticket = {
    id: string;
    ticketId: string;
    ticketName: string;
    ticketGroupId: string;
    ticketGroup: string;
    shortName: string;
    isChild: boolean;
    isComplementary: boolean;
    isVoucherComplementary: boolean;
    tax: number;
    price: number;
    cinemaId: string;
    isActive: boolean;
    ticketChannel: string[];
    ticketPackageId?: string;
    sourceIds: string[];
    ticketPackage?: {
        items: Array<TicketItem>;
        itemParents: Array<TicketItemParent>;
        tickets: Array<Ticket>;
    };
    quantity?: number;
};

export type TicketItem = {
    price: number;
    itemId: string;
    quantity: number;
    name: string;
    itemGroupId?: string;
    id: string;
};

export type TicketItemParent = {
    price: number;
    itemParentId: string;
    quantity: number;
    name: string;
    itemGroupId?: string;
    id: string;
};
export interface TItemsRes {
    id: string;
    name: string;
    itemClassId: string;
    itemClass: string;
    itemGroupId: string;
    itemGroup: string;
    isPriceModifiable: boolean;
    serviceArea: string;
    quantity: number;
    unit: number;
    price: number;
    foodEaseItemId: string;
    itemSources: [
        {
            source: string,
            sourceId: string
        }
    ]

}
export interface TCreateTierReq {
    name: string;
    ticketId: string;
    description: string;
    note: string;
    benefitType: number | string;
    earnPoint: number;
    spendAmount: number;
    isActive: boolean | string;
    loyaltyItems: [
        {
            itemId: string;
            discount: number;
            limit: number;
            hasLimit: boolean;
        }
    ],
    loyaltyTickets: [
        {
            ticketId: string;
            discount: number;
            limit: number;
            hasLimit: boolean;
        }
    ],
    validDays: number[];
    limits: [
        {
            limit: number;
            useLimit: number;
        }
    ]
}


export interface TTier {
    id: string;
    description: string;
    name: string;
    note: string;
    benefitType: string;
    earnPoint: number;
    spendAmount: number;
    circuitId: string;
    circuit: string;
    dateCreated: string;
    dateModified: string;
    plans: number;
    isActive: boolean | string;
    loyaltyItems: [
        {
            itemId: string;
            discount: number;
            limit: number;
            hasLimit: boolean;
        }
    ],
    loyaltyTickets: [
        {
            ticketId: string;
            discount: number;
            limit: number;
            hasLimit: boolean;
        }
    ],
    validDays: number[];
    limits: [
        {
            limit: number;
            useLimit: number;
        }
    ]
}



export type MembershipTier = {
    id: string,
    description: string,
    name: string,
    note: string,
    benefitType: string,
    earnPoint: number,
    spendAmount: number,
    circuitId: string,
    circuit: string,
    dateCreated: string,
    dateModified: string,
    plans: 0,
    isActive: true,
    loyaltyItems: Array<loyaltyItemType>,
    loyaltyTickets: Array<loyaltyTicketTyoe>,
    validDays: Array<number>,
    limits: Array<limitTyoe>
}


type loyaltyItemType = {
    itemId: string,
    item: string,
    discount: number,
    limit: number,
    hasLimit: boolean
}


type loyaltyTicketTyoe = {
    ticketId: string,
    ticket: string,
    discount: number,
    limit: number,
    hasLimit: boolean
}


type limitTyoe = {
    limit: number,
    useLimit: number
}


export interface TierBody {
    page: number;
    perPage: number;
}