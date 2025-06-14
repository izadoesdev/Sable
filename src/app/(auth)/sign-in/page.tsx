"use client"

import SableAuthCard from "@/app/(auth)/_components/auth-card"

export default function SignInPage() {
    return (
        <SableAuthCard
            title="Sign In"
            description="Welcome back to Sable"
            mode="sign-in"
        />
    )
}