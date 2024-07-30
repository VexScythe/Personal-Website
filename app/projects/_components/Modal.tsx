import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { Project } from '@/lib/COSTANTS';

interface ModalProps {
  selected: Project | null;
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>;
}

const Modal = ({ selected, setSelected }: ModalProps) => {
  if (!selected) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default"
      >
        <motion.div layoutId={`card-${selected.id}`}>
          <Image
            src={selected.image}
            alt={selected.name}
            width={500}
            height={500}
            className="w-full h-full bottom-0 object-cover object-center relative rounded-t-xl"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="bg-secondary p-4 rounded-b-xl"
        >
          <h3 className="text-2xl font-bold mb-2 uppercase">{selected.name}</h3>
          <div className="flex flex-row pb-4 gap-8 text-accent uppercase text-base">
            {selected.techs.map((tech) => {
              return <p key={tech}>{tech}</p>;
            })}
          </div>
          <div className="flex items-center gap-4 w-full">
            <Link href={selected.siteLink} target="_blank">
              <Button variant="outline" className="flex gap-2 items-center">
                Visit
                <FaArrowRight />
              </Button>
            </Link>
            <Link href={selected.githubLink} target="_blank">
              <FaGithub className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
