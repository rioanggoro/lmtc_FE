"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Layers,
  ImageIcon,
  MessageSquare,
  Gift,
  TicketCheck,
  ChevronDown,
  Menu,
  X,
  LogOut,
  Settings,
} from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      name: "Banners",
      href: "/admin/banners",
      icon: <ImageIcon className="h-5 w-5" />,
    },
    {
      name: "Pop-ups",
      href: "/admin/popups",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      name: "Giveaways",
      href: "/admin/giveaways",
      icon: <Gift className="h-5 w-5" />,
    },
    {
      name: "Support Tickets",
      href: "/admin/support",
      icon: <TicketCheck className="h-5 w-5" />,
    },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <aside
        className={`fixed inset-y-0 z-50 flex-shrink-0 transform bg-white transition-all duration-300 ease-in-out lg:static lg:z-auto ${
          isSidebarOpen ? "w-64" : "w-20"
        } ${isMobileMenuOpen ? "left-0" : "-left-64"} lg:left-0`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex h-16 items-center justify-between bg-orange-500 px-4">
            <Link href="/admin" className="flex items-center">
              {isSidebarOpen ? (
                <span className="text-xl font-bold text-white">Admin Panel</span>
              ) : (
                <span className="text-xl font-bold text-white">AP</span>
              )}
            </Link>
            <button onClick={toggleSidebar} className="hidden rounded-md p-1 text-white hover:bg-orange-600 lg:block">
              <ChevronDown
                className={`h-5 w-5 transform transition-transform duration-200 ${
                  isSidebarOpen ? "rotate-0" : "rotate-180"
                }`}
              />
            </button>
            <button onClick={toggleMobileMenu} className="rounded-md p-1 text-white hover:bg-orange-600 lg:hidden">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-orange-100 text-orange-600"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                    }`}
                  >
                    {item.icon}
                    {isSidebarOpen && <span className="ml-3">{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="border-t border-gray-200 p-4">
            <Link
              href="/admin/settings"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              <Settings className="h-5 w-5" />
              {isSidebarOpen && <span className="ml-3">Settings</span>}
            </Link>
            <Link
              href="/logout"
              className="mt-2 flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              <LogOut className="h-5 w-5" />
              {isSidebarOpen && <span className="ml-3">Logout</span>}
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar backdrop */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={toggleMobileMenu}></div>
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:px-6">
          <button
            onClick={toggleMobileMenu}
            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-600 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <div className="relative">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-orange-500 text-center text-white">
                  <span className="leading-8">A</span>
                </div>
                <span className="font-medium">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
