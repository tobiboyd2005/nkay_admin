type ReferralPlan = {
    id: string,
    circuitId: string,
    name: string,
    description: string,
    amount: number,
    benefitType: string,
    expiryDate: string,
    isReferralActive: boolean,
    currency: string,
    dateCreated: string,
    dateModified: string,
    isActive: boolean
}

type ReferralPayload = {
    circuitId: string,
    name: string,
    description: string,
    amount: number,
    benefitType: string,
    expiryDate: string,
    isReferralActive: boolean,
    currency: string,
}