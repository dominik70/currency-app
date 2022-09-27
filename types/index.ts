export interface Rate {
  [key: string]: number;
}

export interface Currency {
  amount: number;
  base: string;
  date: string;
  rates: Rate;
}

export interface TimeSeries {
  amount: number;
  base: string;
  start_date: string;
  end_date: string;
  rates: { [key: string]: Rate };
}

export interface ExchangeRateParameters {
  fromCurrency: string;
  date: string;
}

export interface TimeSeriesParameters {
  fromCurrency: string;
  toCurrency: string;
  fromDate: string;
  toDate: string;
}

export type TransformedTimeSeries = { x: string; y: number }[];
