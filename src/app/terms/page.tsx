import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Shield, Gavel } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
                            <Link href="/privacy" className="sable-btn-ghost">
                                privacy_policy
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
                            <Scale className="w-16 h-16 text-foreground" />
                        </div>
                        <h1 className="sable-heading-xl mb-6">Terms of Service</h1>
                        <p className="sable-body-lg mb-4">
                            Simple, fair terms for a privacy-first social network.
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
                            <h2 className="sable-heading-md mb-6 sable-mono">AGREEMENT_OVERVIEW</h2>
                            <div className="space-y-4 sable-body">
                                <p>
                                    By using Sable, you agree to these terms. We've written them in plain English
                                    because legal jargon is another form of surveillance, it hides what companies
                                    are really doing.
                                </p>
                                <p>
                                    <strong>TL;DR:</strong> Don't be malicious, respect others' privacy, and we'll
                                    provide you with a secure, private social network. That's it.
                                </p>
                            </div>
                        </div>

                        {/* The Service */}
                        <div className="border border-border p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <FileText className="w-6 h-6 text-foreground" />
                                <h2 className="sable-heading-md sable-mono">THE_SERVICE</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="sable-heading-sm mb-3 sable-mono">WHAT_SABLE_IS:</h3>
                                    <ul className="space-y-2 sable-body ml-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>An end-to-end encrypted social network</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>A platform for authentic, private communication</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>A tool for building trust-based networks</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>A refuge from algorithmic manipulation</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="sable-heading-sm mb-3 sable-mono">WHAT_SABLE_IS_NOT:</h3>
                                    <ul className="space-y-2 sable-body ml-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>A platform for harassment or abuse</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>A place for illegal content or activities</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>A data harvesting operation</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>A surveillance tool</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* User Responsibilities */}
                        <div className="border border-border p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="w-6 h-6 text-foreground" />
                                <h2 className="sable-heading-md sable-mono">YOUR_RESPONSIBILITIES</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="sable-heading-sm mb-3 sable-mono">ACCOUNT_SECURITY:</h3>
                                    <ul className="space-y-2 sable-body ml-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-muted-foreground mt-1 flex-shrink-0">•</span>
                                            <span>Keep your private keys secure, we can't recover them</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-muted-foreground mt-1 flex-shrink-0">•</span>
                                            <span>Use a strong, unique password</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-muted-foreground mt-1 flex-shrink-0">•</span>
                                            <span>Don't share your account credentials</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-muted-foreground mt-1 flex-shrink-0">•</span>
                                            <span>Report security vulnerabilities responsibly</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="sable-heading-sm mb-3 sable-mono">CONTENT_GUIDELINES:</h3>
                                    <div className="space-y-4 sable-body">
                                        <p>
                                            While we can't read your encrypted content, you're still responsible for
                                            what you post. Don't use Sable for:
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                                <span>Harassment, threats, or abuse</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                                <span>Illegal content or activities</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                                <span>Spam or automated posting</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                                <span>Impersonation or deception</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                                <span>Circumventing our security measures</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Privacy & Encryption */}
                        <div className="border border-border p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="w-6 h-6 text-foreground" />
                                <h2 className="sable-heading-md sable-mono">PRIVACY_&_ENCRYPTION</h2>
                            </div>

                            <div className="space-y-4 sable-body">
                                <p>
                                    <strong>Your data is yours.</strong> We provide the infrastructure, but your
                                    content remains encrypted and private.
                                </p>
                                <div className="bg-muted p-4 border border-border sable-mono text-sm">
                                    <div className="text-green-400">$ privacy_guarantee --verify</div>
                                    <div className="text-muted-foreground">✓ End-to-end encryption: MANDATORY</div>
                                    <div className="text-muted-foreground">✓ Zero-knowledge servers: VERIFIED</div>
                                    <div className="text-muted-foreground">✓ No content scanning: IMPOSSIBLE</div>
                                    <div className="text-muted-foreground">✓ No data selling: NEVER</div>
                                </div>
                                <p>
                                    We cannot and will not decrypt your content. If you lose your private keys,
                                    your data is permanently inaccessible, even to us.
                                </p>
                            </div>
                        </div>

                        {/* Service Availability */}
                        <div className="border border-border p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="w-6 h-6 text-foreground" />
                                <h2 className="sable-heading-md sable-mono">SERVICE_AVAILABILITY</h2>
                            </div>

                            <div className="space-y-4 sable-body">
                                <p>
                                    We strive for 99.9% uptime, but we're not perfect. Sable is provided "as is"
                                    without warranties.
                                </p>
                                <div>
                                    <h3 className="sable-heading-sm mb-2 sable-mono">MAINTENANCE:</h3>
                                    <p>We may temporarily suspend service for maintenance, security updates, or improvements.</p>
                                </div>
                                <div>
                                    <h3 className="sable-heading-sm mb-2 sable-mono">DATA_BACKUP:</h3>
                                    <p>While we backup encrypted data, you should export your data regularly as a precaution.</p>
                                </div>
                                <div>
                                    <h3 className="sable-heading-sm mb-2 sable-mono">SERVICE_TERMINATION:</h3>
                                    <p>We reserve the right to terminate accounts that violate these terms, but we'll provide 30 days notice when possible.</p>
                                </div>
                            </div>
                        </div>

                        {/* Intellectual Property */}
                        <div className="border border-border p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Gavel className="w-6 h-6 text-foreground" />
                                <h2 className="sable-heading-md sable-mono">INTELLECTUAL_PROPERTY</h2>
                            </div>

                            <div className="space-y-4 sable-body">
                                <div>
                                    <h3 className="sable-heading-sm mb-2 sable-mono">YOUR_CONTENT:</h3>
                                    <p>You own your content. By using Sable, you grant us only the technical rights necessary to provide the service (storing encrypted blobs, routing messages).</p>
                                </div>
                                <div>
                                    <h3 className="sable-heading-sm mb-2 sable-mono">OUR_CODE:</h3>
                                    <p>Sable's source code is open source under the MIT license. You can audit, modify, and self-host it.</p>
                                </div>
                                <div>
                                    <h3 className="sable-heading-sm mb-2 sable-mono">TRADEMARKS:</h3>
                                    <p>The Sable name and logo are our trademarks. Don't use them to confuse people about who's running a service.</p>
                                </div>
                            </div>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="border border-border p-8 mb-8">
                            <h2 className="sable-heading-md mb-6 sable-mono">LIMITATION_OF_LIABILITY</h2>
                            <div className="space-y-4 sable-body">
                                <p>
                                    We're not liable for damages beyond the amount you've paid us (which might be nothing).
                                    This includes data loss, service interruptions, or any other issues.
                                </p>
                                <p>
                                    <strong>However:</strong> We take security seriously. If our negligence causes a data
                                    breach, we'll be transparent about it and work to make things right.
                                </p>
                            </div>
                        </div>

                        {/* Changes to Terms */}
                        <div className="border border-border p-8 mb-8">
                            <h2 className="sable-heading-md mb-6 sable-mono">CHANGES_TO_TERMS</h2>
                            <div className="space-y-4 sable-body">
                                <p>
                                    We may update these terms occasionally. When we do:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                        <span>We'll notify you through the platform</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                        <span>Changes take effect 30 days after notification</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                        <span>You can export your data and leave if you disagree</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact & Disputes */}
                        <div className="border border-border p-8">
                            <h2 className="sable-heading-md mb-6 sable-mono">CONTACT_&_DISPUTES</h2>
                            <div className="space-y-4 sable-body">
                                <p>
                                    Questions about these terms? Contact us at:
                                </p>
                                <div className="bg-muted p-4 border border-border sable-mono text-sm">
                                    <div>legal@sable.social</div>
                                    <div className="text-muted-foreground mt-2">
                                        PGP Key: 0x1234567890ABCDEF (for encrypted communication)
                                    </div>
                                </div>
                                <p>
                                    <strong>Governing Law:</strong> These terms are governed by the laws of [Jurisdiction].
                                    We prefer to resolve disputes through discussion, but if needed, disputes will be
                                    handled in [Jurisdiction] courts.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    These terms were last updated on June 14, 2025. Previous versions are available
                                    in our public repository.
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
                            © 2025 sable.social ,  privacy_by_design
                        </p>
                        <div className="flex justify-center space-x-8 sable-mono text-sm">
                            <Link href="/" className="hover:text-foreground transition-colors">
                                home
                            </Link>
                            <Link href="/privacy" className="hover:text-foreground transition-colors">
                                privacy_policy
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