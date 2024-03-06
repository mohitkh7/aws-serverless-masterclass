import React from 'react';
import skills from './data';

const Skills = () => {
  return <section className="card skills">
    <div className="card-body">
      <h3 className="skills__title card-title">Skills</h3>
      <div className="skills__list d-grid gap-3">
        {skills.map((skill) => {
          return (<div className="skill row" key={"skill-" + skill.name}>
            <label className="col-5 skill__name">{skill.name}</label>
            <div className="col-7">
              <div className="progress" title={skill.value + "%"}>
                <div className="progress-bar" role="progressbar"
                  style={{"width": skill.value + '%'}}>
                </div>
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  </section>
};

export default Skills;