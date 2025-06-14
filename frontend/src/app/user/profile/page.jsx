"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { FiMail, FiPhone, FiMapPin, FiShoppingBag, FiLogOut, FiEdit2, FiUser } from "react-icons/fi";
import Navbar from "@/app/components/navbar/page";

export default function ProfilePage() {
  const { user } = useSelector(state => state.userState);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      setTimeout(() => setIsLoading(false), 800);
    }
  }, [user, router]);

  if (!user) return null;

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-80px)] bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">My Account</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your personal information and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={user.avatar || "/default-avatar.png"}
                      alt="Profile"
                      className="w-32 h-32 rounded-lg object-cover border border-gray-200"
                    />
                    <button 
                      className="absolute bottom-0 right-0 bg-white p-2 rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                      title="Change photo"
                    >
                      <FiEdit2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <h2 className="mt-4 text-xl font-medium text-gray-900">{user.firstName}</h2>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <FiMail className="w-4 h-4 mr-2" />
                    <span>{user.email}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-4">
                    <button 
                      onClick={() => router.push("/orders")}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <FiShoppingBag className="w-5 h-5" />
                      <span>View Orders</span>
                    </button>
                    <button 
                      onClick={() => {
                        // Add logout handler
                      }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition-colors"
                    >
                      <FiLogOut className="w-5 h-5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Information */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiPhone className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          defaultValue={user.phone || ""}
                          placeholder="Add phone number"
                          className="pl-10 w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMapPin className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          defaultValue={user.address || ""}
                          placeholder="Add address"
                          className="pl-10 w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-200 rounded-md">
                          <FiShoppingBag className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total Orders</p>
                          <p className="text-2xl font-semibold text-gray-900 mt-1">{user.orders?.length || 0}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-200 rounded-md">
                          <FiUser className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Last Order</p>
                          <p className="text-lg font-medium text-gray-900 mt-1">{user.orders?.[0]?.date || "N/A"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
