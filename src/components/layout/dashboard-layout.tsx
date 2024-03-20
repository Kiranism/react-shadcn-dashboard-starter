import { useState } from 'react';
import Sidebar from '../shared/sidebar';
import Header from '../shared/header';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<Boolean>(false);

  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      {/* <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      /> */}
      <Sidebar />
      <div className="flex w-0 flex-1 flex-col overflow-hidden">
        <div className="relative z-10 flex h-20 flex-shrink-0 bg-white shadow">
          <button
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            {/* <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
          <Header />
        </div>
        <main className="relative flex-1 overflow-y-auto bg-white focus:outline-none ">
          {children}
        </main>
      </div>
    </div>
  );
}
