// Mock data for the Placement Management System

export const adminStats = {
  totalStudents: 450,
  placedStudents: 320,
  companies: 85,
  activeJobs: 42,
};

export const placementData = [
  { month: 'Jan', placements: 25 },
  { month: 'Feb', placements: 35 },
  { month: 'Mar', placements: 45 },
  { month: 'Apr', placements: 50 },
  { month: 'May', placements: 60 },
  { month: 'Jun', placements: 55 },
];

export const recentActivities = [
  { id: 1, type: 'placement', student: 'Alice Johnson', company: 'Google Inc.', date: '2026-01-25', status: 'placed' },
  { id: 2, type: 'application', student: 'Bob Smith', company: 'Microsoft Corp.', date: '2026-01-24', status: 'pending' },
  { id: 3, type: 'interview', student: 'Carol White', company: 'Amazon', date: '2026-01-24', status: 'scheduled' },
  { id: 4, type: 'placement', student: 'David Brown', company: 'Apple Inc.', date: '2026-01-23', status: 'placed' },
  { id: 5, type: 'application', student: 'Eve Davis', company: 'Tesla', date: '2026-01-23', status: 'rejected' },
];

export const students = [
  { id: 1, name: 'Alice Johnson', email: 'alice@student.edu', cgpa: 8.5, branch: 'Computer Science', status: 'active', placed: true },
  { id: 2, name: 'Bob Smith', email: 'bob@student.edu', cgpa: 7.8, branch: 'Information Technology', status: 'active', placed: false },
  { id: 3, name: 'Carol White', email: 'carol@student.edu', cgpa: 9.2, branch: 'Computer Science', status: 'active', placed: false },
  { id: 4, name: 'David Brown', email: 'david@student.edu', cgpa: 8.0, branch: 'Electronics', status: 'active', placed: true },
  { id: 5, name: 'Eve Davis', email: 'eve@student.edu', cgpa: 7.5, branch: 'Mechanical', status: 'active', placed: false },
  { id: 6, name: 'Frank Miller', email: 'frank@student.edu', cgpa: 8.8, branch: 'Computer Science', status: 'active', placed: true },
  { id: 7, name: 'Grace Wilson', email: 'grace@student.edu', cgpa: 9.0, branch: 'Information Technology', status: 'active', placed: false },
  { id: 8, name: 'Henry Moore', email: 'henry@student.edu', cgpa: 7.2, branch: 'Civil', status: 'active', placed: false },
];

export const companies = [
  { id: 1, name: 'Google Inc.', industry: 'Technology', status: 'approved', jobsPosted: 5, applicants: 120 },
  { id: 2, name: 'Microsoft Corp.', industry: 'Technology', status: 'approved', jobsPosted: 3, applicants: 95 },
  { id: 3, name: 'Amazon', industry: 'E-commerce', status: 'approved', jobsPosted: 4, applicants: 150 },
  { id: 4, name: 'Apple Inc.', industry: 'Technology', status: 'approved', jobsPosted: 2, applicants: 80 },
  { id: 5, name: 'Tesla', industry: 'Automotive', status: 'pending', jobsPosted: 1, applicants: 45 },
  { id: 6, name: 'Netflix', industry: 'Entertainment', status: 'approved', jobsPosted: 2, applicants: 60 },
  { id: 7, name: 'Meta', industry: 'Technology', status: 'pending', jobsPosted: 3, applicants: 110 },
  { id: 8, name: 'Adobe', industry: 'Software', status: 'approved', jobsPosted: 2, applicants: 70 },
];

export const jobs = [
  { id: 1, title: 'Software Engineer', company: 'Google Inc.', type: 'Full-time', location: 'Bangalore', salary: '₹18-25 LPA', posted: '2026-01-20', deadline: '2026-02-20', status: 'active', applicants: 85 },
  { id: 2, title: 'Data Scientist', company: 'Microsoft Corp.', type: 'Full-time', location: 'Hyderabad', salary: '₹20-28 LPA', posted: '2026-01-18', deadline: '2026-02-18', status: 'active', applicants: 62 },
  { id: 3, title: 'Frontend Developer', company: 'Amazon', type: 'Internship', location: 'Mumbai', salary: '₹50,000/month', posted: '2026-01-15', deadline: '2026-02-15', status: 'active', applicants: 120 },
  { id: 4, title: 'Product Manager', company: 'Apple Inc.', type: 'Full-time', location: 'Remote', salary: '₹25-35 LPA', posted: '2026-01-22', deadline: '2026-02-22', status: 'active', applicants: 45 },
  { id: 5, title: 'ML Engineer', company: 'Tesla', type: 'Full-time', location: 'Pune', salary: '₹22-30 LPA', posted: '2026-01-10', deadline: '2026-02-10', status: 'closed', applicants: 38 },
];

