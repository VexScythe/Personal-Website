'use client';
import React from 'react';
import { useState } from 'react';
import ProjectsList from './_components/ProjectsList';
import Modal from './_components/Modal';
import { Project } from '@/lib/COSTANTS';

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="h3 uppercase pb-8">My projects</div>
        <ProjectsList setSelected={setSelected} />
        <Modal selected={selected} setSelected={setSelected} />
      </div>
    </section>
  );
};

export default Projects;
