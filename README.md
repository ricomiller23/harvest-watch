# HARVEST.WATCH
## Global Food Security, Crop & Agricultural-Market Monitor

A light-theme, always-fresh public data dashboard tracking food price indices, harvest production forecasts, and IPC acute food insecurity across three separate structural bands.

### Core Invariants
1. **Three-Band Architecture:** Prices, Harvest, and Hunger are separated into three independent visual bands.
2. **Index vs. Cash Price:** FAO Food Price Index points are strictly isolated from FOB cash commodity prices.
3. **TradeBasis Required:** Every cash price renders with its quotation basis (FOB, CIF, farmgate, retail).
4. **Phase Attribution:** IPC acute food insecurity figures require explicit component breakdowns; no unclassified summing.
5. **Light Theme Only:** Zero dark mode or `prefers-color-scheme`.
