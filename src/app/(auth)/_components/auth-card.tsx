"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { signIn, signUp } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Loader2, Mail, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SableAuthCard({
    title,
    description,
    mode = "sign-in",
}: {
    title: string;
    description: string;
    mode?: "sign-in" | "sign-up";
}) {
    const [googleLoading, setGoogleLoading] = useState(false);
    const [emailLoading, setEmailLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    });

    const handleEmailAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmailLoading(true);

        try {
            if (mode === "sign-up") {
                await signUp.email({
                    email: formData.email,
                    password: formData.password,
                    name: formData.name,
                    callbackURL: "/dashboard",
                });
            } else {
                await signIn.email({
                    email: formData.email,
                    password: formData.password,
                    callbackURL: "/dashboard",
                });
            }
        } catch (error) {
            console.error("Auth error:", error);
        } finally {
            setEmailLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
                <h1 className="sable-mono text-2xl font-bold">{title}</h1>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>

            {/* Email & Password Form */}
            <form onSubmit={handleEmailAuth} className="space-y-4">
                {mode === "sign-up" && (
                    <div>
                        <Input
                            type="text"
                            placeholder="Full name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            required
                            disabled={emailLoading}
                        />
                    </div>
                )}
                <div>
                    <Input
                        type="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        disabled={emailLoading}
                    />
                </div>
                <div className="relative">
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                        required
                        disabled={emailLoading}
                        className="pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        disabled={emailLoading}
                    >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
                <Button
                    type="submit"
                    className="w-full h-11"
                    disabled={emailLoading}
                >
                    {emailLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        mode === "sign-up" ? "Create Account" : "Sign In"
                    )}
                </Button>
            </form>

            {/* Divider */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>

            {/* Auth Providers */}
            <div className="space-y-3">
                <SableSignInButton
                    title="Google"
                    provider="google"
                    loading={googleLoading}
                    setLoading={setGoogleLoading}
                    callbackURL="/dashboard"
                    icon={<Mail className="w-4 h-4" />}
                />
            </div>

            {/* Footer */}
            <div className="text-center pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                    {mode === "sign-in" ? (
                        <>
                            Need an account?{" "}
                            <Link href="/sign-up" className="text-foreground hover:underline">
                                Sign up
                            </Link>
                        </>
                    ) : (
                        <>
                            Have an account?{" "}
                            <Link href="/sign-in" className="text-foreground hover:underline">
                                Sign in
                            </Link>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}

const SableSignInButton = ({
    title,
    provider,
    loading,
    setLoading,
    callbackURL,
    icon,
}: {
    title: string;
    provider: "google";
    loading: boolean;
    setLoading: (loading: boolean) => void;
    callbackURL: string;
    icon: React.ReactNode;
}) => {
    return (
        <Button
            variant="outline"
            className={cn(
                "w-full gap-3 h-11",
                "border-border hover:bg-muted/50 transition-colors"
            )}
            disabled={loading}
            onClick={async () => {
                await signIn.social(
                    {
                        provider: provider,
                        callbackURL: callbackURL
                    },
                    {
                        onRequest: (ctx) => {
                            setLoading(true);
                        },
                    },
                );
            }}
        >
            {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
                icon
            )}
            Continue with {title}
        </Button>
    )
} 