'use client';

import React, { useState } from 'react';
import { Wheat, AlertTriangle, ExternalLink } from 'lucide-react';

export interface IpcRegion {
  id: string;
  country: string;
  region: string;
  lat: number;
  lng: number;
  phase: 3 | 4 | 5;
  phaseLabel: 'Crisis' | 'Emergency' | 'Catastrophe / Famine Risk';
  populationInNeed: number;
  isProjection: boolean;
  evidenceConfidence: 'High' | 'Medium' | 'Low';
  periodLabel: string;
  sourceUrl: string;
}

export const MONITORED_IPC_REGIONS: IpcRegion[] = [
  {
    id: 'gaza-ipc5',
    country: 'Gaza Strip',
    region: 'North & Khan Younis Governorates',
    lat: 31.45,
    lng: 34.38,
    phase: 5,
    phaseLabel: 'Catastrophe / Famine Risk',
    populationInNeed: 133000,
    isProjection: true,
    evidenceConfidence: 'Medium',
    periodLabel: 'Sept - Dec 2026 Projection',
    sourceUrl: 'https://www.ipcinfo.org/'
  },
  {
    id: 'sudan-darfur-ipc4',
    country: 'Sudan',
    region: 'North & West Darfur States',
    lat: 13.62,
    lng: 25.35,
    phase: 4,
    phaseLabel: 'Emergency',
    populationInNeed: 8500000,
    isProjection: false,
    evidenceConfidence: 'High',
    periodLabel: 'Current Situation 2026',
    sourceUrl: 'https://www.ipcinfo.org/'
  },
  {
    id: 'yemen-hodeidah-ipc4',
    country: 'Yemen',
    region: 'Hodeidah & Taizz Governorates',
    lat: 14.79,
    lng: 42.95,
    phase: 4,
    phaseLabel: 'Emergency',
    populationInNeed: 4600000,
    isProjection: false,
    evidenceConfidence: 'High',
    periodLabel: 'Current Analysis 2026',
    sourceUrl: 'https://fews.net/'
  },
  {
    id: 'somalia-bay-ipc3',
    country: 'Somalia',
    region: 'Bay & Bakool Agro-Pastoral',
    lat: 3.12,
    lng: 43.65,
    phase: 3,
    phaseLabel: 'Crisis',
    populationInNeed: 3400000,
    isProjection: true,
    evidenceConfidence: 'High',
    periodLabel: 'Post-Gu Harvest Outlook',
    sourceUrl: 'https://www.ipcinfo.org/'
  },
  {
    id: 'haiti-artibonite-ipc4',
    country: 'Haiti',
    region: 'Artibonite & Port-au-Prince Metro',
    lat: 19.14,
    lng: -72.68,
    phase: 4,
    phaseLabel: 'Emergency',
    populationInNeed: 1800000,
    isProjection: false,
    evidenceConfidence: 'Medium',
    periodLabel: 'Current Analysis 2026',
    sourceUrl: 'https://www.ipcinfo.org/'
  }
];

export function IpcFoodInsecurityMap() {
  const [selectedZone, setSelectedZone] = useState<IpcRegion>(MONITORED_IPC_REGIONS[0]);

  const project = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 100;
    const y = ((85 - lat) / 145) * 100;
    return {
      x: Math.max(4, Math.min(96, x)),
      y: Math.max(6, Math.min(94, y))
    };
  };

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm space-y-0">
      <div className="bg-bg-subtle border-b border-border p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <Wheat className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-text flex items-center gap-2">
              <span>IPC Acute Food Insecurity Classification Map</span>
              <span className="bg-red-50 text-red-800 text-[10px] font-mono px-2 py-0.5 rounded border border-red-200">
                Phase 3+ Isolated
              </span>
            </h3>
            <p className="text-xs text-text-muted">Evidence-based classifications from IPC and FEWS NET. Populations are never aggregated across phases.</p>
          </div>
        </div>

        <span className="text-xs font-mono bg-white border border-border px-2.5 py-1 rounded text-text-muted">
          Phase 3 (Crisis) · Phase 4 (Emergency) · Phase 5 (Catastrophe)
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full h-[360px] sm:h-[420px] bg-[#EBF3FD]/40 border-b border-border overflow-hidden select-none">
        <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <g fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1">
            <path d="M120 70 L280 60 L320 120 L260 200 L180 230 L130 180 Z" />
            <path d="M260 250 L340 270 L330 380 L280 430 L250 350 Z" />
            <path d="M480 80 L560 70 L580 140 L500 170 L460 140 Z" />
            <path d="M480 190 L580 190 L600 320 L530 380 L470 270 Z" />
            <path d="M590 70 L850 80 L880 200 L760 260 L620 190 Z" />
            <path d="M780 320 L880 320 L870 400 L770 390 Z" />
          </g>
        </svg>

        {/* IPC Pins */}
        {MONITORED_IPC_REGIONS.map((z) => {
          const pt = project(z.lat, z.lng);
          const isSel = selectedZone.id === z.id;

          const colorBg = z.phase === 5 ? 'bg-red-700' : z.phase === 4 ? 'bg-orange-600' : 'bg-amber-500';

          return (
            <div
              key={z.id}
              onClick={() => setSelectedZone(z)}
              style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
            >
              {z.phase === 5 && (
                <span className="absolute -inset-1.5 rounded-full animate-ping opacity-75 bg-red-600" />
              )}

              <div className={`p-1.5 rounded-full shadow-md text-white transition-transform group-hover:scale-125 ${colorBg} ${
                isSel ? 'ring-4 ring-amber-200' : ''
              }`}>
                <Wheat className="w-3.5 h-3.5" />
              </div>

              <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-text text-white p-2.5 rounded-lg text-[10px] font-mono shadow-xl transition-opacity z-30">
                <div className="font-bold text-white text-[11px] truncate">{z.country}</div>
                <div className="text-slate-300">{z.region}</div>
                <div className="text-red-300 font-bold mt-1">IPC Phase {z.phase} ({z.phaseLabel})</div>
                <div className="text-amber-200">Population: {z.populationInNeed.toLocaleString()} in Phase {z.phase}</div>
                <div className="text-slate-400">Confidence: {z.evidenceConfidence} · {z.periodLabel}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected IPC Dossier */}
      <div className="p-5 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold text-white ${
              selectedZone.phase === 5 ? 'bg-red-700' : selectedZone.phase === 4 ? 'bg-orange-600' : 'bg-amber-600'
            }`}>
              IPC PHASE {selectedZone.phase}: {selectedZone.phaseLabel.toUpperCase()}
            </span>
            {selectedZone.isProjection && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-50 text-purple-700 border border-purple-200 font-semibold">
                Projected Analysis
              </span>
            )}
            <span className="text-xs font-mono text-text-muted">
              Evidence Confidence: <strong>{selectedZone.evidenceConfidence}</strong>
            </span>
          </div>

          <h4 className="text-lg font-bold font-display text-text">{selectedZone.country} — {selectedZone.region}</h4>
          <p className="text-xs text-text-muted font-mono">
            Population in Phase {selectedZone.phase}: <strong className="text-text">{selectedZone.populationInNeed.toLocaleString()}</strong> people · Period: {selectedZone.periodLabel}
          </p>
        </div>

        <a
          href={selectedZone.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-bg-subtle border border-border hover:border-brand/40 text-xs font-mono text-brand font-medium hover:underline shadow-xs"
        >
          <span>IPC Global Platform</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
