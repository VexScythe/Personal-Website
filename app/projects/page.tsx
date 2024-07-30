import Card from '@/components/Card';
import React from 'react';
import { PROJECT_CARDS } from '@/lib/COSTANTS';

const Projects = () => {
  return (
    <section className="h-full pb-8">
      <div className="container mx-auto h-full">
        <div className="h3 uppercase pb-8">My projects</div>
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8">
          {PROJECT_CARDS.map((item) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                type={item.type}
                name={item.name}
                description={item.description}
                siteLink={item.siteLink}
                githubLink={item.githubLink}
                techs={item.techs}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
