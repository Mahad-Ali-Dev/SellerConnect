import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function IntegrationsPage() {
    return (
        <div className="bg-[#020617] min-h-screen py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
                        Integreer met je <span className="gradient-text">favoriete tools</span>
                    </h1>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        Verbind SellerConnect naadloos met de platforms die je al gebruikt voor een efficiënte workflow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                    {[
                        { name: "Bol.com", desc: "Volledige synchronisatie van aanbod en orders." },
                        { name: "Shopify", desc: "Koppel je webshop voor centraal voorraadbeheer." },
                        { name: "WooCommerce", desc: "WordPress integratie voor naadloze verkoop." },
                        { name: "Amazon", desc: "Breid je bereik uit naar internationale markten." },
                        { name: "Exact Online", desc: "Automatiseer je boekhouding en administratie." },
                        { name: "SendCloud", desc: "Verzendlabels en track & trace automatisering." }
                    ].map((tool, i) => (
                        <div key={i} className="bg-[#0F172A]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#1E293B] hover:border-[#6366F1]/50 transition-colors">
                            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{tool.name}</h3>
                            <p className="text-[#94A3B8] text-sm">{tool.desc}</p>
                            <div className="mt-4 flex items-center text-[#22C55E] text-xs font-medium">
                                <CheckCircle2 className="w-4 h-4 mr-1" />
                                Beschikbaar
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/contact">
                        <Button size="lg" className="rounded-xl px-8 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white">
                            Meer Integraties Aanvragen
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
