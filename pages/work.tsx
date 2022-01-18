import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import content from '../lib/content';
import WorkCard from '../components/WorkCard';

const work = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Header title="Work Experience" />
      <Nav name="work" />
      <div className="min-h-screen w-10/12 md:w-9/12 lg:w-8/12 pt-20 mx-auto flex flex-col">
        <h2 className="text-3xl md:text-5xl font-bold md:mt-10">
          Work Experience
        </h2>
        <div style={{ height: '3vh' }}></div>
        <div className="grid grid-cols-1 gap-8">
          {content.work.map((work, index) => {
            return <WorkCard work={work} key={index} />;
          })}
        </div>
      </div>
      <div style={{ height: '10vh' }}></div>
      <Footer />
    </div>
  );
};

export default work;
