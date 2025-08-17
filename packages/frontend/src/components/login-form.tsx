"use client"

import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  email: string
  password: string
  error: string | null
  loading: boolean
  onEmailChange: (v: string) => void
  onPasswordChange: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  onGoogleSignIn?: () => void
  className?: string
}

const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm p-1 transition-colors focus-within:border-violet-400/70">
    {children}
  </div>
)

export function LoginForm({
  email,
  password,
  error,
  loading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  className,
}: Props) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <div className="relative w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden p-8">
          {/* Header */}
        
          {/* Form */}
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="email" className="text-xs font-medium text-gray-500">
                Email
              </label>
              <GlassInputWrapper>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => onEmailChange(e.currentTarget.value)}
                  className="w-full bg-transparent text-sm p-3 rounded-xl focus:outline-none"
                />
              </GlassInputWrapper>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="password" className="text-xs font-medium text-gray-500">
                Senha
              </label>
              <GlassInputWrapper>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => onPasswordChange(e.currentTarget.value)}
                    className="w-full bg-transparent text-sm p-3 pr-10 rounded-xl focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-2 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-400 hover:text-gray-700 transition-colors" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400 hover:text-gray-700 transition-colors" />
                    )}
                  </button>
                </div>
              </GlassInputWrapper>
            </div>

            {/* Error */}
            {error && <p className="text-sm text-red-600">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="animate-element animate-delay-600 w-full rounded-2xl bg-blue-600 py-3 text-white font-semibold flex items-center justify-center"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
