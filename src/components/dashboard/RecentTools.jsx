"use client";

import useTools from "@/hooks/useTools";

export default function RecentTools() {
  const { tools, loading } = useTools();

  if (loading) {
    return (
      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-semibold">
        Recent Tools
      </h2>

      {tools.length === 0 ? (
        <p className="text-gray-500">
          No tools found.
        </p>
      ) : (
        <div className="space-y-4">

          {tools.slice(0, 5).map((tool) => (
            <div
              key={tool.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <h3 className="font-semibold">
                  {tool.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {tool.category}
                </p>
              </div>

              <span className="rounded bg-gray-100 px-3 py-1 text-sm">
                {tool.status}
              </span>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}