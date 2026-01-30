import React from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { GraduationCap, UserCog, Users, Building2 } from 'lucide-react';
import { UserRole } from '@/lib/auth-context';

interface RoleSelectionProps {
  onSelectRole: (role: UserRole) => void;
}

export function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  const roles = [
    {
      role: 'admin' as UserRole,
      title: 'Admin / TPO',
      description: 'Manage students, companies, and placements',
      icon: UserCog,
      color: 'bg-primary',
    },
    {
      role: 'student' as UserRole,
      title: 'Student',
      description: 'Apply for jobs and track your progress',
      icon: Users,
      color: 'bg-[var(--success)]',
    },
    {
      role: 'company' as UserRole,
      title: 'Company / Recruiter',
      description: 'Post jobs and manage recruitment',
      icon: Building2,
      color: 'bg-[var(--warning)]',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-3">Welcome to PlacementPro</h1>
          <p className="text-xl text-muted-foreground">
            Select your role to continue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((roleItem) => {
            const Icon = roleItem.icon;
            return (
              <Card
                key={roleItem.role}
                className="cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-200 border-2 hover:border-primary"
                onClick={() => onSelectRole(roleItem.role)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-xl ${roleItem.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{roleItem.title}</h2>
                  <p className="text-sm text-muted-foreground">{roleItem.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Don't have an account?{' '}
            <a href="#" className="text-primary hover:underline font-medium">
              Contact your administrator
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
