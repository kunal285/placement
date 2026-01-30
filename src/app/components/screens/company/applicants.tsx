import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import { Search, Filter, Eye, Download, CheckCircle, XCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { applicants } from '@/lib/mock-data';

export function Applicants() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedApplicant, setSelectedApplicant] = useState<typeof applicants[0] | null>(null);

  const filteredApplicants = applicants.filter(applicant => {
    const matchesSearch = applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         applicant.branch.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || applicant.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline'; className?: string }> = {
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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">View Applicants</h1>
        <p className="text-muted-foreground">Review and manage job applicants.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <CardTitle>All Applicants ({filteredApplicants.length})</CardTitle>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search applicants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[160px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="applied">Applied</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="interviewed">Interviewed</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead>CGPA</TableHead>
                <TableHead>Skills</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell className="font-medium">{applicant.name}</TableCell>
                  <TableCell>{applicant.branch}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono">
                      {applicant.cgpa}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {applicant.skills.slice(0, 2).map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {applicant.skills.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{applicant.skills.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{applicant.appliedDate}</TableCell>
                  <TableCell>{getStatusBadge(applicant.status)}</TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => setSelectedApplicant(applicant)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Applicant Details</DialogTitle>
                          </DialogHeader>
                          {selectedApplicant && (
                            <div className="space-y-6">
                              <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                  <span className="text-2xl font-bold text-primary">
                                    {selectedApplicant.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-xl font-semibold mb-1">{selectedApplicant.name}</h3>
                                  <p className="text-muted-foreground">{selectedApplicant.branch}</p>
                                </div>
                                {getStatusBadge(selectedApplicant.status)}
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-muted-foreground mb-1">CGPA</p>
                                  <p className="text-lg font-semibold">{selectedApplicant.cgpa}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground mb-1">Applied Date</p>
                                  <p className="text-lg font-semibold">{selectedApplicant.appliedDate}</p>
                                </div>
                              </div>

                              <div>
                                <p className="text-sm text-muted-foreground mb-2">Skills</p>
                                <div className="flex flex-wrap gap-2">
                                  {selectedApplicant.skills.map((skill, idx) => (
                                    <Badge key={idx} variant="secondary">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex gap-3 pt-4 border-t">
                                <Button className="flex-1" variant="outline">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download Resume
                                </Button>
                                {selectedApplicant.status === 'applied' && (
                                  <>
                                    <Button className="flex-1 bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90">
                                      <CheckCircle className="w-4 h-4 mr-2" />
                                      Shortlist
                                    </Button>
                                    <Button className="flex-1" variant="destructive">
                                      <XCircle className="w-4 h-4 mr-2" />
                                      Reject
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" size="icon">
                        <Download className="w-4 h-4" />
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
