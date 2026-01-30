'use client'

import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body style={{ backgroundColor: '#020617', margin: 0 }}>
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                }}>
                    <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                        }}>
                            <AlertTriangle style={{ width: '32px', height: '32px', color: '#EF4444' }} />
                        </div>

                        <h1 style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: '#F8FAFC',
                            marginBottom: '1rem',
                        }}>
                            Er ging iets mis
                        </h1>

                        <p style={{
                            color: '#94A3B8',
                            marginBottom: '2rem',
                        }}>
                            Er is een kritieke fout opgetreden. Probeer de pagina te vernieuwen.
                        </p>

                        <button
                            onClick={reset}
                            style={{
                                height: '48px',
                                padding: '0 24px',
                                background: 'linear-gradient(to right, #6366F1, #22D3EE)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: 500,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <RefreshCw style={{ width: '20px', height: '20px' }} />
                            Opnieuw proberen
                        </button>
                    </div>
                </div>
            </body>
        </html>
    )
}
