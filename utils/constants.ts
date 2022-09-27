export const API_URL = "https://api.frankfurter.app";
export const MIN_DATE = "1999-01-04";
export const CURRENCIES = {
  USD: {
    symbol: "$",
    name: "US Dollar",
    symbol_native: "$",
    emoji: "🇺🇸",
  },
  EUR: {
    symbol: "€",
    name: "Euro",
    symbol_native: "€",
    emoji: "🇪🇺",
  },
  CAD: {
    symbol: "CA$",
    name: "Canadian Dollar",
    symbol_native: "$",
    emoji: "🇨🇦",
  },
  AUD: {
    symbol: "AU$",
    name: "Australian Dollar",
    symbol_native: "$",
    emoji: "🇦🇺",
  },
  BGN: {
    symbol: "BGN",
    name: "Bulgarian Lev",
    symbol_native: "лв",
    emoji: "🇧🇬",
  },
  BRL: {
    symbol: "R$",
    name: "Brazilian Real",
    symbol_native: "R$",
    emoji: "🇧🇷",
  },
  CHF: {
    symbol: "CHF",
    name: "Swiss Franc",
    symbol_native: "CHF",
    emoji: "🇨🇭",
  },
  CNY: {
    symbol: "CN¥",
    name: "Chinese Yuan",
    symbol_native: "CN¥",
    emoji: "🇨🇳",
  },
  CZK: {
    symbol: "Kč",
    name: "Czech Republic Koruna",
    symbol_native: "Kč",
    emoji: "🇨🇿",
  },
  DKK: {
    symbol: "Dkr",
    name: "Danish Krone",
    symbol_native: "kr",
    emoji: "🇩🇰",
  },
  GBP: {
    symbol: "£",
    name: "British Pound Sterling",
    symbol_native: "£",
    emoji: "🇬🇧",
  },
  HKD: {
    symbol: "HK$",
    name: "Hong Kong Dollar",
    symbol_native: "$",
    emoji: "🇭🇰",
  },
  HRK: {
    symbol: "kn",
    name: "Croatian Kuna",
    symbol_native: "kn",
    emoji: "🇭🇷",
  },
  HUF: {
    symbol: "Ft",
    name: "Hungarian Forint",
    symbol_native: "Ft",
    emoji: "🇭🇺",
  },
  IDR: {
    symbol: "Rp",
    name: "Indonesian Rupiah",
    symbol_native: "Rp",
    emoji: "🇮🇩",
  },
  ILS: {
    symbol: "₪",
    name: "Israeli New Sheqel",
    symbol_native: "₪",
    emoji: "🇮🇱",
  },
  INR: {
    symbol: "Rs",
    name: "Indian Rupee",
    symbol_native: "₹",
    emoji: "🇮🇳",
  },
  ISK: {
    symbol: "Ikr",
    name: "Icelandic Króna",
    symbol_native: "kr",
    emoji: "🇮🇸",
  },
  JPY: {
    symbol: "¥",
    name: "Japanese Yen",
    symbol_native: "￥",
    emoji: "🇯🇵",
  },
  KRW: {
    symbol: "₩",
    name: "South Korean Won",
    symbol_native: "₩",
    emoji: "🇰🇷",
  },
  MXN: {
    symbol: "MX$",
    name: "Mexican Peso",
    symbol_native: "$",
    emoji: "🇲🇽",
  },
  MYR: {
    symbol: "RM",
    name: "Malaysian Ringgit",
    symbol_native: "RM",
    emoji: "🇲🇾",
  },
  NOK: {
    symbol: "Nkr",
    name: "Norwegian Krone",
    symbol_native: "kr",
    emoji: "🇳🇴",
  },
  NZD: {
    symbol: "NZ$",
    name: "New Zealand Dollar",
    symbol_native: "$",
    emoji: "🇳🇿",
  },
  PHP: {
    symbol: "₱",
    name: "Philippine Peso",
    symbol_native: "₱",
    emoji: "🇵🇭",
  },
  PLN: {
    symbol: "zł",
    name: "Polish Zloty",
    symbol_native: "zł",
    emoji: "🇵🇱",
  },
  RON: {
    symbol: "RON",
    name: "Romanian Leu",
    symbol_native: "RON",
    emoji: "🇷🇴",
  },
  RUB: {
    symbol: "RUB",
    name: "Russian Ruble",
    symbol_native: "руб.",
    emoji: "🇷🇺",
  },
  SEK: {
    symbol: "Skr",
    name: "Swedish Krona",
    symbol_native: "kr",
    emoji: "🇸🇪",
  },
  SGD: {
    symbol: "S$",
    name: "Singapore Dollar",
    symbol_native: "$",
    emoji: "🇸🇬",
  },
  THB: {
    symbol: "฿",
    name: "Thai Baht",
    symbol_native: "฿",
    emoji: "🇹🇭",
  },
  TRY: {
    symbol: "TL",
    name: "Turkish Lira",
    symbol_native: "TL",
    emoji: "🇹🇷",
  },
  ZAR: {
    symbol: "R",
    name: "South African Rand",
    symbol_native: "R",
    emoji: "🇿🇦",
  },
} as Record<
  string,
  {
    symbol: string;
    name: string;
    symbol_native: string;
    emoji: string;
  }
>;
