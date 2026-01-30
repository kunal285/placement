import React from 'react';
import { StatCard } from '@/app/components/common/stat-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import { Badge } from '@/app/components/ui/badge';
import { Users, Building2, Briefcase, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { adminStats, placementData, recentActivities } from '@/lib/mock-data';

export function AdminDashboard() {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline'; text: string }> = {
      placed: { variant: 'default', text: 'Placed' },
      pending: { variant: 'secondary', text: 'Pending' },
      scheduled: { variant: 'outline', text: 'Scheduled' },
      rejected: { variant: 'destructive', text: 'Rejected' },
    };
    
    const config = variants[status] || { variant: 'outline' as const, text: status };
    return (
      <Badge 
        variant={config.variant}
        className={status === 'placed' ? 'bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90' : ''}
      >
        {config.text}
      </Badge>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your placement activities.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={adminStats.totalStudents}
          icon={Users}
          trend={{ value: 12, isPositive: true }}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="Placed Students"
          value={adminStats.placedStudents}
          icon={TrendingUp}
          trend={{ value: 8, isPositive: true }}
          iconColor="text-[var(--success)]"
          iconBgColor="bg-[var(--success)]/10"
        />
        <StatCard
          title="Active Companies"
          value={adminStats.companies}
          icon={Building2}
          trend={{ value: 5, isPositive: true }}
          iconColor="text-[var(--warning)]"
          iconBgColor="bg-[var(--warning)]/10"
        />
        <StatCard
          title="Active Jobs"
          value={adminStats.activeJobs}
          icon={Briefcase}
          trend={{ value: 3, isPositive: false }}
          iconColor="text-chart-5"
          iconBgColor="bg-chart-5/10"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Placement Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={placementData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-sm" />
                <YAxis className="text-sm" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="placements" fill="var(--primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Placement Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={placementData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-sm" />
                <YAxis className="text-sm" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="placements" 
                  stroke="var(--success)" 
                  strokeWidth={3}
                  dot={{ fill: 'var(--success)', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.student}</TableCell>
                  <TableCell>{activity.company}</TableCell>
                  <TableCell className="text-muted-foreground">{activity.date}</TableCell>
                  <TableCell>{getStatusBadge(activity.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
