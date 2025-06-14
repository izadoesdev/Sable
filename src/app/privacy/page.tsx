import { ArrowLeft, Shield, Lock, Eye, Database, Server, Users } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <nav className="sable-border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
                <div className="sable-container">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="sable-mono text-lg font-bold">sable</span>
                        </Link>
                        <div className="flex items-center space-x-4">
                            <Link href="/terms" className="sable-btn-ghost">
                                terms_of_service
                            </Link>
                            <Link href="/auth/signup" className="sable-btn-primary">
                                get_started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <section className="sable-section">
                <div className="sable-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-8">
                            <Shield className="w-16 h-16 text-foreground" />
                        </div>
                        <h1 className="sable-heading-xl mb-6">Privacy Policy</h1>
                        <p className="sable-body-lg mb-4">
                            Your privacy is not a product. It's a fundamental right.
                        </p>
                        <div className="sable-mono text-sm text-muted-foreground">
                            Last updated: June 14, 2025
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="sable-border-t">
                <div className="sable-container py-16">
                    <div className="max-w-4xl mx-auto">

                        {/* Introduction */}
                        <div className="border border-border p-8 mb-8">
                            <h2 className="sable-heading-md mb-6 sable-mono">OUR_COMMITMENT</h2>
                            <div className="space-y-4 sable-body">
                                <p>
                                    Sable is built on the principle that your privacy is absolute. This policy explains
                                    how we protect your data, what we collect (spoiler: almost nothing), and why our
                                    architecture makes surveillance impossible.
                                </p>
                                <p>
                                    <strong>TL;DR:</strong> We can't read your content even if we wanted to. Your data
                                    is encrypted before it leaves your device, and we only store encrypted blobs.
                                </p>
                            </div>
                        </div>

                        {/* What We Collect */}
                        <div className="border border-border p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Database className="w-6 h-6 text-foreground" />
                                <h2 className="sable-heading-md sable-mono">WHAT_WE_COLLECT</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="sable-heading-sm mb-3 text-green-400 sable-mono">ENCRYPTED_DATA:</h3>
                                    <ul className="space-y-2 sable-body ml-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>Your posts (encrypted client-side before transmission)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>Follow relationships (encrypted)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>Profile information (encrypted)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>Message metadata (timestamps, encrypted)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="sable-heading-sm mb-3 text-muted-foreground sable-mono">MINIMAL_METADATA:</h3>
                                    <ul className="space-y-2 sable-body ml-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-muted-foreground mt-1 flex-shrink-0">•</span>
                                            <span>Account creation timestamp</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-muted-foreground mt-1 flex-shrink-0">•</span>
                                            <span>Last login timestamp</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-muted-foreground mt-1 flex-shrink-0">•</span>
                                            <span>Server-side encryption keys (for your encrypted data)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="sable-heading-sm mb-3 text-red-400 sable-mono">WHAT_WE_NEVER_COLLECT:</h3>
                                    <ul className="space-y-2 sable-body ml-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>Your real name or personal information</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>IP addresses or location data</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>Analytics, tracking, or behavioral data</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>Device fingerprints or browser information</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>Third-party cookies or trackers</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* How We Protect Your Data */}
                        <div className="border border-border p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Lock className="w-6 h-6 text-foreground" />
                                <h2 className="sable-heading-md sable-mono">HOW_WE_PROTECT_YOUR_DATA</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="sable-heading-sm mb-3 sable-mono">END_TO_END_ENCRYPTION:</h3>
                                    <p className="sable-body mb-3">
                                        All your content is encrypted on your device using industry-standard NaCl/libsodium
                                        cryptography before it ever leaves your browser. We literally cannot read your posts,
                                        messages, or profile information.
                                    </p>
                                    <div className="bg-muted p-4 border border-border sable-mono text-sm">
                                        <div className="text-green-400">$ encryption_status --verify</div>
                                        <div className="text-muted-foreground">✓ Client-side encryption: ACTIVE</div>
                                        <div className="text-muted-foreground">✓ Zero-knowledge server: VERIFIED</div>
                                        <div className="text-muted-foreground">✓ Perfect forward secrecy: ENABLED</div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="sable-heading-sm mb-3 sable-mono">ZERO_KNOWLEDGE_ARCHITECTURE:</h3>
                                    <p className="sable-body">
                                        Our servers only store encrypted blobs. Even if our servers were compromised,
                                        your data would remain secure because we don't have the keys to decrypt it.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="sable-heading-sm mb-3 sable-mono">MINIMAL_DATA_RETENTION:</h3>
                                    <p className="sable-body">
                                        We only keep data as long as necessary for the service to function. Deleted
                                        posts are permanently removed from our servers within 24 hours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Data Sharing */}
                        <div className="border border-border p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="w-6 h-6 text-foreground" />
                                <h2 className="sable-heading-md sable-mono">DATA_SHARING</h2>
                            </div>

                            <div className="space-y-4 sable-body">
                                <p>
                                    <strong>We don't share your data. Period.</strong>
                                </p>
                                <p>
                                    Since we can't read your encrypted content, we have nothing meaningful to share
                                    with advertisers, governments, or anyone else. Your data stays with you.
                                </p>
                                <p>
                                    The only exception: If legally required by a valid court order, we may provide
                                    the encrypted blobs we store. However, without your private keys (which we don't
                                    have), this data is useless.
                                </p>
                            </div>
                        </div>

                        {/* Your Rights */}
                        <div className="border border-border p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Eye className="w-6 h-6 text-foreground" />
                                <h2 className="sable-heading-md sable-mono">YOUR_RIGHTS</h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="sable-heading-sm mb-2 sable-mono">ACCESS:</h3>
                                    <p className="sable-body">You can export all your data at any time through your account settings.</p>
                                </div>
                                <div>
                                    <h3 className="sable-heading-sm mb-2 sable-mono">DELETION:</h3>
                                    <p className="sable-body">Delete your account and all associated data permanently at any time.</p>
                                </div>
                                <div>
                                    <h3 className="sable-heading-sm mb-2 sable-mono">PORTABILITY:</h3>
                                    <p className="sable-body">Export your encrypted data to move to another service or self-host.</p>
                                </div>
                                <div>
                                    <h3 className="sable-heading-sm mb-2 sable-mono">TRANSPARENCY:</h3>
                                    <p className="sable-body">Our source code is open for audit. Verify our privacy claims yourself.</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="border border-border p-8">
                            <h2 className="sable-heading-md mb-6 sable-mono">CONTACT_US</h2>
                            <div className="space-y-4 sable-body">
                                <p>
                                    Questions about this privacy policy? Contact us at:
                                </p>
                                <div className="bg-muted p-4 border border-border sable-mono text-sm">
                                    <div>privacy@sable.social</div>
                                    <div className="text-muted-foreground mt-2">
                                        PGP Key: 0x1234567890ABCDEF (for encrypted communication)
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    This policy was last updated on June 14, 2025. We'll notify users of any
                                    material changes through the platform.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="sable-border-t py-12">
                <div className="sable-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="sable-mono text-sm text-muted-foreground mb-4">
                            © 2025 sable.social — privacy_by_design
                        </p>
                        <div className="flex justify-center space-x-8 sable-mono text-sm">
                            <Link href="/" className="hover:text-foreground transition-colors">
                                home
                            </Link>
                            <Link href="/terms" className="hover:text-foreground transition-colors">
                                terms_of_service
                            </Link>
                            <Link href="/security" className="hover:text-foreground transition-colors">
                                security_audit
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
} 