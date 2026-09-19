import { IpcPhase } from "./ipc";
import { TradeBasis } from "./units";

export interface PriceIndex {
  id: string;
  sourceId: string;
  indexCode: string;
  indexName: string;
  value: number;
  basePeriod: string;
  unit: string;
  asOfMonth: string;
  releasedAt: string;
  revisionOf?: string;
  changeMoMPct?: number;
  changeYoYPct?: number;
  documentUrl: string;
  isSeed: boolean;
}

export interface MarketPrice {
  id: string;
  sourceId: string;
  commodity: string;
  market: string;
  price: number;
  currency: string;
  unit: "usd_per_tonne" | "usd_per_bushel" | "local_per_kg";
  tradeBasis: TradeBasis;
  asOfDate: string;
  documentUrl: string;
}

export interface ProductionForecast {
  id: string;
  sourceId: string;
  commodity: string;
  country: string;
  marketingYear: string;
  volumeMillionTonnes: number;
  unit: string;
  forecastRound: string;
  releasedAt: string;
  changeVsPreviousPct?: number;
  documentUrl: string;
}

export interface FoodSecurityEstimate {
  id: string;
  sourceId: string;
  country: string;
  iso3166: string;
  region?: string;
  phase: IpcPhase;
  population: number;
  periodStart: string;
  periodEnd: string;
  evidenceConfidence: "low" | "medium" | "high";
  isProjection: boolean;
  documentUrl: string;
}

export interface CropCondition {
  id: string;
  sourceId: string;
  region: string;
  crop: string;
  period: string;
  rating: string;
  pctGoodExcellent?: number;
  documentUrl: string;
}
