import { useGetRatesQuery } from "../../redux/api/apiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectUserInput,
  updateUserInput,
} from "../../redux/userInput/userInputSlice";
import { MIN_DATE } from "../../utils/constants";
import { formatDate } from "../../utils/helpers";
import { Input } from "../common/input/Input";
import { Loader } from "../common/loader/Loader";
import { Result } from "../common/result/Result";
import { CurrencySelect } from "../conversion/CurrencySelect/CurrencySelect";
import { Table } from "./Table";

export const AllCurencies = () => {
  const { fromCurrency, date } = useAppSelector(selectUserInput);
  const dispatch = useAppDispatch();

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
  if (isLoading || !data) {
    return <Loader />;
  }

  if (!data.rates) {
    return <p>Wrong input</p>;
  }

  const currencies = Object.keys(data.rates);

  return (
    <div className="flex flex-col items-center gap-8 ">
      <div className="flex gap-4 items-end">
        <CurrencySelect
          currencies={currencies}
          onChange={(value) =>
            dispatch(updateUserInput({ fromCurrency: value }))
          }
          selected={fromCurrency}
          label="from"
        />
        <Input
          label="date"
          type="date"
          min={MIN_DATE}
          max={formatDate(new Date())}
          value={date.toString()}
          onChange={(e) => dispatch(updateUserInput({ date: e.target.value }))}
        />
      </div>
      <Result>1 {fromCurrency} =</Result>
      {isFetching ? <Loader /> : <Table rates={data.rates} />}
    </div>
  );
};
