'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { Project } from '../lib/COSTANTS';

const Card = ({
  image,
  type,
  name,
  description,
  siteLink,
  githubLink,
  techs,
}: Project) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
        }}
        className="flex items-center justify-center"
      >
        <div className="relative flex flex-col w-full max-w-[48rem] border border-transparent hover:border-accent-hover rounded-xl bg-secondary bg-clip-border text-white/80 shadow-md">
          <div className="relative m-0 w-full shrink-0 overflow-hidden rounded-t-xl  bg-clip-border text-gray-700">
            <Image
              src={image}
              alt={name}
              width={500}
              height={500}
              className="w-full h-full bottom-0 object-cover object-center"
            />
          </div>
          <div className="p-4">
            <h6 className="text-xs uppercase leading-relaxed tracking-normal text-accent antialiased">
              {type}
            </h6>
            <h4 className="pb-2 block text-2xl font-semibold tracking-normal text-white/80 uppercase antialiased">
              {name}
            </h4>
            <p className="pb-4 block text-sm font-normal leading-relaxed text-white/80 antialiased">
              {description}
            </p>
            <div className="flex pb-4 gap-4 text-accent uppercase text-xs flex-wrap">
              {techs.map((tech, i) => {
                return <p key={i}>{tech}</p>;
              })}
            </div>
            <div className="flex justify-end items-center gap-4 w-full">
              <Link href={siteLink} target="_blank">
                <Button variant="outline" className="flex gap-2 items-center">
                  Visit
                  <FaArrowRight />
                </Button>
              </Link>
              {githubLink && (
                <Link href={githubLink} target="_blank">
                  <FaGithub className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
