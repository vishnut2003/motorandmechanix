'use client';

import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black p-8">
      <div className="text-center max-w-md">
        {/* Offline Icon */}
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a5 5 0 01-.707-7.072m5.657 5.658L8.464 8.464M4.757 4.757a9 9 0 000 12.728m12.728-12.728L21 3m-3.828 3.828a5 5 0 00-5.657 5.656m0 0L3 21"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">You&apos;re Offline</h1>

        {/* Description */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          It looks like you&apos;ve lost your internet connection. Please check
          your network settings and try again.
        </p>

        {/* Retry Button */}
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 mb-4"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Try Again
        </button>

        {/* Home Link */}
        <div>
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-800 transition-colors duration-200 text-sm"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Brand Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">Motor Mechanix</p>
        </div>
      </div>
    </div>
  );
}
