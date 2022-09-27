import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Loader } from "../common/loader/Loader";
import { formatDate, isDateAfter } from "../../utils/helpers";
import { MIN_DATE } from "../../utils/constants";
import { Input } from "../common/input/Input";
import { CurrencySelect } from "../conversion/CurrencySelect/CurrencySelect";
import {
  selectUserInput,
  swapCurrencies,
  updateUserInput,
} from "../../redux/userInput/userInputSlice";
import {
  useGetRatesQuery,
  useGetTimeSeriesQuery,
} from "../../redux/api/apiSlice";
import { Button } from "../common/button/Button";
import { CurrencyChart } from "./CurrencyChart";
import SwapIcon from "/public/icons/swap.svg";

export const ChartSection = () => {
  const dispatch = useAppDispatch();
  const { fromCurrency, toCurrency, fromDate, toDate } =
    useAppSelector(selectUserInput);
  const { data: ratesData } = useGetRatesQuery({ fromCurrency, date: toDate });
  const {
    data: timeSeriesData,
    error,
    isLoading,
    isFetching,
  } = useGetTimeSeriesQuery({
    fromCurrency,
    toCurrency,
    fromDate,
    toDate,
  });

  if (error) {
    if ("message" in error) {
      return <p>{error.message}</p>;
    }
    return <p>Failed to fetch data</p>;
  }

  if (isLoading || !timeSeriesData || !ratesData) {
    return <Loader />;
  }

  if (!ratesData?.rates) {
    return <p>Wrong input</p>;
  }

  const currencies = Object.keys(ratesData.rates);

  return (
    <>
      <div className="flex gap-4 items-end justify-center mb-12 flex-wrap">
        <CurrencySelect
          currencies={currencies}
          onChange={(value) =>
            dispatch(updateUserInput({ fromCurrency: value }))
          }
          selected={fromCurrency}
          label="from"
        />
        <Button type="button" onClick={() => dispatch(swapCurrencies())}>
          <SwapIcon className="h-5 w-5" aria-hidden />
          <span className="sr-only">swap currencies</span>
        </Button>
        <CurrencySelect
          currencies={currencies}
          onChange={(value) => dispatch(updateUserInput({ toCurrency: value }))}
          selected={toCurrency}
          label="to"
        />
        <div className="flex gap-4 items-end justify-center flex-wrap">
          <Input
            label="from date"
            type="date"
            min={MIN_DATE}
            max={formatDate(new Date())}
            value={fromDate.toString()}
            onChange={(e) =>
              dispatch(updateUserInput({ fromDate: e.target.value }))
            }
          />
          <Input
            label="to date"
            type="date"
            min={MIN_DATE}
            max={formatDate(new Date())}
            value={toDate.toString()}
            onChange={(e) => {
              const newDate = e.target.value;
              if (isDateAfter(newDate, fromDate)) {
                dispatch(updateUserInput({ toDate: newDate }));
              }
            }}
          />
        </div>
      </div>
      {isFetching ? <Loader /> : <CurrencyChart data={timeSeriesData} />}
    </>
  );
};
