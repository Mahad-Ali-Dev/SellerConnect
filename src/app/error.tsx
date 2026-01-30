'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
            <div className="absolute inset-0 animated-grid opacity-30" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-[128px]" />

            <div className="relative z-10 text-center max-w-md">
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">
                    Er ging iets mis
                </h1>

                <p className="text-[#94A3B8] mb-8">
                    Er is een onverwachte fout opgetreden. Probeer de pagina te vernieuwen of ga terug naar de homepage.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        onClick={reset}
                        className="h-12 px-6 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white rounded-xl"
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Opnieuw proberen
                    </Button>

                    <Link href="/">
                        <Button
                            variant="outline"
                            className="h-12 px-6 border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50 rounded-xl"
                        >
                            <Home className="w-5 h-5 mr-2" />
                            Naar Homepage
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
