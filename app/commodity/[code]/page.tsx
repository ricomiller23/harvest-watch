import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CommodityPage({ params }: { params: { code: string } }) {
  return (
    <div className="space-y-6 font-mono text-xs">
      <Link href="/" className="inline-flex items-center text-brand hover:underline">
        <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Three-Band Board
      </Link>
      <div className="bg-white border border-border rounded-lg p-6">
        <h1 className="text-xl font-display font-bold text-text">Commodity Profile: {params.code.toUpperCase()}</h1>
        <p className="text-text-muted mt-1">Cash price quotes, trade basis, and WASDE production rounds.</p>
      </div>
    </div>
  );
}
