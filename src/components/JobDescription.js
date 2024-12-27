import React from "react";

const JobDescription = ({ job }) => {
  if (!job) {
    return (
      <div className="job-description">
        <h2>Job Description</h2>
        <p>Select a job to see the details.</p>
      </div>
    );
  }

  return (
    <div className="job-description">
      <h2>{job.title}</h2>
      <p><strong>Full Description:</strong> {job.fullDescription}</p>
      <p><strong>Requirements:</strong> {job.requirements}</p>
      <p><strong>Skills:</strong> {job.skills.join(", ")}</p>
      <p><strong>Openings:</strong> {job.openings}</p>
      <p><strong>Benefits & Perks:</strong> {job.benefits}</p>
      
    </div>
  );
};

export default JobDescription;
