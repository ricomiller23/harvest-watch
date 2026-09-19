import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CountryPage({ params }: { params: { iso: string } }) {
  return (
    <div className="space-y-6 font-mono text-xs">
      <Link href="/" className="inline-flex items-center text-brand hover:underline">
        <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Board
      </Link>
      <div className="bg-white border border-border rounded-lg p-6">
        <h1 className="text-xl font-display font-bold text-text">Country Food Security: {params.iso.toUpperCase()}</h1>
        <p className="text-text-muted mt-1">IPC Phase population breakdown, crop conditions, and FX context.</p>
      </div>
    </div>
  );
}
