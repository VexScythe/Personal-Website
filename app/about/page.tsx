import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto w-full flex flex-col xl:flex-row">
        <div className="flex flex-col xl:flex-row justify-between pt-8 pb-8 xl:pb-14 gap-4 xl:gap-40">
          <div className="flex flex-col">
            <div className="h3 uppercase pb-8">About me:</div>
            <div className="max-w-[500px] mb-9 text-white/80">
              <p className="pb-8">
                Hi! I’m Davide Ludovici, a passionate self-taught web developer.
                Ever since I was a child, I have dreamed of becoming a
                programmer, especially a video game developer. This dream led me
                to pursue an IT education, but despite not completing my
                studies, my passion for programming never waned.
              </p>
              <p className="pb-8">
                {`After earning a diploma in accounting, I worked for many years
                as a Healthcare Assistant (OSS), assisting disabled patients.
                This work was very fulfilling, but I always felt the absence of
                my original dream. So, I decided to roll up my sleeves and study
                programming on my own.`}
              </p>
              <p className="pb-8">
                {`With determination and effort, I successfully launched my first
                website, an achievement I am very proud of. Although I have not
                yet worked formally in the web development field, I am eager to
                seize opportunities to prove myself. I love exploring new
                technologies and continue to learn every day, driven by my
                belief that "if you don't struggle, you don't learn."`}
              </p>
              <p className="pb-8">
                {`When I'm not immersed in code, I enjoy indulging in my passion
                for video games, an interest that has always inspired and
                continues to inspire me. I am excited to share my journey and
                see where my determination will take me.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <h2 className="h3 uppercase pb-8">What i used to learn:</h2>

            <p className="max-w-[500px] mb-9 text-white/80">
              I initially needed to relearn the basics of programming and this
              video series from The Coding Train was miraculous. In addition to
              the basics, I rediscovered the fun of programming.
            </p>
            <iframe
              height="315"
              className="rounded-xl mb-9 xl:w-[560px]"
              src="https://www.youtube.com/embed/HerCR8bw_GE?si=pRZ2HPVKojVUYKAe"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="max-w-[500px] mb-9 text-white/80">
              {`At the end of the course I felt lost. I had rediscovered the joy
              of programming but I didn't know how to continue my journey.
              Luckily I found The Odin Project to hold my hand.`}
            </p>
            <div className="xl:w-[560px]">
              <Link href="https://www.theodinproject.com/" target="_blank">
                <Image
                  height="315"
                  width="560"
                  alt="The Odin Project"
                  src="/odinproject.png"
                  className="rounded-xl mb-9"
                />
              </Link>
              <p className="max-w-[500px] mb-9 text-white/80">
                I then integrated Exercisms in my daily routine. A wonderful
                site full of exercises and challenges to practice your coding
                skills.
              </p>
              <Link href="https://exercism.org/" target="_blank">
                <Image
                  height="315"
                  width="560"
                  alt="Exercisms"
                  src="/exercisms.png"
                  className="rounded-xl"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
