import { StockItems } from "../_constants/stocks";
import { Eod } from "../_models/eod";
import { formatToTimeStamp } from "./date";

export const getStockData = (data: Eod[]) => {
  const ohlc = [];
  const volume = [];
  const dataLength = data.length;

  for (let i = 0; i < dataLength; i += 1) {
    ohlc.push([
      formatToTimeStamp(data[i][StockItems.date]),
      data[i][StockItems.open],
      data[i][StockItems.high],
      data[i][StockItems.low],
      data[i][StockItems.close],
    ]);

    volume.push([formatToTimeStamp(data[i][StockItems.date]), data[i][StockItems.volume]]);
  }
  return [ohlc, volume];
};

export const sortEodDate = (eod: Eod[]) => {
  return eod.sort((a, b) => {
    if (a.date < b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  });
};
