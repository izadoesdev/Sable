import { ArrowRight, Shield, Users, Clock, Eye, Lock, Zap, Dot } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <nav className="sable-border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
                <div className="sable-container">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Dot className="w-4 h-4" />
                            <span className="sable-mono text-lg font-bold">sable</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/sign-in" className="sable-btn-ghost">
                                sign_in
                            </Link>
                            <Link href="/sign-up" className="sable-btn-primary">
                                get_started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="sable-section">
                <div className="sable-container">
                    <div className="max-w-5xl mx-auto">
                        {/* Terminal Window */}
                        <div className="sable-fade-in mb-16">
                            <div className="border border-border bg-card">
                                {/* Terminal Header */}
                                <div className="flex items-center justify-between px-4 py-3 sable-border-b bg-muted">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="sable-mono text-xs text-muted-foreground">sable://privacy-first-social</span>
                                    <div className="w-16"></div>
                                </div>

                                {/* Terminal Content */}
                                <div className="p-8 font-mono text-sm space-y-3">
                                    <div className="flex items-center">
                                        <span className="text-green-400">$</span>
                                        <span className="ml-2 text-foreground">whoami</span>
                                    </div>
                                    <div className="text-muted-foreground pl-4">user@private-network</div>

                                    <div className="flex items-center mt-4">
                                        <span className="text-green-400">$</span>
                                        <span className="ml-2 text-foreground">cat /etc/social-media</span>
                                    </div>
                                    <div className="text-red-400 pl-4">permission denied: surveillance detected</div>

                                    <div className="flex items-center mt-4">
                                        <span className="text-green-400">$</span>
                                        <span className="ml-2 text-foreground">./sable --init</span>
                                    </div>
                                    <div className="space-y-1 pl-4">
                                        <div className="text-green-400">✓ end-to-end encryption enabled</div>
                                        <div className="text-green-400">✓ zero-knowledge architecture active</div>
                                        <div className="text-green-400">✓ algorithmic manipulation disabled</div>
                                        <div className="text-green-400">✓ privacy-first social network ready</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="text-center space-y-8 sable-fade-in-delay-1">
                            <h1 className="sable-display">
                                SABLE
                            </h1>
                            <div className="sable-heading-lg max-w-4xl mx-auto">
                                Privacy-first social network.<br />
                                Built on trust, not algorithms.
                            </div>
                            <p className="sable-body-lg max-w-2xl mx-auto">
                                The black-and-white antithesis of surveillance capitalism.
                                Where your posts are encrypted, your connections are authentic,
                                and your privacy is absolute.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sable-fade-in-delay-2">
                                <Link href="/sign-up" className="sable-btn-primary inline-flex items-center gap-3">
                                    initialize_network
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="#manifesto" className="sable-btn-secondary">
                                    read_manifesto
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manifesto Section */}
            <section id="manifesto" className="sable-section sable-border-t">
                <div className="sable-container">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="sable-heading-xl mb-6 sable-fade-in">
                                This is not another social feed
                            </h2>
                            <p className="sable-body-lg max-w-3xl mx-auto sable-fade-in-delay-1">
                                Sable exists to offer a quiet, secure, and minimal social experience—one where
                                users can follow, post, and connect without fear of exposure, manipulation, or surveillance.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                            <div className="sable-fade-in-delay-1">
                                <div className="border border-border p-8">
                                    <h3 className="sable-heading-sm mb-6 sable-mono text-red-400">WHAT_WE_REJECT:</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3 sable-body">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>Algorithmic manipulation of your timeline</span>
                                        </li>
                                        <li className="flex items-start gap-3 sable-body">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>Surveillance and data harvesting</span>
                                        </li>
                                        <li className="flex items-start gap-3 sable-body">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>Engagement metrics and social pressure</span>
                                        </li>
                                        <li className="flex items-start gap-3 sable-body">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>Content discovery and viral mechanics</span>
                                        </li>
                                        <li className="flex items-start gap-3 sable-body">
                                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                                            <span>Advertising and attention economy</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="sable-fade-in-delay-2">
                                <div className="border border-border p-8">
                                    <h3 className="sable-heading-sm mb-6 sable-mono text-green-400">WHAT_WE_BUILD:</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3 sable-body">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>End-to-end encrypted communication</span>
                                        </li>
                                        <li className="flex items-start gap-3 sable-body">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>Chronological, unmanipulated feeds</span>
                                        </li>
                                        <li className="flex items-start gap-3 sable-body">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>Follow-based, curated networks</span>
                                        </li>
                                        <li className="flex items-start gap-3 sable-body">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>Zero-knowledge server architecture</span>
                                        </li>
                                        <li className="flex items-start gap-3 sable-body">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>Authentic human connection</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Features */}
            <section className="sable-section sable-border-t">
                <div className="sable-container">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="sable-heading-lg mb-6 sable-fade-in">
                                Technical Architecture
                            </h2>
                            <p className="sable-body max-w-2xl mx-auto sable-fade-in-delay-1">
                                Built with privacy by design, not as an afterthought.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="sable-card sable-fade-in">
                                <div className="flex items-center gap-3 mb-4">
                                    <Lock className="w-6 h-6 text-foreground" />
                                    <h3 className="sable-heading-sm sable-mono">E2E_ENCRYPTION</h3>
                                </div>
                                <p className="sable-body-sm">
                                    Every message encrypted client-side using NaCl/libsodium.
                                    Server sees only encrypted blobs—zero knowledge of your content.
                                </p>
                            </div>

                            <div className="sable-card sable-fade-in-delay-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-6 h-6 text-foreground" />
                                    <h3 className="sable-heading-sm sable-mono">TRUST_NETWORK</h3>
                                </div>
                                <p className="sable-body-sm">
                                    Follow who you choose. Approve your followers.
                                    No algorithms decide what you see—only your trusted connections.
                                </p>
                            </div>

                            <div className="sable-card sable-fade-in-delay-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="w-6 h-6 text-foreground" />
                                    <h3 className="sable-heading-sm sable-mono">CHRONOLOGICAL</h3>
                                </div>
                                <p className="sable-body-sm">
                                    Posts appear in timestamp order. No engagement-based sorting.
                                    Your timeline is authentic and unmanipulated.
                                </p>
                            </div>

                            <div className="sable-card sable-fade-in">
                                <div className="flex items-center gap-3 mb-4">
                                    <Eye className="w-6 h-6 text-foreground" />
                                    <h3 className="sable-heading-sm sable-mono">NO_METRICS</h3>
                                </div>
                                <p className="sable-body-sm">
                                    No likes, shares, or public counts. No engagement pressure.
                                    Focus on authentic expression, not performance.
                                </p>
                            </div>

                            <div className="sable-card sable-fade-in-delay-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <Zap className="w-6 h-6 text-foreground" />
                                    <h3 className="sable-heading-sm sable-mono">MINIMAL_UI</h3>
                                </div>
                                <p className="sable-body-sm">
                                    Text-first, monochrome interface. No distractions,
                                    no dark patterns—just clean, focused communication.
                                </p>
                            </div>

                            <div className="sable-card sable-fade-in-delay-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-6 h-6 text-foreground" />
                                    <h3 className="sable-heading-sm sable-mono">ZERO_TRACKING</h3>
                                </div>
                                <p className="sable-body-sm">
                                    No analytics, no fingerprinting, no surveillance.
                                    Your privacy is protected by architecture, not policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="sable-section sable-border-t">
                <div className="sable-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <blockquote className="sable-heading-lg mb-8 sable-fade-in">
                            "In a world of noise, Sable offers silence.<br />
                            In a world of surveillance, Sable offers sanctuary."
                        </blockquote>
                        <div className="sable-fade-in-delay-1">
                            <p className="sable-body-lg mb-8">
                                Not for audiences. For people.
                            </p>
                            <Link href="/sign-up" className="sable-btn-primary inline-flex items-center gap-3">
                                join_the_resistance
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="sable-border-t py-12">
                <div className="sable-container">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                                <Dot className="w-4 h-4" />
                                <span className="sable-mono font-bold">sable</span>
                                <span className="text-muted-foreground sable-mono text-sm ml-4">
                                    privacy_by_design
                                </span>
                            </div>
                            <div className="flex items-center space-x-8 sable-mono text-sm">
                                <Link href="/privacy" className="hover:text-foreground transition-colors">
                                    privacy_policy
                                </Link>
                                <Link href="/security" className="hover:text-foreground transition-colors">
                                    security_audit
                                </Link>
                                <Link href="/docs" className="hover:text-foreground transition-colors">
                                    documentation
                                </Link>
                                <Link href="https://github.com/sable-social/sable" className="hover:text-foreground transition-colors">
                                    source_code
                                </Link>
                            </div>
                        </div>
                        <div className="pt-8 sable-border-t text-center sable-mono text-sm text-muted-foreground">
                            <p>© 2024 sable.social — built_with_privacy_by_design</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
} 