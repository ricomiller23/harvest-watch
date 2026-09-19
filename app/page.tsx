import Link from "next/link";
import { FALLBACK_PRICE_INDICES, FALLBACK_MARKET_PRICES, FALLBACK_FORECASTS, FALLBACK_FOOD_SECURITY } from "@/lib/fallback-data";
import { TrendingUp, Wheat, AlertCircle, ExternalLink, Calendar, Layers } from "lucide-react";
import { IPC_PHASE_LABELS } from "@/lib/ipc";

export default function HarvestBoardPage() {
  return (
    <div className="space-y-10 font-mono text-xs">
      {/* Header Explainer */}
      <div className="bg-bg-subtle border border-border rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-display font-bold text-text">Global Agricultural & Food Security Surveillance</h1>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-100 text-amber-900 border border-amber-300">
              Seed Active
            </span>
          </div>
          <p className="text-text-muted mt-1">
            Prices, harvest forecasts, and acute food insecurity are three separate questions. Kept in isolated structural bands.
          </p>
        </div>
      </div>

      {/* ==================== BAND 1: PRICES ==================== */}
      <section className="bg-white border-2 border-slate-200 rounded-lg p-6 space-y-4 shadow-sm">
        <div className="flex justify-between items-center border-b border-border pb-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-blue-100 text-brand font-bold text-[10px] uppercase">
                BAND 1
              </span>
              <h2 className="text-base font-display font-bold text-text flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-brand" /> International Food Price Indices & Export Quotations
              </h2>
            </div>
            <p className="text-text-muted text-[11px] mt-0.5">
              The FAO Food Price Index is a trade-weighted average of international export quotations, not what retail consumers pay.
            </p>
          </div>
          <span className="text-text-faint text-[11px]">Monthly Release: August 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FALLBACK_PRICE_INDICES.map((idx) => (
            <div key={idx.id} className="p-4 bg-bg-subtle rounded border border-border space-y-2">
              <div className="flex justify-between items-center">
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-50 text-amber-800 border border-amber-200">
                  Seed
                </span>
                <span className="text-emerald-700 font-bold num-tabular">+{idx.changeMoMPct}% MoM</span>
              </div>
              <span className="text-text-muted text-[11px] block">{idx.indexName}</span>
              <div className="text-2xl font-bold font-mono text-text num-tabular">
                {idx.value.toFixed(1)} <span className="text-xs font-normal text-text-faint">points</span>
              </div>
              <div className="pt-2 border-t border-border flex justify-between text-[10px] text-text-muted">
                <span>Base: {idx.basePeriod}</span>
                <a href={idx.documentUrl} target="_blank" rel="noreferrer" className="text-brand hover:underline">
                  citation
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Cash Prices Strip */}
        <div className="pt-3 border-t border-border flex flex-wrap gap-4 text-xs font-mono">
          <strong className="text-text">Cash Commodity Quotes (FOB Basis):</strong>
          {FALLBACK_MARKET_PRICES.map((mp) => (
            <span key={mp.id} className="px-2.5 py-1 rounded bg-bg-subtle border border-border text-text">
              {mp.commodity} ({mp.market}): <strong className="text-brand num-tabular">${mp.price.toFixed(2)}/t</strong> <span className="text-[10px] text-text-faint uppercase">[{mp.tradeBasis}]</span>
            </span>
          ))}
        </div>
      </section>

      {/* ==================== BAND 2: HARVEST ==================== */}
      <section className="bg-white border-2 border-slate-200 rounded-lg p-6 space-y-4 shadow-sm">
        <div className="flex justify-between items-center border-b border-border pb-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px] uppercase">
                BAND 2
              </span>
              <h2 className="text-base font-display font-bold text-text flex items-center gap-1.5">
                <Wheat className="w-4 h-4 text-amber-700" /> Crop Production Forecasts (USDA WASDE & FAO AMIS)
              </h2>
            </div>
            <p className="text-text-muted text-[11px] mt-0.5">
              A forecast is not an in-bin crop. Production figures are updated across monthly forecast rounds and never overwrite past rounds.
            </p>
          </div>
          <span className="text-text-faint text-[11px]">Marketing Year 2026/27</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FALLBACK_FORECASTS.map((fc) => (
            <div key={fc.id} className="p-4 bg-bg-subtle rounded border border-border space-y-2">
              <div className="flex justify-between items-center">
                <strong className="text-text">{fc.commodity} ({fc.marketingYear})</strong>
                <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-800">
                  {fc.forecastRound}
                </span>
              </div>
              <div className="text-2xl font-bold font-mono text-text num-tabular">
                {fc.volumeMillionTonnes.toLocaleString()} <span className="text-xs font-normal text-text-faint">million tonnes</span>
              </div>
              <div className="pt-2 border-t border-border flex justify-between text-[11px] text-text-muted">
                <span>Change vs Previous: <strong className="text-danger">{fc.changeVsPreviousPct}%</strong></span>
                <a href={fc.documentUrl} target="_blank" rel="noreferrer" className="text-brand hover:underline">
                  official release
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== BAND 3: HUNGER ==================== */}
      <section className="bg-white border-2 border-slate-200 rounded-lg p-6 space-y-4 shadow-sm">
        <div className="flex justify-between items-center border-b border-border pb-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-red-100 text-danger font-bold text-[10px] uppercase">
                BAND 3
              </span>
              <h2 className="text-base font-display font-bold text-text flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-danger" /> Acute Food Insecurity Classifications (IPC / CH)
              </h2>
            </div>
            <p className="text-text-muted text-[11px] mt-0.5">
              Acute food insecurity is an evidence-based classification with explicit confidence ratings and projection periods.
            </p>
          </div>
          <span className="text-text-faint text-[11px]">Phase Thresholds Enforced</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr className="bg-bg-subtle text-left text-text-muted">
                <th className="px-4 py-3">Country / Territory</th>
                <th className="px-4 py-3">Region / Scope</th>
                <th className="px-4 py-3">IPC Phase</th>
                <th className="px-4 py-3">Classified Population</th>
                <th className="px-4 py-3">Evidence Confidence</th>
                <th className="px-4 py-3">Analysis Period</th>
                <th className="px-4 py-3">State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {FALLBACK_FOOD_SECURITY.map((fs) => (
                <tr key={fs.id} className="hover:bg-bg-subtle/50">
                  <td className="px-4 py-3 font-bold text-text">{fs.country}</td>
                  <td className="px-4 py-3 text-text-muted">{fs.region}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      fs.phase === 5 ? "bg-red-200 text-red-950 border border-red-300" :
                      fs.phase === 4 ? "bg-orange-100 text-fire border border-orange-200" :
                      "bg-amber-100 text-amber-900 border border-amber-200"
                    }`}>
                      {IPC_PHASE_LABELS[fs.phase]}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-bold font-mono text-text num-tabular">
                    {fs.population.toLocaleString()} people
                  </td>
                  <td className="px-4 py-3 text-text-muted uppercase text-[10px]">{fs.evidenceConfidence}</td>
                  <td className="px-4 py-3 text-text-muted text-[11px]">{fs.periodStart} → {fs.periodEnd}</td>
                  <td className="px-4 py-3">
                    {fs.isProjection ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800">
                        PROJECTED
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-800">
                        CURRENT
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
