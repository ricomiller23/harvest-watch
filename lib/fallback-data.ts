import { PriceIndex, MarketPrice, ProductionForecast, FoodSecurityEstimate } from "./definitions";

// BAND 1: PRICES
export const FALLBACK_PRICE_INDICES: PriceIndex[] = [
  {
    id: "fpi-aug-2026",
    sourceId: "fao-fpi",
    indexCode: "FPI_HEADLINE",
    indexName: "FAO Food Price Index (Headline)",
    value: 133.3,
    basePeriod: "2014-2016 = 100",
    unit: "index_points",
    asOfMonth: "2026-08",
    releasedAt: "2026-09-06T10:00:00Z",
    changeMoMPct: 1.9,
    changeYoYPct: 4.2,
    documentUrl: "https://www.fao.org/worldfoodsituation/foodpricesindex/en/",
    isSeed: true
  },
  {
    id: "fpi-cereals-aug-2026",
    sourceId: "fao-fpi",
    indexCode: "FPI_CEREALS",
    indexName: "FAO Cereal Price Index",
    value: 115.8,
    basePeriod: "2014-2016 = 100",
    unit: "index_points",
    asOfMonth: "2026-08",
    releasedAt: "2026-09-06T10:00:00Z",
    changeMoMPct: 2.1,
    changeYoYPct: -1.4,
    documentUrl: "https://www.fao.org/worldfoodsituation/foodpricesindex/en/",
    isSeed: true
  },
  {
    id: "fpi-oils-aug-2026",
    sourceId: "fao-fpi",
    indexCode: "FPI_VEGOILS",
    indexName: "FAO Vegetable Oil Price Index",
    value: 161.2,
    basePeriod: "2014-2016 = 100",
    unit: "index_points",
    asOfMonth: "2026-08",
    releasedAt: "2026-09-06T10:00:00Z",
    changeMoMPct: 4.8,
    changeYoYPct: 15.6,
    documentUrl: "https://www.fao.org/worldfoodsituation/foodpricesindex/en/",
    isSeed: true
  }
];

export const FALLBACK_MARKET_PRICES: MarketPrice[] = [
  {
    id: "mp-wheat-us-hrw",
    sourceId: "worldbank-pink",
    commodity: "Wheat (US HRW)",
    market: "US Gulf Export",
    price: 268.50,
    currency: "USD",
    unit: "usd_per_tonne",
    tradeBasis: "fob",
    asOfDate: "2026-09-18",
    documentUrl: "https://www.worldbank.org/en/research/commodity-markets"
  },
  {
    id: "mp-corn-us-yellow",
    sourceId: "worldbank-pink",
    commodity: "Maize / Corn (US No. 2 Yellow)",
    market: "US Gulf Export",
    price: 194.00,
    currency: "USD",
    unit: "usd_per_tonne",
    tradeBasis: "fob",
    asOfDate: "2026-09-18",
    documentUrl: "https://www.worldbank.org/en/research/commodity-markets"
  }
];

// BAND 2: HARVEST & FORECASTS
export const FALLBACK_FORECASTS: ProductionForecast[] = [
  {
    id: "fc-cereal-global-2026-sep",
    sourceId: "fao-ames",
    commodity: "Global Cereal Production",
    country: "World",
    marketingYear: "2026/27",
    volumeMillionTonnes: 2980.0,
    unit: "million_tonnes",
    forecastRound: "September 2026 Release",
    releasedAt: "2026-09-06T10:00:00Z",
    changeVsPreviousPct: -2.0,
    documentUrl: "https://www.fao.org/newsroom/detail/supply-concerns-drive-fao-food-price-index-higher/en"
  },
  {
    id: "fc-wasde-wheat-2026-sep",
    sourceId: "usda-wasde",
    commodity: "Global Wheat Production",
    country: "World",
    marketingYear: "2026/27",
    volumeMillionTonnes: 796.8,
    unit: "million_tonnes",
    forecastRound: "WASDE-652 (September 2026)",
    releasedAt: "2026-09-12T16:00:00Z",
    changeVsPreviousPct: -0.4,
    documentUrl: "https://www.usda.gov/oce/commodity/wasde"
  }
];

