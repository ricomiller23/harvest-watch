import { describe, it, expect } from "vitest";
import { assertIndexVsPrice, validateTradeBasis, UnitMismatchError } from "../lib/units";
import { assertValidPhaseAggregation, createPhase3PlusSummary, DefinitionMismatchError } from "../lib/ipc";
import { FALLBACK_PRICE_INDICES, FALLBACK_MARKET_PRICES, FALLBACK_FOOD_SECURITY } from "../lib/fallback-data";

describe("HARVEST.WATCH — Unit, TradeBasis & Phase Invariant Tests", () => {
  it("strictly blocks combining index points with cash currency prices", () => {
    const indexItem = { unit: FALLBACK_PRICE_INDICES[0].unit };
    const priceItem = { unit: FALLBACK_MARKET_PRICES[0].unit };
    expect(() => assertIndexVsPrice(indexItem, priceItem)).toThrow(UnitMismatchError);
  });

  it("strictly enforces tradeBasis on market prices", () => {
    expect(() => validateTradeBasis("fob")).not.toThrow();
    expect(() => validateTradeBasis("invalid_basis")).toThrow(UnitMismatchError);
  });

  it("strictly blocks summing across IPC phases without Phase 3+ component disclosure", () => {
    expect(() => assertValidPhaseAggregation([3, 4, 5], false)).toThrow(DefinitionMismatchError);
    expect(() => assertValidPhaseAggregation([3, 4, 5], true)).not.toThrow();
  });

  it("verifies Phase 3+ summary contains complete component list", () => {
    const sudanEstimates = FALLBACK_FOOD_SECURITY.filter(s => s.country === "Sudan");
    const summary = createPhase3PlusSummary(
      sudanEstimates.map(s => ({ phase: s.phase as 3 | 4 | 5, population: s.population }))
    );
    expect(summary.components.length).toBe(3);
    expect(summary.totalPhase3Plus).toBe(26355000);
  });
});
