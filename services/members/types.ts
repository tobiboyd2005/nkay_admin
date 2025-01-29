import { PaginationQuery } from "../../types";

export type TCreateMemberReq = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    membershipPlanId: string;
    spendAmount: number;
    source: number;
    ageRange: string;
    isActive: boolean | string;
}


export type ReferralPlan =
    {
        id: string,
        circuitId: string,
        name: string,
        description: string,
        amount: number,
        benefitType: string,
        validity: string,
        expiryDate: string,
        isBasePlan: boolean,
        addReferrersBenefit: boolean,
        addReferredUsersBenefit: boolean,
        currency: string,
        dateCreated: string,
        isActive: boolean
    }


export interface MemberBody {
    page: number;
    perPage: number;
}


export interface ReferralPlanBody {
    page: number;
    perPage: number;
}


export type ListMemberPayload = PaginationQuery & {
    atlasId: string;
    queryString: string;
};

export type Member =
    {
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        ageRange: string,
        dateOfBirth: string,
        source: string,
        totalPoints: 0,
        orders: Array<Order>,
        plan: PlanTypeInMember,
        dateModified: string,
        dateCreated: string,
        isActive: boolean
    }


export type Order = {
    id: string,
    cinema: string,
    cinemaId: string,
    source: string,
    orderId: string,
    amount: 0,
    dateCreated: string,
    transactionType: string
}


export type PlanTypeInMember = {
    id: string;
    membershipPlanId: string;
    name: string;
    planType: string;
    points: number;
    spendAmount: number;
    activationDate: string;
    expiryDate: string;
    dateCreated: string;
}

export type TMemberList = {
    metaData: {
        page: number;
        perPage: number;
        total: number;
        totalPages: number;
    },
    pagedList: [

        {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
            phoneNumber: string;
            dateOfBirth: string;
            ageRange: string;
            source: string;
            orders: [
                {
                    id: string;
                    cinema: string;
                    cinemaId: string;
                    source: string;
                    orderId: string;
                    amount: number;
                    dateCreated: string;
                }
            ],
            plan: PlanTypeInMember,
            totalPoints: number;
            dateModified: string;
            dateCreated: string;
            isActive: boolean | string;
        }
    ]
}

export type TMember = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    ageRange: string;
    source: string;
    orders: [
        {
            id: string;
            cinema: string;
            cinemaId: string;
            source: string;
            orderId: string;
            amount: number;
            dateCreated: string;
            transactionType: string;
        }
    ],
    plan: PlanTypeInMember,
    totalPoints: number;
    dateModified: string;
    dateCreated: string;
    isActive: boolean | string;
}


export type TOrderActivity = {
    id: string;
    cinema: string;
    cinemaId: string;
    source: string;
    orderId: string;
    amount: number;
    dateCreated: string;
    transactionType: string;
}


export type TTierList = {
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

export type TCreateTierReq = {
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


export type TTier = {
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