// BAND 3: HUNGER & IPC ACUTE FOOD INSECURITY
export const FALLBACK_FOOD_SECURITY: FoodSecurityEstimate[] = [
  {
    id: "ipc-sudan-p3",
    sourceId: "ipc",
    country: "Sudan",
    iso3166: "SDN",
    region: "National Consolidated",
    phase: 3,
    population: 17100000,
    periodStart: "2026-06-01",
    periodEnd: "2026-10-31",
    evidenceConfidence: "high",
    isProjection: false,
    documentUrl: "https://www.ipcinfo.org/"
  },
  {
    id: "ipc-sudan-p4",
    sourceId: "ipc",
    country: "Sudan",
    iso3166: "SDN",
    region: "National Consolidated",
    phase: 4,
    population: 8500000,
    periodStart: "2026-06-01",
    periodEnd: "2026-10-31",
    evidenceConfidence: "high",
    isProjection: false,
    documentUrl: "https://www.ipcinfo.org/"
  },
  {
    id: "ipc-sudan-p5",
    sourceId: "ipc",
    country: "Sudan",
    iso3166: "SDN",
    region: "North Darfur & Greater Khartoum",
    phase: 5,
    population: 755000,
    periodStart: "2026-06-01",
    periodEnd: "2026-10-31",
    evidenceConfidence: "high",
    isProjection: false,
    documentUrl: "https://www.ipcinfo.org/"
  },
  {
    id: "ipc-yemen-proj-p3",
    sourceId: "ipc",
    country: "Yemen",
    iso3166: "YEM",
    region: "Houthi-controlled / Government areas",
    phase: 3,
    population: 11200000,
    periodStart: "2026-11-01",
    periodEnd: "2027-02-28",
    evidenceConfidence: "medium",
    isProjection: true,
    documentUrl: "https://www.ipcinfo.org/"
  }
];

export const HARVEST_SOURCES = [
  { id: "fao-fpi", name: "FAO Food Price Index", tier: "A", kind: "html", url: "https://www.fao.org/worldfoodsituation/foodpricesindex/en/", cadence: "monthly", enabled: true, licenceNote: "FAO Open Access" },
  { id: "fao-giews", name: "FAO GIEWS Country Briefs", tier: "A", kind: "html", url: "https://www.fao.org/giews/countrybrief/", cadence: "monthly", enabled: true, licenceNote: "FAO Public Data" },
  { id: "fao-ames", name: "FAO AMIS Market Monitor", tier: "A", kind: "html", url: "https://www.amis-outlook.org/", cadence: "monthly", enabled: true, licenceNote: "G20 AMIS Initiative" },
  { id: "usda-wasde", name: "USDA WASDE", tier: "A", kind: "html", url: "https://www.usda.gov/oce/commodity/wasde", cadence: "monthly", enabled: true, licenceNote: "US Government Public Domain" },
  { id: "usda-crop-progress", name: "USDA Crop Progress", tier: "A", kind: "html", url: "https://www.nass.usda.gov/Publications/State_Crop_Progress_and_Condition/", cadence: "weekly", enabled: true, licenceNote: "USDA NASS" },
  { id: "usda-psd", name: "USDA PSD Online", tier: "A", kind: "api", url: "https://apps.fas.usda.gov/psdonline/", cadence: "monthly", enabled: true, licenceNote: "USDA FAS Public" },
  { id: "ipc", name: "Integrated Food Security Phase Classification (IPC)", tier: "A", kind: "api", url: "https://www.ipcinfo.org/", cadence: "as published", enabled: true, licenceNote: "IPC Multi-Agency Partnership" },
  { id: "fews-net", name: "FEWS NET Famine Early Warning Systems", tier: "A", kind: "api", url: "https://fews.net/", cadence: "monthly", enabled: true, licenceNote: "USAID Open Access" },
  { id: "wfp-vam", name: "WFP Vulnerability Analysis and Mapping (VAM)", tier: "A", kind: "api", url: "https://dataviz.vam.wfp.org/", cadence: "monthly", enabled: true, licenceNote: "UN WFP Open Data" },
  { id: "worldbank-pink", name: "World Bank Pink Sheet (Commodities)", tier: "A", kind: "xlsx", url: "https://www.worldbank.org/en/research/commodity-markets", cadence: "monthly", enabled: true, licenceNote: "World Bank Open Knowledge" },
  { id: "ifpri", name: "IFPRI Food Security Portal", tier: "B", kind: "rss", url: "https://www.ifpri.org/", cadence: "weekly", enabled: true, licenceNote: "CGIAR Open Access" },
  { id: "jrc-mars", name: "EU JRC MARS Crop Monitoring", tier: "B", kind: "html", url: "https://agriculture.ec.europa.eu/analysis-and-assessment/mars-crop-monitoring_en", cadence: "monthly", enabled: true, licenceNote: "European Commission Data" },
  { id: "ecb-fx", name: "ECB Reference Exchange Rates", tier: "A", kind: "api", url: "https://www.ecb.europa.eu/stats/eurofxref/", cadence: "daily", enabled: true, licenceNote: "ECB Official Statistics" },
  { id: "faostat", name: "FAOSTAT Agricultural Balances", tier: "A", kind: "api", url: "https://www.fao.org/faostat/", cadence: "annual", enabled: true, licenceNote: "FAO Statistical Database" }
];
