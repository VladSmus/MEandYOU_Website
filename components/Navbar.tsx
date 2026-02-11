"use client";
import { useAuth } from "@/contexts/auth-context";
import Link from "next/link";

export default function Navbar() {
  const { signOut, user } = useAuth();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* ------ LOGO here -------- */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition duration-200 delay-100"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent flex items-center justify-between">
              <span className="text-red-900">ME</span>{" "}
              <img
                className="h-8 w-8"
                src="https://images.icon-icons.com/1880/PNG/512/iconfinder-love-4341304_120541.png"
                alt="heart_icon"
              />{" "}
              <span className="text-red-900">YOU</span>
            </span>
          </Link>

          {/*---- Only show navigation links if user is authenticated -----*/}
          {user && (
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/matches"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-300 font-medium transition-colors duration-200"
              >
                Discover
              </Link>
              <Link
                href="/matches/list"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors duration-200"
              >
                Matches
              </Link>
              <Link
                href="/chat"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-700 font-medium transition-colors duration-200"
              >
                Messages
              </Link>
              <Link
                href="/profile"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-900 font-medium transition-colors duration-200"
              >
                Profile
              </Link>
            </div>
          )}
          {/*--- Button Sign Out only for users (who was sign up) ---*/}
          {user ? (
            <button
              onClick={signOut}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign Out
            </button>
          ) : (
            <Link
              href="/auth"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
