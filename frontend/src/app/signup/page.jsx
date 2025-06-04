"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#ffffff] rounded-2xl p-8 shadow-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#822be2] to-[#822be2] bg-clip-text text-transparent mb-2">
            Best wishes
          </h1>
          <h2 className="text-xl font-semibold text-[#000000]">Create an account</h2>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-[#000000]">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-[#818181] bg-[#ffffff] text-[#5c5c5c] focus:outline-none focus:ring-2 focus:ring-[#822be2] focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-[#000000]">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-[#818181] bg-[#ffffff] text-[#5c5c5c] focus:outline-none focus:ring-2 focus:ring-[#822be2] focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile Number and Zip Code */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="mobile" className="block text-sm font-medium text-[#000000]">
                Mobile Number
              </label>
              <input
                id="mobile"
                type="tel"
                className="w-full px-3 py-2 rounded-lg border border-[#818181] bg-[#ffffff] text-[#5c5c5c] focus:outline-none focus:ring-2 focus:ring-[#822be2] focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="zipCode" className="block text-sm font-medium text-[#000000]">
                Zip code
              </label>
              <input
                id="zipCode"
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-[#818181] bg-[#ffffff] text-[#5c5c5c] focus:outline-none focus:ring-2 focus:ring-[#822be2] focus:border-transparent"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-[#000000]">
              Address
            </label>
            <input
              id="address"
              type="text"
              className="w-full px-3 py-2 rounded-lg border border-[#818181] bg-[#ffffff] text-[#5c5c5c] focus:outline-none focus:ring-2 focus:ring-[#822be2] focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-[#000000]">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 rounded-lg border border-[#818181] bg-[#ffffff] text-[#5c5c5c] focus:outline-none focus:ring-2 focus:ring-[#822be2] focus:border-transparent"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-[#000000]">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 rounded-lg border border-[#818181] bg-[#ffffff] text-[#5c5c5c] focus:outline-none focus:ring-2 focus:ring-[#822be2] focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#818181] hover:text-[#5c5c5c] focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Re-enter Password */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#000000]">
              Re-enter Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 rounded-lg border border-[#818181] bg-[#ffffff] text-[#5c5c5c] focus:outline-none focus:ring-2 focus:ring-[#822be2] focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#818181] hover:text-[#5c5c5c] focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-2 pt-2">
            <input
              id="terms"
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-[#818181] text-[#822be2] focus:ring-[#822be2] focus:ring-2"
            />
            <label htmlFor="terms" className="text-sm text-[#000000] leading-relaxed">
              I agree to our{" "}
              <Link href="#" className="text-[#274690] underline hover:no-underline">
                Terms of use
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#274690] underline hover:no-underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#822be2] hover:bg-[#822be2]/90 text-white rounded-lg py-3 mt-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#822be2] focus:ring-offset-2"
          >
            Create an account
          </button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-[#5c5c5c] mt-4">
            Already have an Account?{" "}
            <Link href="#" className="text-[#274690] underline hover:no-underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
