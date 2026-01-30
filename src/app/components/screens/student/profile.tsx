import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Upload, Save, User, Mail, Phone, GraduationCap, Code, Award, FileText } from 'lucide-react';

export function Profile() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and resume.</p>
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  JD
                </AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8">
                <Upload className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">John Doe</h2>
              <p className="text-muted-foreground mb-3">Computer Science Engineering</p>
              <div className="flex gap-2">
                <Badge>Student ID: CS2023001</Badge>
                <Badge variant="outline">Batch: 2023-2027</Badge>
                <Badge className="bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90">
                  Active
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="john.doe@student.edu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+91 9876543210" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" defaultValue="2002-05-15" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Academic Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Academic Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="branch">Branch</Label>
              <Input id="branch" defaultValue="Computer Science Engineering" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cgpa">Current CGPA</Label>
              <Input id="cgpa" type="number" step="0.01" defaultValue="8.5" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batch">Batch</Label>
              <Input id="batch" defaultValue="2023-2027" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rollno">Roll Number</Label>
              <Input id="rollno" defaultValue="CS2023001" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="12th">12th Percentage</Label>
              <Input id="12th" type="number" step="0.01" defaultValue="92.5" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="10th">10th Percentage</Label>
              <Input id="10th" type="number" step="0.01" defaultValue="95.0" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Skills & Technologies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'SQL', 'MongoDB', 'Git'].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                  <button className="ml-2 hover:text-destructive">×</button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input placeholder="Add a skill..." />
              <Button>Add</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resume */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Resume
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="font-medium mb-1">Click to upload or drag and drop</p>
            <p className="text-sm text-muted-foreground">PDF, DOC (max. 2MB)</p>
            <Button className="mt-4">
              Upload Resume
            </Button>
          </div>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-medium">John_Doe_Resume.pdf</p>
                  <p className="text-sm text-muted-foreground">Uploaded on Jan 15, 2026 • 1.2 MB</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">View</Button>
                <Button variant="outline" size="sm">Download</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button className="gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
