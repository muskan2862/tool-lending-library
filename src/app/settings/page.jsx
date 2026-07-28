"use client";

import Layout from "@/components/layout/Layout";

export default function SettingsPage() {
  return (
    <Layout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500">
            Application configuration and system information.
          </p>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-6 text-xl font-semibold">
            Library Information
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium">
                Library Name
              </span>

              <span>
                Tool Lending Library
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium">
                Administrator
              </span>

              <span>
                Library Staff
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium">
                Version
              </span>

              <span>
                1.0.0
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium">
                Database
              </span>

              <span className="text-green-600 font-semibold">
                Connected
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">
                Backend
              </span>

              <span>
                Supabase
              </span>
            </div>

          </div>

        </div>

      </div>

    </Layout>
  );
}