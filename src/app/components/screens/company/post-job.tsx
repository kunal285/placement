import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { CheckCircle2, Circle } from 'lucide-react';

const steps = [
  { id: 1, title: 'Basic Details', description: 'Job title and type' },
  { id: 2, title: 'Job Description', description: 'Responsibilities and requirements' },
  { id: 3, title: 'Eligibility', description: 'Criteria and qualifications' },
  { id: 4, title: 'Review & Post', description: 'Review and publish' },
];

export function PostJob() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Post a New Job</h1>
        <p className="text-muted-foreground">Fill in the details to create a new job posting.</p>
      </div>

      {/* Progress Steps */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                    step.id < currentStep 
                      ? 'bg-[var(--success)] border-[var(--success)] text-white' 
                      : step.id === currentStep 
                      ? 'bg-primary border-primary text-white' 
                      : 'border-border bg-background text-muted-foreground'
                  }`}>
                    {step.id < currentStep ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Circle className="w-6 h-6" />
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="text-xs text-muted-foreground hidden md:block">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-4 transition-colors ${
                    step.id < currentStep ? 'bg-[var(--success)]' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Form Content */}
      <Card>
        <CardHeader>
          <CardTitle>Step {currentStep}: {steps[currentStep - 1].title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStep === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" placeholder="e.g. Software Engineer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Job Type</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fulltime">Full-time</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. Bangalore, Remote" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vacancies">Number of Vacancies</Label>
                  <Input id="vacancies" type="number" placeholder="e.g. 5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Application Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea 
                    id="description" 
                    rows={5} 
                    placeholder="Describe the role and responsibilities..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea 
                    id="requirements" 
                    rows={5} 
                    placeholder="List the required skills and qualifications..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="salary-min">Minimum Salary (LPA)</Label>
                    <Input id="salary-min" type="number" placeholder="e.g. 12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary-max">Maximum Salary (LPA)</Label>
                    <Input id="salary-max" type="number" placeholder="e.g. 18" />
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="min-cgpa">Minimum CGPA</Label>
                    <Input id="min-cgpa" type="number" step="0.01" placeholder="e.g. 7.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passout-year">Passout Year</Label>
                    <Select>
                      <SelectTrigger id="passout-year">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Eligible Branches</Label>
                  <div className="flex flex-wrap gap-2">
                    {['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Civil'].map((branch) => (
                      <Badge 
                        key={branch} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {branch}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additional-criteria">Additional Criteria</Label>
                  <Textarea 
                    id="additional-criteria" 
                    rows={4} 
                    placeholder="Any other eligibility criteria..."
                  />
                </div>
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <div className="space-y-6">
                <Card className="bg-muted/50">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Job Summary</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Job Title</p>
                          <p className="font-medium">Software Engineer</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Type</p>
                          <p className="font-medium">Full-time</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Location</p>
                          <p className="font-medium">Bangalore</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Vacancies</p>
                          <p className="font-medium">5</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Salary Range</p>
                          <p className="font-medium">₹12-18 LPA</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Min CGPA</p>
                          <p className="font-medium">7.5</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium">Note:</span> Once posted, the job will be visible to all eligible students. You can edit or close the job posting later from your dashboard.
                  </p>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        {currentStep < steps.length ? (
          <Button onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button className="bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90">
            Post Job
          </Button>
        )}
      </div>
    </div>
  );
}
