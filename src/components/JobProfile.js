import React, { useState } from "react";

const JobProfile = ({ jobs, onSelectJob }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="job-profile">
      <h2>Job Profiles</h2>
      <div className="job-container">
        {visibleJobs.map((job, index) => (
          <div
            key={job.id}
            className={`job-card ${index === 0 ? "active" : ""}`}
            onClick={() => onSelectJob(job)}
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
  );
};

export default JobProfile;
