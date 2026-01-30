import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { TrendingUp, TrendingDown, Target } from 'lucide-react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar
} from 'recharts';
import { skillsData, performanceData } from '@/lib/mock-data';

const improvementSuggestions = [
  { skill: 'System Design', current: 60, target: 80, priority: 'high' },
  { skill: 'Database', current: 70, target: 85, priority: 'medium' },
  { skill: 'Web Dev', current: 75, target: 90, priority: 'medium' },
];

const strengthsWeaknesses = {
  strengths: ['Data Structures & Algorithms', 'Aptitude', 'Communication'],
  weaknesses: ['System Design', 'Database Management', 'Machine Learning'],
};

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Performance Analytics</h1>
        <p className="text-muted-foreground">Track your progress and identify areas for improvement.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">78%</p>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-[var(--success)]" />
              <span className="text-[var(--success)] font-medium">+5%</span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--success)]/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-[var(--success)]" />
              </div>
              <div>
                <p className="text-2xl font-bold">85%</p>
                <p className="text-sm text-muted-foreground">DSA Proficiency</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-[var(--success)]" />
              <span className="text-[var(--success)] font-medium">+8%</span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--warning)]/10 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-[var(--warning)]" />
              </div>
              <div>
                <p className="text-2xl font-bold">60%</p>
                <p className="text-sm text-muted-foreground">System Design</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="text-[var(--warning)] font-medium">Needs Improvement</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Skills Radar</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={skillsData}>
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis dataKey="skill" className="text-sm" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-sm" />
                <Radar 
                  name="Score" 
                  dataKey="score" 
                  stroke="var(--primary)" 
                  fill="var(--primary)" 
                  fillOpacity={0.6} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-sm" />
                <YAxis domain={[0, 100]} className="text-sm" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="var(--success)" 
                  strokeWidth={3}
                  dot={{ fill: 'var(--success)', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Improvement Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle>Improvement Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {improvementSuggestions.map((suggestion, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold">{suggestion.skill}</h4>
                      <Badge 
                        variant={suggestion.priority === 'high' ? 'destructive' : 'secondary'}
                      >
                        {suggestion.priority} priority
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Current: <span className="font-medium text-foreground">{suggestion.current}%</span>
                      {' → '}
                      Target: <span className="font-medium text-primary">{suggestion.target}%</span>
                    </div>
                  </div>
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="absolute h-full bg-primary rounded-full transition-all"
                      style={{ width: `${(suggestion.current / suggestion.target) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {suggestion.target - suggestion.current}% to reach your target
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[var(--success)]" />
              Your Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {strengthsWeaknesses.strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-[var(--success)]/10 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[var(--success)]" />
                  <span className="font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-[var(--warning)]" />
              Areas to Improve
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {strengthsWeaknesses.weaknesses.map((weakness, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-[var(--warning)]/10 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[var(--warning)]" />
                  <span className="font-medium">{weakness}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
