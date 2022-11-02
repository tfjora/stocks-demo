import { Switch } from "@material-ui/core";
import { useMemo, useState } from "react";
import ErrorPage from "../components/ErrorPage";
import HighchartsStocks from "../components/HighchartsStocks";
import Spinner from "../components/Spinner";
import useFetchStocks from "../_hooks/useFetchStocks";
import { response } from "../_mockData/stockResponseData";
import { ComponentStatus } from "../_models/componentStatus";
import "./styles.scss";

export default function LandingPage() {
  const [error, status, fetchedData] = useFetchStocks();
  const [useFakeData, setUseFakeData] = useState(false);

  const data = useMemo(() => {
    if (useFakeData) return response.data;
    return fetchedData;
  }, [fetchedData, useFakeData]);

  if (status === ComponentStatus.fetching) return <Spinner title={"Loading stocks data"} />;

  return (
    <div className="landingpage-container">
      <div className="landingpage-header">
        <h2>Stock price</h2>
        <div>
          <Switch onClick={() => setUseFakeData(!useFakeData)} />
          <span>Use fake data</span>
        </div>
      </div>
      {data ? (
        <HighchartsStocks data={data} />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <>"No data available"</>
      )}
    </div>
  );
}
