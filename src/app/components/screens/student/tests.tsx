import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Clock, Award, Target, CheckCircle } from 'lucide-react';

const availableTests = [
  { id: 1, title: 'Quantitative Aptitude - Basic', questions: 30, duration: '45 mins', difficulty: 'Easy', category: 'aptitude' },
  { id: 2, title: 'Logical Reasoning - Advanced', questions: 25, duration: '40 mins', difficulty: 'Hard', category: 'aptitude' },
  { id: 3, title: 'Data Structures & Algorithms', questions: 40, duration: '60 mins', difficulty: 'Medium', category: 'technical' },
  { id: 4, title: 'JavaScript Fundamentals', questions: 35, duration: '50 mins', difficulty: 'Medium', category: 'technical' },
  { id: 5, title: 'System Design Basics', questions: 20, duration: '45 mins', difficulty: 'Hard', category: 'technical' },
  { id: 6, title: 'Verbal Ability Test', questions: 30, duration: '35 mins', difficulty: 'Easy', category: 'aptitude' },
];

const completedTests = [
  { id: 1, title: 'Aptitude Test - Google', score: 85, maxScore: 100, completedDate: '2026-01-20', result: 'pass' },
  { id: 2, title: 'Technical Assessment - Microsoft', score: 72, maxScore: 100, completedDate: '2026-01-18', result: 'pass' },
  { id: 3, title: 'Coding Challenge - Amazon', score: 90, maxScore: 100, completedDate: '2026-01-15', result: 'pass' },
  { id: 4, title: 'Logical Reasoning Test', score: 45, maxScore: 100, completedDate: '2026-01-12', result: 'fail' },
];

export function Tests() {
  const [activeTab, setActiveTab] = useState('available');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90';
      case 'Medium':
        return 'bg-[var(--warning)] text-[var(--warning-foreground)] hover:bg-[var(--warning)]/90';
      case 'Hard':
        return 'bg-destructive text-destructive-foreground';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Tests & Assessments</h1>
        <p className="text-muted-foreground">Practice and improve your skills with our comprehensive test suite.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{availableTests.length}</p>
                <p className="text-sm text-muted-foreground">Available Tests</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--success)]/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[var(--success)]" />
              </div>
              <div>
                <p className="text-2xl font-bold">{completedTests.length}</p>
                <p className="text-sm text-muted-foreground">Completed Tests</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--warning)]/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-[var(--warning)]" />
              </div>
              <div>
                <p className="text-2xl font-bold">78%</p>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="available">Available Tests</TabsTrigger>
          <TabsTrigger value="completed">Completed Tests</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableTests.map((test) => (
              <Card key={test.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="capitalize">
                      {test.category}
                    </Badge>
                    <Badge className={getDifficultyColor(test.difficulty)}>
                      {test.difficulty}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-4">{test.title}</h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Questions:</span>
                      <span className="font-medium">{test.questions}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Duration:
                      </span>
                      <span className="font-medium">{test.duration}</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    Start Test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="space-y-4">
            {completedTests.map((test) => (
              <Card key={test.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        test.result === 'pass' 
                          ? 'bg-[var(--success)]/10' 
                          : 'bg-destructive/10'
                      }`}>
                        <Award className={`w-6 h-6 ${
                          test.result === 'pass' 
                            ? 'text-[var(--success)]' 
                            : 'text-destructive'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{test.title}</h3>
                        <p className="text-sm text-muted-foreground">Completed on {test.completedDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-3xl font-bold">{test.score}</p>
                        <p className="text-sm text-muted-foreground">out of {test.maxScore}</p>
                      </div>
                      <Badge 
                        className={test.result === 'pass' 
                          ? 'bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90' 
                          : 'bg-destructive'}
                      >
                        {test.result === 'pass' ? 'Passed' : 'Failed'}
                      </Badge>
                      <Button variant="outline">View Results</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
