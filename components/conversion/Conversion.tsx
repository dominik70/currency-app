import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CurrencySelect } from "./CurrencySelect/CurrencySelect";
import { Loader } from "../common/loader/Loader";
import { Input } from "../common/input/Input";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { MIN_DATE } from "../../utils/constants";
import SwapIcon from "/public/icons/swap.svg";
import {
  selectUserInput,
  swapCurrencies,
  updateUserInput,
} from "../../redux/userInput/userInputSlice";
import { useGetRatesQuery } from "../../redux/api/apiSlice";
import { Result } from "../common/result/Result";
import { Button } from "../common/button/Button";

export const Conversion = () => {
  const dispatch = useAppDispatch();
  const { fromCurrency, toCurrency, date, amount } =
    useAppSelector(selectUserInput);

  const { data, error, isLoading, isFetching } = useGetRatesQuery({
    fromCurrency,
    date,
  });

  if (error) {
    if ("message" in error) {
      return <p>{error.message}</p>;
    }
    return <p>Failed to fetch data</p>;
  }

  if (!data || isLoading) {
    return <Loader />;
  }

  if (!data.rates) {
    return <p>Wrong input</p>;
  }

  const result = formatCurrency(amount * data.rates[toCurrency]);
  const currencies = Object.keys(data.rates);

  return (
    <>
      <div className="flex gap-4 items-end justify-center mb-12 flex-wrap">
        <CurrencySelect
          currencies={currencies.filter((c) => c !== toCurrency)}
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
        <div className="flex gap-4 items-end flex-wrap justify-center">
          <Input
            label="amount"
            min={1}
            value={amount}
            onChange={(e) =>
              dispatch(updateUserInput({ amount: parseInt(e.target.value) }))
            }
          />
          <Input
            id="date"
            label="date"
            type="date"
            min={MIN_DATE}
            max={formatDate(new Date())}
            value={date.toString()}
            onChange={(e) =>
              dispatch(updateUserInput({ date: e.target.value }))
            }
          />
        </div>
      </div>
      {isFetching ? (
        <Loader />
      ) : (
        <Result>
          {amount} {fromCurrency} = {result} {toCurrency}
        </Result>
      )}
    </>
  );
};
