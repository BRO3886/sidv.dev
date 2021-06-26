import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import content from '../lib/content';

const projects = () => {
  return (
    <div className="dark:bg-black">
      <Header />
      <Nav name="projects" />
      <div className="w-10/12 pt-20 md:pt-28 mx-auto flex flex-col dark:text-white">
        <h2 className="text-3xl md:text-5xl font-bold my-2">
          My <span className="text-blue">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {content.projects.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
      </div>
      <div style={{ height: '10vh' }}></div>
      <Footer />
    </div>
  );
};

export default projects;
