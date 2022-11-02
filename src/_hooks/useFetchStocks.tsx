import { useEffect, useState } from "react";
import { getStocks } from "../api/stocksResources";
import { ComponentStatus } from "../_models/componentStatus";
import { Stocks } from "../_models/stocks";

export type AsyncDataHookResult = [null | Error, ComponentStatus, Stocks | null];

const useFetchStocks = (): AsyncDataHookResult => {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Stocks | null>(null);
  const [status, setStatus] = useState<ComponentStatus>(ComponentStatus.fetching);

  async function fetch(): Promise<void> {
    try {
      const response = await getStocks();      
      setData(response)
      setStatus(ComponentStatus.loaded);
    } catch (error) {
      setError(error as Error);
      setStatus(ComponentStatus.error);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return [error, status, data];
};

export default useFetchStocks;
