import Sidebar from "@/components/Sidebar";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-[var(--yor-void)] text-[var(--yor-white)]">
        <div className="flex min-w-0 pt-24">
          {/* FIXED SIDEBAR */}
          <div className="fixed left-0 top-24 hidden h-[calc(100vh-6rem)] w-[22rem] lg:block">
            <Sidebar />
          </div>

          {/* SCROLLABLE MAIN CONTENT */}
          <main className="ml-0 min-w-0 flex-1 overflow-y-auto p-4 sm:p-6 lg:ml-[22rem] lg:p-8 2xl:p-10">
            <div className="mx-auto w-full max-w-[84rem]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}
