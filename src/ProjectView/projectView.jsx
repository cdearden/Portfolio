import React from 'react';
import { shape, string, number } from 'prop-types';
import './projectView.scss';

const ProjectView = ({ project, rowNumber }) => (
  <section className={`container-fluid bg-${rowNumber} text-center`}>
    <div className="row">
      <div className="col-md-6">
        <h1 className="title3">{project.title}</h1>
        <p className="description">{project.description}
        </p>
      </div>
      <div className="col-md-6">
        <img src={project.image} className="demoImage sliderImageRight" alt={project.imageAlt} />
      </div>
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
  rowNumber: number.isRequired,
};

export default ProjectView;
