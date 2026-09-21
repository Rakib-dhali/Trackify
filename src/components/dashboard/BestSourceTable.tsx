import { AnalyticsData } from "@/types";

interface BestSourceTableProps {
  analytics: AnalyticsData | null;
}

export function BestSourceTable({ analytics }: BestSourceTableProps) {
  const data = analytics?.bySource ?? [];

  if (data.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 text-center">
        <p className="text-sm text-slate-400 dark:text-slate-500">
          No source data available yet. Start adding applications!
        </p>
      </div>
    );
  }

  // Sort by count descending
  const sorted = [...data].sort((a, b) => b._count - a._count);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Applications by Source
        </h3>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
          Which channels you&apos;re using most
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide">
              <th className="text-left px-5 py-3 font-medium">Source</th>
              <th className="text-right px-5 py-3 font-medium">Applications</th>
              <th className="text-right px-5 py-3 font-medium">Share</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {sorted.map((row) => {
              const total = data.reduce((sum, r) => sum + r._count, 0);
              const share =
                total > 0
                  ? Math.round((row._count / total) * 100)
                  : 0;
              return (
                <tr
                  key={row.source ?? "unknown"}
                  className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-slate-700 dark:text-slate-200">
                    {row.source || "Unknown"}
                  </td>
                  <td className="px-5 py-3 text-right text-slate-600 dark:text-slate-300">
                    {row._count}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${
                        share >= 30
                          ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300"
                          : share >= 15
                          ? "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {share}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
