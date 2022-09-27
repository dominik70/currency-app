import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constants";
import type {
  Currency,
  ExchangeRateParameters,
  TimeSeries,
  TimeSeriesParameters,
  TransformedTimeSeries,
} from "../../types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Rates", "TimeSeries"],
  endpoints: (builder) => ({
    getRates: builder.query<Currency, ExchangeRateParameters>({
      query: ({ date, fromCurrency }) => `/${date}?from=${fromCurrency}`,
      providesTags: ["Rates"],
    }),
    getTimeSeries: builder.query<TransformedTimeSeries, TimeSeriesParameters>({
      query: ({ fromDate, toDate, fromCurrency, toCurrency }) =>
        `/${fromDate}..${toDate}?from=${fromCurrency}&to=${toCurrency}`,
      providesTags: ["TimeSeries"],
      transformResponse({ rates }: TimeSeries): TransformedTimeSeries {
        const transformedData = Object.entries(rates).map(([key, value]) => ({
          x: key,
          y: Object.values(value)[0],
        }));
        return transformedData;
      },
    }),
  }),
});

export const { useGetRatesQuery, useGetTimeSeriesQuery } = apiSlice;
