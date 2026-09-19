export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle mt-16 py-8 text-xs text-text-muted font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p>
            <strong>HARVEST.WATCH</strong> — Food prices, harvest forecasts and acute food insecurity — three separate questions.
          </p>
          <div className="flex items-center space-x-3 text-[11px]">
            <span>Light Theme Invariant</span>
            <span>•</span>
            <span>Three-Band Layout Mandatory</span>
            <span>•</span>
            <span>Evidence Confidence Disclosed</span>
          </div>
        </div>
        <p className="text-text-faint text-[11px] leading-relaxed">
          <strong>Non-Solicitation & Dignity Statement:</strong> The product reports. It does not fundraise, campaign, or recommend market/trading decisions. Respectful dignity is maintained with zero shock adjectives or sensationalized imagery. IPC acute food insecurity phase thresholds are quoted directly from official joint technical committees without subjective reclassification.
        </p>
      </div>
    </footer>
  );
}
