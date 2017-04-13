import React from 'react';
import ProjectView from '../ProjectView/projectView';
import { projects } from '../content';
import './mainContent.scss';

const MainContent = () => (
  <section className="container-fluid content">
    {projects.map((project, i) => (
      <ProjectView rowNumber={i + 1} key={project.title} project={project} />
    ))}
  </section>
);

export default MainContent;
