import axios from "axios";
import { Stocks } from "../_models/stocks";

const params = {
  access_key: "a2843ae98d1cc812ab2d86f69934e3bc",
};

export const getStocks = async (): Promise<Stocks> => {
  const response = await axios.get("http://api.marketstack.com/v1/tickers/aapl/eod", {
    params,
  });

  return response.data.data;
};
