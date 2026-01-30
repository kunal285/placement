import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Progress } from '@/app/components/ui/progress';
import { Calendar, Clock, TrendingUp, CheckCircle, XCircle, AlertCircle, ChevronRight } from 'lucide-react';
import { studentDashboardData, upcomingTests, upcomingInterviews, appliedCompanies } from '@/lib/mock-data';

export function StudentDashboard() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'interview':
      case 'shortlisted':
        return <CheckCircle className="w-4 h-4 text-[var(--success)]" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-destructive" />;
      default:
        return <AlertCircle className="w-4 h-4 text-[var(--warning)]" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline'; className?: string }> = {
      interview: { variant: 'default', className: 'bg-primary' },
      shortlisted: { variant: 'default', className: 'bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90' },
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
        <h1 className="text-3xl font-bold mb-2">Welcome Back, John!</h1>
        <p className="text-muted-foreground">Here's your placement journey overview.</p>
      </div>

      {/* Placement Readiness */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Placement Readiness</h3>
              <p className="text-sm text-muted-foreground">You're making great progress!</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-primary">{studentDashboardData.placementReadiness}%</p>
            </div>
          </div>
          <Progress value={studentDashboardData.placementReadiness} className="h-3" />
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{studentDashboardData.testsCompleted}/{studentDashboardData.testsTotal}</p>
              <p className="text-sm text-muted-foreground">Tests Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{studentDashboardData.interviewsScheduled}</p>
              <p className="text-sm text-muted-foreground">Interviews Scheduled</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{studentDashboardData.applicationsSubmitted}</p>
              <p className="text-sm text-muted-foreground">Applications</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tests */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Tests</CardTitle>
            <Button variant="ghost" size="sm">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTests.map((test) => (
                <Card key={test.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{test.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {test.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {test.time}
                          </span>
                        </div>
                      </div>
                      <Badge variant={test.difficulty === 'Hard' ? 'destructive' : test.difficulty === 'Medium' ? 'secondary' : 'outline'}>
                        {test.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Duration: {test.duration}</span>
                      <Button size="sm">Start Test</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Interviews */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Interviews</CardTitle>
            <Button variant="ghost" size="sm">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <Card key={interview.id} className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold mb-1">{interview.company}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{interview.role}</p>
                      </div>
                      <Badge variant="outline">{interview.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {interview.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {interview.time}
                      </span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applied Companies */}
      <Card>
        <CardHeader>
          <CardTitle>Applied Companies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {appliedCompanies.map((app) => (
              <Card key={app.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(app.status)}
                      <div>
                        <h4 className="font-semibold">{app.company}</h4>
                        <p className="text-sm text-muted-foreground">{app.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Applied: {app.appliedDate}</span>
                      {getStatusBadge(app.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
