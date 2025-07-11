"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import { toast } from "react-hot-toast"

export default function OtpPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ""
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!otp.trim()) {
      toast.error("Please enter the OTP")
      return
    }
    setLoading(true)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/verify-otp`, { email, otp })
      if (response.data.success) {
        toast.success("Registration successful! Please login.")
        router.push("/login")
      } else {
        toast.error(response.data.message || "Invalid OTP")
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Enter OTP</h2>
        <p className="mb-4 text-center text-sm text-gray-600">An OTP has been sent to <span className="font-medium">{email}</span></p>
        <input
          type="text"
          value={otp}
          onChange={e => setOtp(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4"
          placeholder="Enter OTP"
          maxLength={6}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#822be2] text-white py-2 rounded-lg font-medium disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  )
}
