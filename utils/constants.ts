export const API_URL = "https://api.frankfurter.app";
export const MIN_DATE = "1999-01-04";
export const CURRENCIES = {
  USD: {
    symbol: "$",
    name: "US Dollar",
    symbol_native: "$",
    emoji: "๐บ๐ธ",
  },
  EUR: {
    symbol: "โฌ",
    name: "Euro",
    symbol_native: "โฌ",
    emoji: "๐ช๐บ",
  },
  CAD: {
    symbol: "CA$",
    name: "Canadian Dollar",
    symbol_native: "$",
    emoji: "๐จ๐ฆ",
  },
  AUD: {
    symbol: "AU$",
    name: "Australian Dollar",
    symbol_native: "$",
    emoji: "๐ฆ๐บ",
  },
  BGN: {
    symbol: "BGN",
    name: "Bulgarian Lev",
    symbol_native: "ะปะฒ",
    emoji: "๐ง๐ฌ",
  },
  BRL: {
    symbol: "R$",
    name: "Brazilian Real",
    symbol_native: "R$",
    emoji: "๐ง๐ท",
  },
  CHF: {
    symbol: "CHF",
    name: "Swiss Franc",
    symbol_native: "CHF",
    emoji: "๐จ๐ญ",
  },
  CNY: {
    symbol: "CNยฅ",
    name: "Chinese Yuan",
    symbol_native: "CNยฅ",
    emoji: "๐จ๐ณ",
  },
  CZK: {
    symbol: "Kฤ",
    name: "Czech Republic Koruna",
    symbol_native: "Kฤ",
    emoji: "๐จ๐ฟ",
  },
  DKK: {
    symbol: "Dkr",
    name: "Danish Krone",
    symbol_native: "kr",
    emoji: "๐ฉ๐ฐ",
  },
  GBP: {
    symbol: "ยฃ",
    name: "British Pound Sterling",
    symbol_native: "ยฃ",
    emoji: "๐ฌ๐ง",
  },
  HKD: {
    symbol: "HK$",
    name: "Hong Kong Dollar",
    symbol_native: "$",
    emoji: "๐ญ๐ฐ",
  },
  HRK: {
    symbol: "kn",
    name: "Croatian Kuna",
    symbol_native: "kn",
    emoji: "๐ญ๐ท",
  },
  HUF: {
    symbol: "Ft",
    name: "Hungarian Forint",
    symbol_native: "Ft",
    emoji: "๐ญ๐บ",
  },
  IDR: {
    symbol: "Rp",
    name: "Indonesian Rupiah",
    symbol_native: "Rp",
    emoji: "๐ฎ๐ฉ",
  },
  ILS: {
    symbol: "โช",
    name: "Israeli New Sheqel",
    symbol_native: "โช",
    emoji: "๐ฎ๐ฑ",
  },
  INR: {
    symbol: "Rs",
    name: "Indian Rupee",
    symbol_native: "โน",
    emoji: "๐ฎ๐ณ",
  },
  ISK: {
    symbol: "Ikr",
    name: "Icelandic Krรณna",
    symbol_native: "kr",
    emoji: "๐ฎ๐ธ",
  },
  JPY: {
    symbol: "ยฅ",
    name: "Japanese Yen",
    symbol_native: "๏ฟฅ",
    emoji: "๐ฏ๐ต",
  },
  KRW: {
    symbol: "โฉ",
    name: "South Korean Won",
    symbol_native: "โฉ",
    emoji: "๐ฐ๐ท",
  },
  MXN: {
    symbol: "MX$",
    name: "Mexican Peso",
    symbol_native: "$",
    emoji: "๐ฒ๐ฝ",
  },
  MYR: {
    symbol: "RM",
    name: "Malaysian Ringgit",
    symbol_native: "RM",
    emoji: "๐ฒ๐พ",
  },
  NOK: {
    symbol: "Nkr",
    name: "Norwegian Krone",
    symbol_native: "kr",
    emoji: "๐ณ๐ด",
  },
  NZD: {
    symbol: "NZ$",
    name: "New Zealand Dollar",
    symbol_native: "$",
    emoji: "๐ณ๐ฟ",
  },
  PHP: {
    symbol: "โฑ",
    name: "Philippine Peso",
    symbol_native: "โฑ",
    emoji: "๐ต๐ญ",
  },
  PLN: {
    symbol: "zล",
    name: "Polish Zloty",
    symbol_native: "zล",
    emoji: "๐ต๐ฑ",
  },
  RON: {
    symbol: "RON",
    name: "Romanian Leu",
    symbol_native: "RON",
    emoji: "๐ท๐ด",
  },
  RUB: {
    symbol: "RUB",
    name: "Russian Ruble",
    symbol_native: "ััะฑ.",
    emoji: "๐ท๐บ",
  },
  SEK: {
    symbol: "Skr",
    name: "Swedish Krona",
    symbol_native: "kr",
    emoji: "๐ธ๐ช",
  },
  SGD: {
    symbol: "S$",
    name: "Singapore Dollar",
    symbol_native: "$",
    emoji: "๐ธ๐ฌ",
  },
  THB: {
    symbol: "เธฟ",
    name: "Thai Baht",
    symbol_native: "เธฟ",
    emoji: "๐น๐ญ",
  },
  TRY: {
    symbol: "TL",
    name: "Turkish Lira",
    symbol_native: "TL",
    emoji: "๐น๐ท",
  },
  ZAR: {
    symbol: "R",
    name: "South African Rand",
    symbol_native: "R",
    emoji: "๐ฟ๐ฆ",
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
