export default function ArchivePage() {
  return (
    <div className="space-y-6 font-mono text-xs">
      <div className="bg-bg-subtle border border-border rounded-lg p-5">
        <h1 className="text-xl font-display font-bold text-text">24-Month Food Telemetry & IPC Archive</h1>
        <p className="text-text-muted mt-1">
          Includes the signature 'Why did the number move?' attribution panel identifying whether population shifts arose from new evidence, boundary adjustments, or physical deterioration.
        </p>
      </div>

      <div className="p-6 bg-white border border-border rounded-lg space-y-3">
        <h2 className="text-sm font-bold text-text uppercase">Attribution: Why Did The Number Move?</h2>
        <div className="p-3 bg-bg-subtle rounded border border-border space-y-1 text-text-muted leading-relaxed">
          <strong className="text-text block">Sudan Phase 5 Addition (August 2026):</strong>
          IPC Famine Review Committee confirmed famine thresholds met in Zamzam camp (North Darfur). Population reassignment arose from newly accessible remote sensing and anthropometric data, representing physical humanitarian deterioration combined with new evidence access.
        </div>
      </div>
    </div>
  );
}
