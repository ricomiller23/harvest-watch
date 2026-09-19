export class UnitMismatchError extends Error {
  constructor(message: string) {
    super(`[HARVEST.WATCH UNIT VIOLATION] ${message}`);
    this.name = "UnitMismatchError";
  }
}

export type TradeBasis = "fob" | "cif" | "farmgate" | "retail";

/**
 * TRAP 1 GUARD: An index level (FAO Food Price Index points) is NOT a currency cash price.
 * Mixing index points and currency prices on a single chart or summing them throws!
 */
export function assertIndexVsPrice(itemA: { unit: string }, itemB: { unit: string }): void {
  const isAIndex = itemA.unit.includes("points") || itemA.unit.includes("index");
  const isBIndex = itemB.unit.includes("points") || itemB.unit.includes("index");
  if (isAIndex !== isBIndex) {
    throw new UnitMismatchError(
      "Cannot blend a trade-weighted price index (points) with cash commodity prices ($/tonne). The FAO FPI is not what consumers pay at retail."
    );
  }
}

export function validateTradeBasis(basis?: string): void {
  if (!basis || !["fob", "cif", "farmgate", "retail"].includes(basis)) {
    throw new UnitMismatchError("Every market price observation must specify an explicit quotation tradeBasis (fob, cif, farmgate, or retail).");
  }
}
