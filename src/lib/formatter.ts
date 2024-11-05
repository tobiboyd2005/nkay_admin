const CURRENCY_FORMATTER = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN", // Use the currency code for Naira
  minimumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-NG");

export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}
