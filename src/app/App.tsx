import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/auth-context';
import { RoleSelection } from '@/app/components/screens/auth/role-selection';
import { Login } from '@/app/components/screens/auth/login';
import { AppLayout } from '@/app/components/layout/app-layout';
import { useState } from 'react';
import { UserRole } from '@/lib/auth-context';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/app/components/ui/sonner';

// Admin Screens
import { AdminDashboard } from '@/app/components/screens/admin/admin-dashboard';
import { ManageStudents } from '@/app/components/screens/admin/manage-students';
import { ManageCompanies } from '@/app/components/screens/admin/manage-companies';
import { ManageJobs } from '@/app/components/screens/admin/manage-jobs';
import { Reports } from '@/app/components/screens/admin/reports';

// Student Screens
import { StudentDashboard } from '@/app/components/screens/student/student-dashboard';
import { Tests } from '@/app/components/screens/student/tests';
import { Analytics } from '@/app/components/screens/student/analytics';
import { Companies } from '@/app/components/screens/student/companies';
import { Profile } from '@/app/components/screens/student/profile';

// Company Screens
import { CompanyDashboard } from '@/app/components/screens/company/company-dashboard';
import { PostJob } from '@/app/components/screens/company/post-job';
import { Applicants } from '@/app/components/screens/company/applicants';
import { ScheduleInterview } from '@/app/components/screens/company/schedule-interview';

function AuthFlow() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  if (!selectedRole) {
    return <RoleSelection onSelectRole={setSelectedRole} />;
  }

  return <Login role={selectedRole} onBack={() => setSelectedRole(null)} />;
}

function ProtectedRoute({ children, allowedRole }: { children: React.ReactNode; allowedRole: UserRole }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/auth" replace />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to={`/${user.role}`} replace />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/auth" element={!isAuthenticated ? <AuthFlow /> : <Navigate to="/" replace />} />

      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRole="admin">
            <AppLayout>
              <Routes>
                <Route index element={<AdminDashboard />} />
                <Route path="students" element={<ManageStudents />} />
                <Route path="companies" element={<ManageCompanies />} />
                <Route path="jobs" element={<ManageJobs />} />
                <Route path="reports" element={<Reports />} />
              </Routes>
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Student Routes */}
      <Route
        path="/student/*"
        element={
          <ProtectedRoute allowedRole="student">
            <AppLayout>
              <Routes>
                <Route index element={<StudentDashboard />} />
                <Route path="tests" element={<Tests />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="companies" element={<Companies />} />
                <Route path="profile" element={<Profile />} />
              </Routes>
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Company Routes */}
      <Route
        path="/company/*"
        element={
          <ProtectedRoute allowedRole="company">
            <AppLayout>
              <Routes>
                <Route index element={<CompanyDashboard />} />
                <Route path="post-job" element={<PostJob />} />
                <Route path="applicants" element={<Applicants />} />
                <Route path="schedule-interview" element={<ScheduleInterview />} />
              </Routes>
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Default Routes */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to={`/${useAuth().user?.role || 'auth'}`} replace />
          ) : (
            <Navigate to="/auth" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
          <Toaster />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}