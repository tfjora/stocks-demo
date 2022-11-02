import { Eod } from "./eod";

export interface IOhlc {
  date: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface IVolume {
  date: number;
  volume: number;
}

export interface Stocks {
  eod: Eod[];
  has_eod: boolean;
}
