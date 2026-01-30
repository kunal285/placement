import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';
import { GraduationCap } from 'lucide-react';
import { useAuth, UserRole } from '@/lib/auth-context';

interface LoginProps {
  role: UserRole;
  onBack: () => void;
}

export function Login({ role, onBack }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, role);
  };

  const getRoleInfo = () => {
    switch (role) {
      case 'admin':
        return {
          title: 'Admin / TPO Login',
          description: 'Access placement management dashboard',
        };
      case 'student':
        return {
          title: 'Student Login',
          description: 'Access your placement portal',
        };
      case 'company':
        return {
          title: 'Company Login',
          description: 'Manage recruitment activities',
        };
    }
  };

  const roleInfo = getRoleInfo();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          <div className="text-center">
            <CardTitle className="text-2xl mb-2">{roleInfo.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{roleInfo.description}</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Button type="button" variant="outline" className="w-full" onClick={onBack}>
              Back to Role Selection
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
