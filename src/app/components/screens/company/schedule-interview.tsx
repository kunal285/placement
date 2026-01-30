import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Calendar } from '@/app/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Calendar as CalendarIcon, Clock, Video, MapPin, Plus } from 'lucide-react';

const scheduledInterviews = [
  { id: 1, candidate: 'Alice Johnson', position: 'Software Engineer', date: '2026-02-01', time: '10:00 AM', type: 'Technical', mode: 'Virtual' },
  { id: 2, candidate: 'Carol White', position: 'Software Engineer', date: '2026-02-01', time: '2:00 PM', type: 'HR Round', mode: 'In-person' },
  { id: 3, candidate: 'Frank Miller', position: 'Software Engineer', date: '2026-02-03', time: '11:00 AM', type: 'Technical', mode: 'Virtual' },
  { id: 4, candidate: 'Bob Smith', position: 'Data Scientist', date: '2026-02-03', time: '3:00 PM', type: 'Manager Round', mode: 'Virtual' },
];

export function ScheduleInterview() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const interviewsOnSelectedDate = scheduledInterviews.filter(interview => {
    if (!date) return false;
    return interview.date === date.toISOString().split('T')[0];
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Schedule Interview</h1>
          <p className="text-muted-foreground">Manage interview schedules for shortlisted candidates.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Schedule New Interview
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Schedule New Interview</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="candidate">Candidate</Label>
                  <Select>
                    <SelectTrigger id="candidate">
                      <SelectValue placeholder="Select candidate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Alice Johnson</SelectItem>
                      <SelectItem value="2">Bob Smith</SelectItem>
                      <SelectItem value="3">Carol White</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Select>
                    <SelectTrigger id="position">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="se">Software Engineer</SelectItem>
                      <SelectItem value="ds">Data Scientist</SelectItem>
                      <SelectItem value="fe">Frontend Developer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Interview Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Interview Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Interview Type</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Round</SelectItem>
                      <SelectItem value="hr">HR Round</SelectItem>
                      <SelectItem value="manager">Manager Round</SelectItem>
                      <SelectItem value="final">Final Round</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mode">Interview Mode</Label>
                  <Select>
                    <SelectTrigger id="mode">
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="virtual">Virtual</SelectItem>
                      <SelectItem value="inperson">In-person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location / Meeting Link</Label>
                <Input id="location" placeholder="Enter location or meeting link" />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline">Cancel</Button>
                <Button>Schedule Interview</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Legend</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span>Interviews Scheduled</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scheduled Interviews */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>
              {date ? `Interviews on ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` : 'All Scheduled Interviews'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {interviewsOnSelectedDate.length > 0 ? (
              <div className="space-y-4">
                {interviewsOnSelectedDate.map((interview) => (
                  <Card key={interview.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg mb-1">{interview.candidate}</h4>
                          <p className="text-sm text-muted-foreground">{interview.position}</p>
                        </div>
                        <Badge variant="outline">{interview.type}</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{interview.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{interview.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground col-span-2">
                          {interview.mode === 'Virtual' ? (
                            <>
                              <Video className="w-4 h-4" />
                              <span>{interview.mode} Interview</span>
                            </>
                          ) : (
                            <>
                              <MapPin className="w-4 h-4" />
                              <span>{interview.mode} Interview</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Reschedule
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <CalendarIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No Interviews Scheduled</h3>
                <p className="text-muted-foreground mb-4">
                  No interviews are scheduled for this date.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* All Upcoming Interviews */}
      <Card>
        <CardHeader>
          <CardTitle>All Upcoming Interviews ({scheduledInterviews.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {scheduledInterviews.map((interview) => (
              <Card key={interview.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary">
                          {interview.candidate.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{interview.candidate}</h4>
                        <p className="text-sm text-muted-foreground">{interview.position}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{interview.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{interview.time}</span>
                        </div>
                      </div>

                      <Badge variant="outline">{interview.type}</Badge>
                      
                      <Badge variant="secondary">
                        {interview.mode === 'Virtual' ? (
                          <Video className="w-3 h-3 mr-1" />
                        ) : (
                          <MapPin className="w-3 h-3 mr-1" />
                        )}
                        {interview.mode}
                      </Badge>

                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
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
