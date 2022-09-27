import { useAppSelector } from "../../redux/hooks";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { getPointSize } from "../../utils/helpers";
import { selectUserInput } from "../../redux/userInput/userInputSlice";
import colors from "tailwindcss/colors";
import { TransformedTimeSeries } from "../../types";

interface Props {
  data: TransformedTimeSeries;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const CurrencyChart = ({ data }: Props) => {
  const { fromCurrency, toCurrency } = useAppSelector(selectUserInput);

  const chartData = {
    datasets: [
      {
        label: `1 ${fromCurrency}`,
        backgroundColor: colors.blue[700],
        borderColor: colors.blue[400],
        data,
        pointRadius: getPointSize(data.length),
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: ({ formattedValue }) => {
            return `1 ${fromCurrency} = ${formattedValue} ${toCurrency}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full md:w-11/12 lg:w-5/6 xl:w-4/6">
      <Line data={chartData} options={options} />
    </div>
  );
};
