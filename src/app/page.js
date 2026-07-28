import Layout from "@/components/layout/Layout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentTools from "@/components/dashboard/RecentTools";

export default function Home() {
  return (
    <Layout>
      <DashboardHeader />
      <DashboardStats />
      <RecentTools />
    </Layout>
  );
}