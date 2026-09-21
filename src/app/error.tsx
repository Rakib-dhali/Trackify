"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 px-6 py-12 text-center">
      <div className="flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full mb-8 shadow-sm animate-pulse">
        <AlertCircle className="w-10 h-10" />
      </div>

      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        Something went wrong!
      </h1>

      <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 text-lg">
        An unexpected error occurred while loading this page. Our team has been notified.
      </p>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 mb-8 max-w-lg w-full text-left overflow-hidden shadow-sm">
        <p className="text-xs font-mono text-red-600 dark:text-red-400 break-words">
          {error.message || "Unknown error occurred"}
        </p>
      </div>

      <button
        onClick={() => reset()}
        className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer"
      >
        <RotateCcw className="w-4 h-4" />
        <span>Try again</span>
      </button>
    </div>
  );
}
