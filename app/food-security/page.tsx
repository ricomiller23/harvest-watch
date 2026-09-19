import { FALLBACK_FOOD_SECURITY } from "@/lib/fallback-data";
import { IPC_PHASE_LABELS } from "@/lib/ipc";

export default function FoodSecurityPage() {
  return (
    <div className="space-y-6 font-mono text-xs">
      <div className="bg-bg-subtle border border-border rounded-lg p-5">
        <h1 className="text-xl font-display font-bold text-text">IPC / Cadre Harmonisé Acute Food Insecurity Dossier</h1>
        <p className="text-text-muted mt-1">
          Acute food insecurity classifications strictly separated into Phase 3 (Crisis), Phase 4 (Emergency), and Phase 5 (Catastrophe/Famine).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FALLBACK_FOOD_SECURITY.map((fs) => (
          <div key={fs.id} className="bg-white border border-border rounded-lg p-5 space-y-2">
            <div className="flex justify-between items-center">
              <strong className="text-text text-sm">{fs.country} ({fs.region})</strong>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                fs.phase === 5 ? "bg-red-200 text-red-950" : fs.phase === 4 ? "bg-orange-100 text-fire" : "bg-amber-100 text-amber-900"
              }`}>
                Phase {fs.phase}
              </span>
            </div>
            <div className="text-xl font-bold font-mono text-text num-tabular">
              {fs.population.toLocaleString()} people
            </div>
            <div className="pt-2 border-t border-border flex justify-between text-[10px] text-text-muted">
              <span>Confidence: {fs.evidenceConfidence.toUpperCase()}</span>
              <span>{fs.isProjection ? "Projected Outlook" : "Current Analysis"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
