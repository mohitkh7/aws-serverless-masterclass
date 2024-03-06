import React from "react";
import { jobs } from "./data";

const Experience = () => {
  return <section className="card experience">
    <div className="card-body">
      <h3 className="card-title experience__title">Experiences</h3>
      <div className="d-grid gap-5">
        {jobs.map((job) => {
          return <article className="job" key={job.company}>
            <div className="job__left-section">
              <img className="img-fluid img--flat job__logo" src={ job.imgUrl }
                alt={ job.company } title={ job.company } />
            </div>
            <div className="job__right-section">
              <div className="job__period">{job.period}</div>
              <div className="job__title">{job.position}</div>
              <div className="job__description">{job.description}</div>
            </div>
          </article>
        })}
        
      </div>
    </div>
  </section>
}

export default Experience;