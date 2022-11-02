export type Eod = {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  adj_high: number | null;
  adj_low: number | null;
  adj_open: number | null;
  adj_close: number | null;
  adj_volume: number | null;
  split_factor: number;
  dividend: number;
  symbol: string;
  exchange: string;
  date: string;
};