export const studentDashboardData = {
  placementReadiness: 75,
  testsCompleted: 12,
  testsTotal: 20,
  interviewsScheduled: 3,
  applicationsSubmitted: 8,
};

export const upcomingTests = [
  { id: 1, title: 'Aptitude Test - Google', date: '2026-01-30', time: '10:00 AM', duration: '60 mins', difficulty: 'Medium' },
  { id: 2, title: 'Technical Assessment - Microsoft', date: '2026-02-02', time: '2:00 PM', duration: '90 mins', difficulty: 'Hard' },
  { id: 3, title: 'Coding Challenge - Amazon', date: '2026-02-05', time: '11:00 AM', duration: '120 mins', difficulty: 'Medium' },
];

export const upcomingInterviews = [
  { id: 1, company: 'Google Inc.', role: 'Software Engineer', date: '2026-02-01', time: '11:00 AM', type: 'Technical Round' },
  { id: 2, company: 'Microsoft Corp.', role: 'Data Scientist', date: '2026-02-03', time: '3:00 PM', type: 'HR Round' },
  { id: 3, company: 'Amazon', role: 'Frontend Developer', date: '2026-02-06', time: '10:30 AM', type: 'Manager Round' },
];

export const appliedCompanies = [
  { id: 1, company: 'Google Inc.', role: 'Software Engineer', appliedDate: '2026-01-22', status: 'interview' },
  { id: 2, company: 'Microsoft Corp.', role: 'Data Scientist', appliedDate: '2026-01-20', status: 'applied' },
  { id: 3, company: 'Amazon', role: 'Frontend Developer', appliedDate: '2026-01-25', status: 'shortlisted' },
  { id: 4, company: 'Apple Inc.', role: 'Product Manager', appliedDate: '2026-01-18', status: 'rejected' },
];

export const skillsData = [
  { skill: 'DSA', score: 85 },
  { skill: 'Web Dev', score: 75 },
  { skill: 'Database', score: 70 },
  { skill: 'System Design', score: 60 },
  { skill: 'Aptitude', score: 80 },
];

export const performanceData = [
  { month: 'Sep', score: 65 },
  { month: 'Oct', score: 70 },
  { month: 'Nov', score: 72 },
  { month: 'Dec', score: 75 },
  { month: 'Jan', score: 78 },
];

export const companyDashboardData = {
  jobsPosted: 5,
  totalApplicants: 245,
  shortlisted: 68,
  interviewed: 32,
  selected: 12,
};

export const applicantsFunnelData = [
  { stage: 'Applied', count: 245 },
  { stage: 'Screened', count: 120 },
  { stage: 'Shortlisted', count: 68 },
  { stage: 'Interviewed', count: 32 },
  { stage: 'Selected', count: 12 },
];

export const applicants = [
  { id: 1, name: 'Alice Johnson', branch: 'Computer Science', cgpa: 8.5, skills: ['React', 'Node.js', 'Python'], status: 'shortlisted', appliedDate: '2026-01-22' },
  { id: 2, name: 'Bob Smith', branch: 'Information Technology', cgpa: 7.8, skills: ['Java', 'Spring', 'MySQL'], status: 'applied', appliedDate: '2026-01-23' },
  { id: 3, name: 'Carol White', branch: 'Computer Science', cgpa: 9.2, skills: ['Python', 'TensorFlow', 'ML'], status: 'interviewed', appliedDate: '2026-01-20' },
  { id: 4, name: 'David Brown', branch: 'Electronics', cgpa: 8.0, skills: ['C++', 'Embedded', 'IoT'], status: 'rejected', appliedDate: '2026-01-19' },
  { id: 5, name: 'Frank Miller', branch: 'Computer Science', cgpa: 8.8, skills: ['React', 'TypeScript', 'AWS'], status: 'shortlisted', appliedDate: '2026-01-24' },
];
