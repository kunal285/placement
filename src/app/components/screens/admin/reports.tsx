import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Download, FileText, TrendingUp, Users, Building2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { placementData } from '@/lib/mock-data';

const branchWisePlacement = [
  { branch: 'Computer Science', placed: 85, total: 100 },
  { branch: 'IT', placed: 70, total: 90 },
  { branch: 'Electronics', placed: 45, total: 80 },
  { branch: 'Mechanical', placed: 30, total: 75 },
  { branch: 'Civil', placed: 25, total: 60 },
];

const packageDistribution = [
  { range: '< 5 LPA', count: 45 },
  { range: '5-10 LPA', count: 120 },
  { range: '10-15 LPA', count: 85 },
  { range: '15-20 LPA', count: 50 },
  { range: '> 20 LPA', count: 20 },
];

const companyTypeData = [
  { name: 'Product', value: 45, color: 'var(--chart-1)' },
  { name: 'Service', value: 30, color: 'var(--chart-2)' },
  { name: 'Startup', value: 15, color: 'var(--chart-3)' },
  { name: 'Core', value: 10, color: 'var(--chart-4)' },
];

export function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Placement Reports</h1>
          <p className="text-muted-foreground">Generate and download comprehensive placement reports.</p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Download All Reports
        </Button>
      </div>

      {/* Quick Download Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
            <h3 className="font-semibold text-lg mb-1">Student Report</h3>
            <p className="text-sm text-muted-foreground">Complete student placement data</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--success)]/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[var(--success)]" />
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
            <h3 className="font-semibold text-lg mb-1">Company Report</h3>
            <p className="text-sm text-muted-foreground">Visiting companies statistics</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--warning)]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[var(--warning)]" />
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
            <h3 className="font-semibold text-lg mb-1">Analytics Report</h3>
            <p className="text-sm text-muted-foreground">Detailed analytics and insights</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Branch-wise Placement</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={branchWisePlacement}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="branch" className="text-sm" angle={-45} textAnchor="end" height={100} />
                <YAxis className="text-sm" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="placed" fill="var(--success)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="total" fill="var(--muted)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Package Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={packageDistribution}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="range" className="text-sm" />
                <YAxis className="text-sm" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="count" fill="var(--primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Company Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={companyTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {companyTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Placement Trend</CardTitle>
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
                <Bar dataKey="placements" fill="var(--chart-5)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Summary Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Placement Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">71.1%</p>
              <p className="text-sm text-muted-foreground mt-1">Overall Placement Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--success)]">₹12.5 LPA</p>
              <p className="text-sm text-muted-foreground mt-1">Average Package</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--warning)]">₹45 LPA</p>
              <p className="text-sm text-muted-foreground mt-1">Highest Package</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-chart-5">85</p>
              <p className="text-sm text-muted-foreground mt-1">Companies Visited</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
