import { NextResponse } from "next/server";
import { FALLBACK_PRICE_INDICES, FALLBACK_FORECASTS, FALLBACK_FOOD_SECURITY } from "@/lib/fallback-data";

export async function GET() {
  return NextResponse.json({
    indices: FALLBACK_PRICE_INDICES,
    forecasts: FALLBACK_FORECASTS,
    foodSecurity: FALLBACK_FOOD_SECURITY,
    asOf: new Date().toISOString()
  });
}
