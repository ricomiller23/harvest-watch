export default function MethodPage() {
  return (
    <div className="space-y-6 max-w-4xl font-mono text-xs leading-relaxed">
      <div className="bg-bg-subtle border border-border rounded-lg p-5">
        <h1 className="text-xl font-display font-bold text-text">HARVEST.WATCH Correctness Principles</h1>
        <p className="text-text-muted mt-1">Three critical data separations in food and hunger monitoring.</p>
      </div>

      <div className="bg-white border border-border rounded-lg p-6 space-y-4">
        <h2 className="text-sm font-display font-bold text-text uppercase">1. Price Index vs. Cash Price vs. Household Cost</h2>
        <p className="text-text-muted">
          The FAO Food Price Index (FPI) measures trade-weighted international export commodity contracts. It does not reflect local retail prices, which are heavily dominated by processing, domestic transport, import tariffs, and local currency depreciation. In several high-import economies, retail food inflation accelerated even while the international FPI trended downward.
        </p>

        <h2 className="text-sm font-display font-bold text-text uppercase mt-4">2. Forecast Revisions Are Not Overwrites</h2>
        <p className="text-text-muted">
          Crop production forecasts (WASDE and AMIS) undergo successive revision rounds as growing seasons progress. Each release round is stored as an independent vintage with its publication date preserved.
        </p>

        <h2 className="text-sm font-display font-bold text-text uppercase mt-4">3. Acute Food Insecurity Is An Evidence Classification</h2>
        <p className="text-text-muted">
          IPC Phases (1 to 5) are evidence-based consensus classifications produced by multi-agency analytical committees. Summing populations across phases into a casual &quot;starving&quot; total is methodologically invalid. Projections and evidence confidence tiers are always disclosed.
        </p>
      </div>
    </div>
  );
}
