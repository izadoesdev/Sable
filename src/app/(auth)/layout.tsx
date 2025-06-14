import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen bg-background text-foreground flex flex-col">
            {/* Minimal Navigation */}
            <nav className="border-b border-border">
                <div className="px-6 py-4">
                    <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity w-fit">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="sable-mono text-lg font-bold">sable</span>
                    </Link>
                </div>
            </nav>

            {/* Centered Content */}
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-sm">
                    {children}
                </div>
            </div>
        </div>
    );
}