import DashboardLayout from '@/components/layout/dashboard-layout';
import SignInPage from '@/pages/auth/signin';
import DashboardPage from '@/pages/dashboard';
import StudentPage from '@/pages/students';
import StudentDetailPage from '@/pages/students/StudentDetailPage';
import { Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true
        },
        {
          path: 'student',
          element: <StudentPage />
        },
        {
          path: 'student/details',
          element: <StudentDetailPage />
        }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: <SignInPage />,
      index: true
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
