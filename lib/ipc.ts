export class DefinitionMismatchError extends Error {
  constructor(message: string) {
    super(`[HARVEST.WATCH DEFINITION VIOLATION] ${message}`);
    this.name = "DefinitionMismatchError";
  }
}

export type IpcPhase = 1 | 2 | 3 | 4 | 5;

export const IPC_PHASE_LABELS: Record<IpcPhase, string> = {
  1: "Phase 1 (Minimal / None)",
  2: "Phase 2 (Stressed)",
  3: "Phase 3 (Crisis)",
  4: "Phase 4 (Emergency)",
  5: "Phase 5 (Catastrophe / Famine)",
};

/**
 * PHASE SUM GUARD:
 * Summing across IPC phases into an undifferentiated total throws!
 * A "Phase 3+" summary is only allowed if the component breakdown is explicitly returned.
 */
export function assertValidPhaseAggregation(phases: IpcPhase[], isLabelledPhase3Plus = false): void {
  if (!isLabelledPhase3Plus && new Set(phases).size > 1) {
    throw new DefinitionMismatchError(
      "Direct summation across IPC phases is prohibited. Acute food insecurity classifications must be displayed phase-by-phase or explicitly designated as 'Phase 3+' with component lists."
    );
  }
}

export function createPhase3PlusSummary(components: { phase: 3 | 4 | 5; population: number }[]): {
  totalPhase3Plus: number;
  components: { phase: 3 | 4 | 5; label: string; population: number }[];
} {
  const total = components.reduce((acc, c) => acc + c.population, 0);
  return {
    totalPhase3Plus: total,
    components: components.map(c => ({
      phase: c.phase,
      label: IPC_PHASE_LABELS[c.phase],
      population: c.population,
    }))
  };
}
