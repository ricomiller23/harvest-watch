import { NextResponse } from "next/server";
import { HARVEST_SOURCES } from "@/lib/fallback-data";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    sourcesCount: HARVEST_SOURCES.length,
    activeSources: HARVEST_SOURCES.filter(s => s.enabled).length
  });
}
