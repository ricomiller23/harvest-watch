import { FALLBACK_FORECASTS } from "@/lib/fallback-data";

export default function HarvestPage() {
  return (
    <div className="space-y-6 font-mono text-xs">
      <div className="bg-bg-subtle border border-border rounded-lg p-5">
        <h1 className="text-xl font-display font-bold text-text">Global Crop Conditions & Harvest Forecast Rounds</h1>
        <p className="text-text-muted mt-1">Multi-agency crop assessments from USDA WASDE, FAO AMIS, and JRC MARS.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FALLBACK_FORECASTS.map((fc) => (
          <div key={fc.id} className="p-5 bg-white border border-border rounded-lg space-y-2">
            <div className="flex justify-between items-center">
              <strong className="text-text text-sm">{fc.commodity}</strong>
              <span className="text-text-muted text-[10px]">{fc.forecastRound}</span>
            </div>
            <div className="text-2xl font-bold font-mono text-text num-tabular">
              {fc.volumeMillionTonnes}M tonnes
            </div>
            <span className="text-text-faint text-[11px] block">Marketing Year: {fc.marketingYear}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
