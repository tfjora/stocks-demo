import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { getStockData, sortEodDate } from "../../_utilities/highcharts";
import { Stocks } from "../../_models/stocks";
import { options } from "./options";

type Props = {
  data: Stocks;
};

export default function HighchartsStocks({ data }: Props) {
  const hasEodData = data?.has_eod ? data.eod : [];
  const eodData = hasEodData ? sortEodDate(data.eod) : [];
  const [ohlc, volume] = getStockData(eodData);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options(ohlc, volume)}
      constructorType={"stockChart"}
    />
  );
}
