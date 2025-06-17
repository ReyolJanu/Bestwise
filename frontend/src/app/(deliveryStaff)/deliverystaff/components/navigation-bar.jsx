"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Package, AlertCircle, History } from "lucide-react"
import ProfileAvatar from "./profile-avatar"
import ProfilePage from "./profile-page"
import Image from "next/image";
import logo from "@/assets/logo.png";


export default function NavigationBar({ activeTab, onTabChange }) {
  // State management
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showProfilePage, setShowProfilePage] = useState(false)
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@delivery.com",
  })
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      message: "Order #12345 assigned to you",
      time: "2 minutes ago",
      type: "order",
      read: false,
    },
    {
      id: "2",
      message: "New complaint received for Order #12340",
      time: "15 minutes ago",
      type: "complaint",
      read: false,
    },
    {
      id: "3",
      message: "System maintenance scheduled for tonight",
      time: "1 hour ago",
      type: "system",
      read: true,
    },
    {
      id: "4",
      message: "Order #12338 completed successfully",
      time: "2 hours ago",
      type: "order",
      read: true,
    },
    {
      id: "5",
      message: "Weekly delivery report is ready",
      time: "1 day ago",
      type: "system",
      read: true,
    },
  ])

  // Refs for dropdown positioning
  const notificationRef = useRef(null)
  const profileRef = useRef(null)

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle notification click
  const handleNotificationClick = (notificationId) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === notificationId ? { ...notification, read: true } : notification)),
    )
  }

  // Handle profile save
  const handleProfileSave = () => {
    // Simulate API call to save user data
    console.log("Saving user data:", userData)
    // You would typically make an API call here
    alert("Profile updated successfully!")
  }

  // Handle logout
  const handleLogout = () => {
    // Simulate logout logic
    console.log("Logging out...")
    // You would typically clear auth tokens and redirect
    alert("Logged out successfully!")
  }

  // Get unread notification count
  const unreadCount = notifications.filter((n) => !n.read).length

  // Navigation items
  const navItems = [
    {
      id: "delivery",
      label: "Delivery Status",
      shortLabel: "Delivery",
      icon: Package,
    },
    {
      id: "complains",
      label: "Complains",
      shortLabel: "Complains",
      icon: AlertCircle,
    },
    {
      id: "history",
      label: "Delivery History",
      shortLabel: "History",
      icon: History,
    },
  ]

  return (
    <>
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Logo */}
            {/* <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-purple-600 italic">Best wishes</h1>
            </div> */}
            <div className="flex items-center">
              <Image src={logo} alt="Logo" width={130} className="h-auto" />
            </div>

            {/* Right: Notification and Profile */}
            <div className="flex items-center space-x-2">
              {/* Notification Dropdown */}
              <div className="relative" ref={notificationRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setShowNotifications(!showNotifications)
                    setShowProfile(false)
                  }}
                  className="relative hover:bg-purple-50"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                  )}
                </Button>

                {/* Notification Panel */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">No notifications</div>
                      ) : (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            onClick={() => handleNotificationClick(notification.id)}
                            className={`
                            p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors
                            ${!notification.read ? "bg-blue-50" : ""}
                          `}
                          >
                            <div className="flex items-start space-x-3">
                              <div
                                className={`
                              w-2 h-2 rounded-full mt-2 flex-shrink-0
                              ${
                                notification.type === "order"
                                  ? "bg-green-500"
                                  : notification.type === "complaint"
                                    ? "bg-red-500"
                                    : "bg-blue-500"
                              }
                            `}
                              />
                              <div className="flex-1 min-w-0">
                                <p
                                  className={`
                                text-sm ${!notification.read ? "font-semibold text-gray-900" : "text-gray-700"}
                              `}
                                >
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                              </div>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="p-3 border-t border-gray-200">
                      <Button variant="ghost" className="w-full text-sm text-purple-600 hover:bg-purple-50">
                        View All Notifications
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setShowProfile(!showProfile)
                    setShowNotifications(false)
                  }}
                  className="hover:bg-purple-50 p-1 rounded-full"
                >
                  <ProfileAvatar
                    src="/images/profile-avatar.png"
                    alt="Profile"
                    name={userData.name}
                    size={32}
                    className="border-2 border-purple-200"
                  />
                </Button>

                {/* Profile Panel */}
                {showProfile && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <ProfileAvatar src="/images/profile-avatar.png" alt="Profile" name={userData.name} size={48} />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{userData.name}</h3>
                          <p className="text-sm text-gray-500">{userData.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left bg-purple-100 hover:bg-purple-200"
                        onClick={() => {
                          setShowProfilePage(true)
                          setShowProfile(false)
                        }}
                      >
                        View Full Profile
                      </Button>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                          </label>
                          <Input
                            id="name"
                            type="text"
                            value={userData.name}
                            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={userData.email}
                            onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
                            className="w-full"
                          />
                        </div>
                        <Button onClick={handleProfileSave} variant="default" className="w-full">
                          Save Changes
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 border-t border-gray-200">
                      <Button
                        onClick={handleLogout}
                        variant="ghost"
                        className="w-full text-red-600 hover:bg-red-50 hover:text-red-700"
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs - Second Row */}
        <div className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 py-3">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.id

                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => onTabChange(item.id)}
                    className={`
                      flex items-center space-x-2 px-0 py-2 text-sm font-medium transition-all duration-200 border-b-2 rounded-none
                      ${
                        isActive
                          ? "text-purple-600 border-purple-600"
                          : "text-gray-600 hover:text-purple-600 border-transparent hover:border-purple-300"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.shortLabel}</span>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Page Modal */}
      {showProfilePage && <ProfilePage onClose={() => setShowProfilePage(false)} />}
    </>
  )
}
