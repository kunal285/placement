import React from 'react';
import { StatCard } from '@/app/components/common/stat-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Briefcase, Users, UserCheck, Calendar, Eye } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, FunnelChart, Funnel, LabelList, Cell } from 'recharts';
import { companyDashboardData, applicantsFunnelData } from '@/lib/mock-data';

const recentApplicants = [
  { id: 1, name: 'Alice Johnson', position: 'Software Engineer', appliedDate: '2026-01-25', score: 92, status: 'shortlisted' },
  { id: 2, name: 'Bob Smith', position: 'Data Scientist', appliedDate: '2026-01-24', score: 78, status: 'applied' },
  { id: 3, name: 'Carol White', position: 'Software Engineer', appliedDate: '2026-01-24', score: 88, status: 'interviewed' },
  { id: 4, name: 'David Brown', position: 'Frontend Developer', appliedDate: '2026-01-23', score: 65, status: 'rejected' },
  { id: 5, name: 'Frank Miller', position: 'Software Engineer', appliedDate: '2026-01-23', score: 95, status: 'selected' },
];

const COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)'];

export function CompanyDashboard() {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline'; className?: string }> = {
      selected: { variant: 'default', className: 'bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90' },
      shortlisted: { variant: 'default', className: 'bg-primary' },
      interviewed: { variant: 'outline' },
      rejected: { variant: 'destructive' },
      applied: { variant: 'secondary' },
    };
    
    const config = variants[status] || { variant: 'secondary' as const };
    return (
      <Badge variant={config.variant} className={config.className}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Company Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your recruitment activities.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Jobs Posted"
          value={companyDashboardData.jobsPosted}
          icon={Briefcase}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="Total Applicants"
          value={companyDashboardData.totalApplicants}
          icon={Users}
          iconColor="text-chart-2"
          iconBgColor="bg-chart-2/10"
        />
        <StatCard
          title="Shortlisted"
          value={companyDashboardData.shortlisted}
          icon={UserCheck}
          iconColor="text-[var(--warning)]"
          iconBgColor="bg-[var(--warning)]/10"
        />
        <StatCard
          title="Selected"
          value={companyDashboardData.selected}
          icon={Calendar}
          iconColor="text-[var(--success)]"
          iconBgColor="bg-[var(--success)]/10"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Applicant Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={applicantsFunnelData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis type="number" className="text-sm" />
                <YAxis dataKey="stage" type="category" width={100} className="text-sm" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                  {applicantsFunnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Post a New Job</h4>
                        <p className="text-sm text-muted-foreground">Create a new job opening</p>
                      </div>
                    </div>
                    <Button>Post Job</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-chart-2" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">View All Applicants</h4>
                        <p className="text-sm text-muted-foreground">{companyDashboardData.totalApplicants} total applicants</p>
                      </div>
                    </div>
                    <Button variant="outline">View</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--warning)]/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-[var(--warning)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Schedule Interviews</h4>
                        <p className="text-sm text-muted-foreground">Manage interview schedules</p>
                      </div>
                    </div>
                    <Button variant="outline">Schedule</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applicants */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Applicants</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentApplicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell className="font-medium">{applicant.name}</TableCell>
                  <TableCell>{applicant.position}</TableCell>
                  <TableCell className="text-muted-foreground">{applicant.appliedDate}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono">
                      {applicant.score}%
                    </Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(applicant.status)}</TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
