import React from 'react';
import { useAuth } from '@/lib/auth-context';
import { cn } from '@/app/components/ui/utils';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  FileText,
  ClipboardList,
  BarChart3,
  GraduationCap,
  User,
  FileUser,
  UserPlus,
  CalendarCheck,
} from 'lucide-react';

interface NavItem {
  title: string;
  icon: React.ElementType;
  href: string;
  role: string[];
}

const navItems: NavItem[] = [
  // Admin routes
  { title: 'Dashboard', icon: LayoutDashboard, href: '/admin', role: ['admin'] },
  { title: 'Students', icon: Users, href: '/admin/students', role: ['admin'] },
  { title: 'Companies', icon: Building2, href: '/admin/companies', role: ['admin'] },
  { title: 'Jobs', icon: Briefcase, href: '/admin/jobs', role: ['admin'] },
  { title: 'Reports', icon: FileText, href: '/admin/reports', role: ['admin'] },
  
  // Student routes
  { title: 'Dashboard', icon: LayoutDashboard, href: '/student', role: ['student'] },
  { title: 'Tests', icon: ClipboardList, href: '/student/tests', role: ['student'] },
  { title: 'Analytics', icon: BarChart3, href: '/student/analytics', role: ['student'] },
  { title: 'Companies', icon: GraduationCap, href: '/student/companies', role: ['student'] },
  { title: 'Profile', icon: User, href: '/student/profile', role: ['student'] },
  
  // Company routes
  { title: 'Dashboard', icon: LayoutDashboard, href: '/company', role: ['company'] },
  { title: 'Post Job', icon: FileUser, href: '/company/post-job', role: ['company'] },
  { title: 'Applicants', icon: UserPlus, href: '/company/applicants', role: ['company'] },
  { title: 'Schedule Interview', icon: CalendarCheck, href: '/company/schedule-interview', role: ['company'] },
];

export function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  const filteredItems = navItems.filter(item => 
    user?.role && item.role.includes(user.role)
  );

  return (
    <aside className="w-64 border-r border-sidebar-border bg-sidebar flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-sidebar-foreground">PlacementPro</h1>
            <p className="text-xs text-muted-foreground">
              {user?.role === 'admin' ? 'Admin Portal' : user?.role === 'student' ? 'Student Portal' : 'Company Portal'}
            </p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
