import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Search, Grid3x3, List, Eye, CheckCircle, XCircle, Building2 } from 'lucide-react';
import { companies } from '@/lib/mock-data';

export function ManageCompanies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Manage Companies</h1>
        <p className="text-muted-foreground">View and manage registered companies.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <CardTitle>Company List ({filteredCompanies.length})</CardTitle>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-1 border border-border rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company) => (
                <Card key={company.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <Badge
                        variant={company.status === 'approved' ? 'default' : 'secondary'}
                        className={company.status === 'approved' ? 'bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90' : ''}
                      >
                        {company.status === 'approved' ? 'Approved' : 'Pending'}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{company.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{company.industry}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Jobs Posted:</span>
                        <span className="font-medium">{company.jobsPosted}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Applicants:</span>
                        <span className="font-medium">{company.applicants}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      {company.status === 'pending' && (
                        <Button size="sm" className="flex-1 bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCompanies.map((company) => (
                <Card key={company.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{company.name}</h3>
                          <p className="text-sm text-muted-foreground">{company.industry}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{company.jobsPosted}</p>
                          <p className="text-xs text-muted-foreground">Jobs</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{company.applicants}</p>
                          <p className="text-xs text-muted-foreground">Applicants</p>
                        </div>
                        <Badge
                          variant={company.status === 'approved' ? 'default' : 'secondary'}
                          className={company.status === 'approved' ? 'bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90' : ''}
                        >
                          {company.status === 'approved' ? 'Approved' : 'Pending'}
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          {company.status === 'pending' && (
                            <Button size="sm" className="bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Approve
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
