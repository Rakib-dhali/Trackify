"use client";

import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 px-6 py-12 text-center">
      <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full mb-8 shadow-sm">
        <AlertTriangle className="w-10 h-10" />
      </div>
      
      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        404 - Page Not Found
      </h1>
      
      <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 text-lg">
        Oops! The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
