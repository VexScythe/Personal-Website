'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { Project } from '@/lib/COSTANTS';

interface CardProps {
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>;
  item: Project;
}

const Card = ({ setSelected, item }: CardProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
        }}
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        className="flex items-center justify-center"
      >
        <div className="relative flex flex-col w-full max-w-[48rem] border border-transparent hover:border-accent-hover xl:flex-row rounded-xl bg-secondary bg-clip-border text-white/80 shadow-md">
          <div className="relative m-0 w-full xl:w-2/5 shrink-0 overflow-hidden rounded-xl xl:rounded-r-none xl:rounded-bl-xl rounded-b-none  bg-clip-border text-gray-700">
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="pb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-accent antialiased">
              {item.type}
            </h6>
            <h4 className="pb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 capitalize antialiased">
              {item.name}
            </h4>
            <p className="pb-4 block font-sans text-sm font-normal leading-relaxed text-white/80 antialiased">
              {item.description}
            </p>
            <div className="flex pb-4 gap-8 text-accent uppercase text-base flex-wrap">
              {item.techs.map((tech, i) => {
                return <p key={i}>{tech}</p>;
              })}
            </div>
            <div className="flex justify-end items-center gap-4 w-full">
              <Link href={item.siteLink} target="_blank">
                <Button variant="outline" className="flex gap-2 items-center">
                  Visit
                  <FaArrowRight />
                </Button>
              </Link>
              <Link href={item.githubLink} target="_blank">
                <FaGithub className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
