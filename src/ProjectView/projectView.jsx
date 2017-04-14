import React from 'react';
import { shape, string } from 'prop-types';
import './projectView.scss';

const ProjectView = ({ project }) => (
  <section className="layout-content project">
    <div className="project-description">
      <h1>{project.title}</h1>
      <p className="text-xl" >{project.description}
      </p>
    </div>
    <div className="project-image">
      <img src={project.image} className="demoImage" alt={project.imageAlt} />
    </div>
  </section>
);

ProjectView.propTypes = {
  project: shape({
    title: string.isRequired,
    description: string.isRequired,
    image: string.isRequired,
    imageAlt: string.isRequired,
  }).isRequired,
};

export default ProjectView;
