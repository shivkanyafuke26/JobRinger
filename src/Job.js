import React, { useState } from "react";
import "./components/Job.css";

const Job = () => {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      salary: "₹12,000",
      shortDescription: "Join our team of skilled engineers working on cutting-edge projects.",
      companyWebsite: "https://www.example.com",
      fullDescription: "Responsibilities include writing code, testing, and collaborating with teams. Required skills: JavaScript, React.",
      requirements: "BTech in Computer Science, 2+ years experience",
      benefits: "Flexible working hours, Health insurance",
    },
    {
      id: 2,
      title: "Data Analyst",
      salary: "₹15,000",
      shortDescription: "Analyze data to generate reports for decision-making.",
      companyWebsite: "https://www.example.com",
      fullDescription: "Analyze large datasets and present insights. Required skills: SQL, Python, Data Visualization.",
      requirements: "BSc in Mathematics, 1+ year experience",
      benefits: "Remote work, Paid leaves",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      salary: "₹13,000",
      shortDescription: "Design user interfaces for our mobile applications.",
      companyWebsite: "https://www.example.com",
      fullDescription: "Work closely with product teams to create designs for applications. Required skills: Figma, Adobe XD.",
      requirements: "Degree in Design, 2+ years experience",
      benefits: "Creative freedom, Performance bonuses",
    },
    {
      id: 4,
      title: "Backend Developer",
      salary: "₹18,000",
      shortDescription: "Develop server-side logic and integrate APIs.",
      companyWebsite: "https://www.example.com",
      fullDescription: "Responsibilities include building and maintaining APIs. Required skills: Node.js, Express.",
      requirements: "3+ years experience, strong knowledge of databases",
      benefits: "Health benefits, Stock options",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      salary: "₹20,000",
      shortDescription: "Manage cloud infrastructure and automation tools.",
      companyWebsite: "https://www.example.com",
      fullDescription: "Responsibilities include cloud management, automation, and monitoring. Required skills: AWS, Docker.",
      requirements: "2+ years experience, strong knowledge of CI/CD pipelines",
      benefits: "Annual bonus, Flexible work hours",
    },
    // Add more jobs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % jobs.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 2;
      return newIndex < 0 ? jobs.length + newIndex : newIndex;
    });
  };

  const visibleJobs = jobs.slice(currentIndex, currentIndex + 2);

  if (visibleJobs.length < 2 && jobs.length > 2) {
    visibleJobs.push(...jobs.slice(0, 2 - visibleJobs.length));
  }

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="job-container">
      <div className="job-profiles">
        <h2>Job Profiles</h2>
        <div className="job-list">
          {visibleJobs.map((job, index) => (
            <div
              key={job.id}
              className={`job-card ${index === 0 ? "active" : ""}`}
              onClick={() => handleSelectJob(job)}
            >
              <h3>{job.title}</h3>
              <p>
                <strong>Salary:</strong> {job.salary}
              </p>
              <p>{job.shortDescription}</p>
              <a
                href={job.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Company Website
              </a>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <button className="nav-button" onClick={handleBack}>
            Back
          </button>
          <button className="nav-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>

      <div className="job-description">
        {selectedJob ? (
          <div>
            <h3>{selectedJob.title}</h3>
            <p><strong>Description:</strong> {selectedJob.fullDescription}</p>
            <p><strong>Requirements:</strong> {selectedJob.requirements}</p>
            <p><strong>Benefits:</strong> {selectedJob.benefits}</p>
            <button
              className="nav-button"
              onClick={() => window.open(selectedJob.applyLink, "_blank")}
            >
              Apply Now
            </button>
          </div>
        ) : (
          <p>Select a job profile to view the full description.</p>
        )}
      </div>
    </div>
  );
};

export default Job;
