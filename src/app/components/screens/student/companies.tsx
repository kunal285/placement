import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Search, MapPin, Briefcase, DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { jobs } from '@/lib/mock-data';

export function Companies() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const checkEligibility = (jobId: number) => {
    // Mock eligibility check - in real app this would be based on student's CGPA, branch, etc.
    return jobId % 3 !== 0;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Available Companies</h1>
        <p className="text-muted-foreground">Browse and apply to job opportunities from top companies.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <CardTitle>Job Openings ({filteredJobs.length})</CardTitle>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs or companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.map((job) => {
              const isEligible = checkEligibility(job.id);
              
              return (
                <Card 
                  key={job.id} 
                  className={`hover:shadow-lg transition-shadow ${!isEligible ? 'opacity-60' : ''}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-7 h-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-xl mb-1">{job.title}</h3>
                                <p className="text-base text-muted-foreground">{job.company}</p>
                              </div>
                              <div className="flex gap-2">
                                <Badge 
                                  variant={job.status === 'active' ? 'default' : 'secondary'}
                                  className={job.status === 'active' 
                                    ? 'bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90' 
                                    : ''}
                                >
                                  {job.status === 'active' ? 'Active' : 'Closed'}
                                </Badge>
                                {isEligible ? (
                                  <Badge className="bg-[var(--success)]/10 text-[var(--success)] hover:bg-[var(--success)]/20 border-[var(--success)]" variant="outline">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Eligible
                                  </Badge>
                                ) : (
                                  <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20 border-destructive" variant="outline">
                                    <XCircle className="w-3 h-3 mr-1" />
                                    Not Eligible
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div className="flex items-center gap-2 text-sm">
                                <Badge variant="outline" className="font-normal">{job.type}</Badge>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <DollarSign className="w-4 h-4 flex-shrink-0" />
                                <span>{job.salary}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 flex-shrink-0" />
                                <span>Deadline: {job.deadline}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-border">
                              <div className="text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">{job.applicants}</span> students applied
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                                {job.status === 'active' && isEligible && (
                                  <Button size="sm">
                                    Apply Now
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
