import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="mb-5 flex items-center justify-between">

        <div className="rounded-lg bg-gray-100 p-3">
          <Icon
            size={24}
            className="text-gray-700"
          />
        </div>

        <ArrowUpRight
          size={18}
          className="text-gray-400"
        />

      </div>

      <h3 className="text-sm text-gray-500">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>

    </div>
  );
}