export const options = (ohlc: any, volume: any) => {
  return {
    credits: { enabled: false },
    yAxis: [
      {
        labels: {
          align: "left",
        },
        height: "80%",
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "left",
        },
        top: "80%",
        height: "20%",
        offset: 0,
      },
    ],
    series: [
      {
        type: "ohlc",
        id: "aapl-ohlc",
        name: "AAPL Stock Price",
        data: ohlc,
      },
      {
        type: "column",
        id: "aapl-volume",
        name: "AAPL Volume",
        data: volume,
        yAxis: 1,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 800,
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: false,
            },
          },
        },
      ],
    },
  };
};
