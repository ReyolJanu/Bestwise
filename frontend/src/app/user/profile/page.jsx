"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user } = useSelector(state => state.userState);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Profile</h1>

      {/* Profile Card */}
      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt="User Avatar"
          className="w-28 h-28 rounded-full object-cover border"
        />

        <div className="flex-1 w-full space-y-4">
          <div>
            <p className="text-xl font-semibold">{user.firstName}</p>
            <p className="text-gray-500">{user.email}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              defaultValue={user.phone || "Not set"}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              defaultValue={user.address || "Not set"}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition">
              Update Info
            </button>
            <button
              onClick={() => router.push("/orders")}
              className="border border-purple-600 text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-md transition"
            >
              My Orders
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Order Summary Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mt-8">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <p className="text-gray-700">
          Total Orders: {user.orders?.length || 0}
        </p>
        <p className="text-gray-700">
          Last Order: {user.orders?.[0]?.date || "N/A"}
        </p>
      </div>
    </div>
  );
}
