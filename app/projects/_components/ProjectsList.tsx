import Card from '@/components/Card';
import { PROJECT_CARDS } from '@/lib/COSTANTS';
import React from 'react';
import { Project } from '@/lib/COSTANTS';

interface ProjectSListProp {
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>;
}

const ProjectsList = ({ setSelected }: ProjectSListProp) => {
  console.log(setSelected);
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8">
      {PROJECT_CARDS.map((item) => {
        return <Card key={item.id} setSelected={setSelected} item={item} />;
      })}
    </div>
  );
};

export default ProjectsList;
