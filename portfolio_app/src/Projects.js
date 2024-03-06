import { React, useState } from "react";
import { projects } from "./data";

const Projects = () => {
  const projectFilterTagList = ['All', 'Front-End', 'Responsive', 'Angular', 'Bootstrap'];
  const ITEMS_PER_PAGE = 4;

  const [projectFilterTag, setProjectFilterTag] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentPage, setCurrentPage] = useState(1);


  const filterProjects = (filterTag) => {
    setProjectFilterTag(filterTag);
    setCurrentPage(1);

    if (filterTag === 'All') {
      setFilteredProjects(projects);
      return;
    }
    const filteredProjects = projects.filter(project => project.tags.indexOf(filterTag) >= 0)
    setFilteredProjects(filteredProjects);
  }

  return <section className="project-container">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Projects</h3>
        <div className="tags-container d-flex flex-wrap gap-2">
          {projectFilterTagList.map((tag) => {
            return <button className={"btn btn-sm m-1 " + (tag === projectFilterTag ? 'btn--fill' : 'btn--border')}
              onClick={() => filterProjects(tag)}
              key={tag}>{tag}</button>
          })}
          
        </div>
      </div>
    </div>
    <div className="project-list">
      <div className="row">
        {filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((project) => {
          return <div className="col-md-6 mb-4" key={project.title}>
            <article className="card project">
              <div className="card-body">
                <img className="project__img" src={ project.imageUrl }
                  alt={`screenshot of ${ project.title } project`} />
                <div className="project__tags">{project.tags.map(tag => '#' + tag).join(', ')}</div>
                <header className="project__title">{project.title}</header>
                <div className="project__description">{project.description}</div>
                <div className="project__action-container">
                  <a href={ project.demoUrl } target="_blank" rel="noreferrer"
                    className="btn btn--fill me-2" role="button">Demo</a>
                  <a href={ project.codeUrl } target="_blank" rel="noreferrer"
                    className="btn btn--border" role="button">Code</a>
                </div>
              </div>
            </article>
          </div>
        })}
      </div>
    </div>
    <div className="project-pagination">
      <div className="text-end">
        {Array.from(Array(Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)).keys()).map(index => {
          return <button className={"btn btn--flat ms-3 " + (index + 1 === currentPage ? 'btn--fill': 'btn--default')}
            onClick={() => setCurrentPage(index + 1)} key={index + 1}>
            {index + 1}
          </button>
        })}
      </div>
    </div>
  </section>
}

export default Projects;