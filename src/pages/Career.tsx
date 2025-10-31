import { useState } from "react";
import { Search, MapPin, Briefcase, Clock, Filter, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  salary: string;
}

const Career = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  const jobs: Job[] = [
    {
      id: 1,
      title: "Frontend Development Instructor",
      department: "Frontend",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead and inspire students in mastering modern frontend technologies including React, TypeScript, and modern CSS frameworks.",
      responsibilities: [
        "Develop comprehensive curriculum for frontend development courses",
        "Conduct live coding sessions and workshops",
        "Mentor students and provide code reviews",
        "Create engaging learning materials and projects",
        "Stay updated with latest frontend trends and best practices",
      ],
      requirements: [
        "Expert knowledge in React, TypeScript, HTML5, CSS3",
        "3+ years of professional frontend development experience",
        "Previous teaching or mentoring experience preferred",
        "Excellent communication and presentation skills",
        "Portfolio demonstrating modern web applications",
      ],
      salary: "₹10,000 - ₹30,000",
    },
    {
      id: 2,
      title: "Backend Development Teacher",
      department: "Backend",
      location: "Hybrid",
      type: "Full-time",
      experience: "4-6 years",
      description: "Educate and guide students through server-side development, databases, APIs, and cloud infrastructure.",
      responsibilities: [
        "Design and deliver backend development curriculum",
        "Teach Node.js, Python, databases, and API design",
        "Guide students through real-world backend projects",
        "Conduct code reviews and debugging sessions",
        "Integrate DevOps and cloud computing concepts",
      ],
      requirements: [
        "Strong experience with Node.js, Python, or similar",
        "Deep understanding of databases (SQL and NoSQL)",
        "Experience with RESTful APIs and GraphQL",
        "Knowledge of cloud platforms (AWS, Azure, GCP)",
        "Teaching or training background is a plus",
      ],
      salary: "₹10,000 - ₹30,000",
    },
    {
      id: 3,
      title: "Cybersecurity Instructor",
      department: "Cybersecurity",
      location: "On-site",
      type: "Full-time",
      experience: "5-7 years",
      description: "Train the next generation of cybersecurity professionals in ethical hacking, network security, and threat analysis.",
      responsibilities: [
        "Develop cybersecurity training programs and labs",
        "Teach ethical hacking, penetration testing, and security auditing",
        "Create hands-on security exercises and CTF challenges",
        "Guide students through security certifications preparation",
        "Share industry best practices and real-world case studies",
      ],
      requirements: [
        "Professional certifications (CEH, OSCP, CISSP, etc.)",
        "5+ years in cybersecurity or related field",
        "Experience with security tools and frameworks",
        "Understanding of compliance standards (GDPR, ISO 27001)",
        "Passion for teaching and mentoring",
      ],
      salary: "₹10,000 - ₹30,000",
    },
    {
      id: 4,
      title: "Full Stack Development Mentor",
      department: "Frontend",
      location: "Remote",
      type: "Part-time",
      experience: "3-5 years",
      description: "Support students learning full-stack development through one-on-one mentoring and project guidance.",
      responsibilities: [
        "Provide personalized mentoring sessions",
        "Review student projects and provide feedback",
        "Help debug and troubleshoot code issues",
        "Guide career development and job preparation",
        "Assist with technical interview preparation",
      ],
      requirements: [
        "Full-stack development experience",
        "Strong problem-solving skills",
        "Patience and excellent communication",
        "Flexible schedule for student sessions",
        "Experience with modern development tools",
      ],
      salary: "₹10,000 - ₹30,000",
    },
    {
      id: 5,
      title: "Cloud & DevOps Instructor",
      department: "Backend",
      location: "Remote",
      type: "Full-time",
      experience: "4-6 years",
      description: "Teach cloud architecture, containerization, CI/CD pipelines, and infrastructure as code to aspiring DevOps engineers.",
      responsibilities: [
        "Create comprehensive DevOps curriculum",
        "Teach Docker, Kubernetes, and cloud services",
        "Guide students through CI/CD implementation",
        "Demonstrate infrastructure automation",
        "Prepare students for cloud certifications",
      ],
      requirements: [
        "Experience with AWS, Azure, or Google Cloud",
        "Strong knowledge of Docker and Kubernetes",
        "Familiarity with CI/CD tools (Jenkins, GitLab, GitHub Actions)",
        "Infrastructure as Code experience (Terraform, CloudFormation)",
        "Teaching or technical writing experience",
      ],
      salary: "₹10,000 - ₹30,000",
    },
    {
      id: 6,
      title: "Network Security Teacher",
      department: "Cybersecurity",
      location: "Hybrid",
      type: "Full-time",
      experience: "5-8 years",
      description: "Educate students on network security fundamentals, firewalls, VPNs, and advanced threat detection.",
      responsibilities: [
        "Develop network security curriculum",
        "Teach network protocols and security measures",
        "Conduct lab exercises on firewalls and IDS/IPS",
        "Train students on security monitoring tools",
        "Prepare students for network security certifications",
      ],
      requirements: [
        "Network security certifications (CCNP Security, etc.)",
        "Deep understanding of TCP/IP, routing, and switching",
        "Experience with security appliances and SIEM tools",
        "Knowledge of threat intelligence and incident response",
        "Strong teaching and demonstration skills",
      ],
      salary: "₹10,000 - ₹30,000",
    },
  ];

  const departments = ["all", "Frontend", "Backend", "Cybersecurity"];
  const jobTypes = ["all", "Full-time", "Part-time"];
  const locations = ["all", "Remote", "On-site", "Hybrid"];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesType = selectedType === "all" || job.type === selectedType;
    const matchesLocation =
      selectedLocation === "all" || job.location === selectedLocation;

    return matchesSearch && matchesDepartment && matchesType && matchesLocation;
  });

  const handleApply = (jobTitle: string) => {
    if (!applicationData.name || !applicationData.email || !applicationData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success(`Application submitted for ${jobTitle}!`);
    setApplicationData({
      name: "",
      email: "",
      phone: "",
      resume: "",
      coverLetter: "",
    });
  };

  const clearFilters = () => {
    setSelectedDepartment("all");
    setSelectedType("all");
    setSelectedLocation("all");
    setSearchTerm("");
  };

  const activeFiltersCount = [
    selectedDepartment !== "all",
    selectedType !== "all",
    selectedLocation !== "all",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Join Our Teaching Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Shape the future of tech education. Inspire students and grow your career as an
              instructor in Frontend, Backend, or Cybersecurity.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>{jobs.length} Open Positions</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Remote & Hybrid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden relative"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>

            {/* Desktop Filters */}
            <div className="hidden md:flex gap-2">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="all">All Departments</option>
                {departments.slice(1).map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="all">All Types</option>
                {jobTypes.slice(1).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="all">All Locations</option>
                {locations.slice(1).map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>

              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <div className="md:hidden mt-4 p-4 bg-muted/50 rounded-lg space-y-3 animate-fade-in">
              <div>
                <Label className="text-xs text-muted-foreground mb-1">Department</Label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="all">All Departments</option>
                  {departments.slice(1).map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label className="text-xs text-muted-foreground mb-1">Job Type</Label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="all">All Types</option>
                  {jobTypes.slice(1).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label className="text-xs text-muted-foreground mb-1">Location</Label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="all">All Locations</option>
                  {locations.slice(1).map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {activeFiltersCount > 0 && (
                <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
                  <X className="w-4 h-4 mr-2" />
                  Clear All Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-4 py-8">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16">
            <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No positions found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search criteria
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"}
            </p>

            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {job.title}
                    </h2>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-lg font-semibold text-primary">{job.salary}</span>
                    <span className="text-sm text-muted-foreground">{job.experience}</span>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4">{job.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-1">
                      {job.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm">Requirements</h3>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Apply for {job.title}</DialogTitle>
                      <DialogDescription>
                        Fill out the form below to submit your application. We'll review it and get
                        back to you soon.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="name">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={applicationData.name}
                          onChange={(e) =>
                            setApplicationData({ ...applicationData, name: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={applicationData.email}
                          onChange={(e) =>
                            setApplicationData({ ...applicationData, email: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={applicationData.phone}
                          onChange={(e) =>
                            setApplicationData({ ...applicationData, phone: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="resume">Resume/CV Link</Label>
                        <Input
                          id="resume"
                          placeholder="https://drive.google.com/..."
                          value={applicationData.resume}
                          onChange={(e) =>
                            setApplicationData({ ...applicationData, resume: e.target.value })
                          }
                          className="mt-1"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Link to your resume (Google Drive, Dropbox, etc.)
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="coverLetter">Cover Letter</Label>
                        <Textarea
                          id="coverLetter"
                          placeholder="Tell us why you're a great fit for this role..."
                          value={applicationData.coverLetter}
                          onChange={(e) =>
                            setApplicationData({
                              ...applicationData,
                              coverLetter: e.target.value,
                            })
                          }
                          rows={6}
                          className="mt-1"
                        />
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2">Position Details</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>
                            <strong className="text-foreground">Department:</strong>{" "}
                            {job.department}
                          </p>
                          <p>
                            <strong className="text-foreground">Location:</strong> {job.location}
                          </p>
                          <p>
                            <strong className="text-foreground">Type:</strong> {job.type}
                          </p>
                          <p>
                            <strong className="text-foreground">Salary:</strong> {job.salary}
                          </p>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleApply(job.title)}
                        className="w-full"
                        size="lg"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Submit Application
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-t border-border py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Don't see the right role?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented educators. Send us your resume and we'll keep you in
            mind for future opportunities.
          </p>
          <Button size="lg" variant="outline">
            Send General Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Career;