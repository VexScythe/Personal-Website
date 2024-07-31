import React from 'react';
import Link from 'next/link';
import { IoMdMail } from 'react-icons/io';
import { FaPhone, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto w-full flex flex-col xl:flex-row">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-8 pb-8 xl:pb-14 gap-4 xl:gap-48">
          <div className="flex flex-col h-full justify-center text-center xl:text-left">
            <h3 className="h1 mb-6">Contact me!</h3>
            <p className="max-w-[500px] mb-9 text-white/80">
              If you like my projects, if you want to hire me, or if you are
              simply curious about how I taught myself to code.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-8 xl:gap-14">
            <div className="flex bg-secondary rounded-xl items-center p-4 gap-4">
              <div className="flex gap-2 items-center">
                <IoMdMail className="w-6 h-6 text-accent" />
                <p className="text-base uppercase font-semibold">E-MAIL:</p>
              </div>
              <p className="text-end">davide.ludovici.wd@gmail.com</p>
            </div>
            <div className="flex bg-secondary rounded-xl items-center p-4 gap-4">
              <div className="flex gap-2 items-center">
                <FaGithub className="w-6 h-6 text-accent" />
                <p className="text-base uppercase font-semibold">GITHUB:</p>
              </div>
              <Link
                href="https://github.com/VexScythe"
                target="_blank"
                className="underline hover:text-accent text-end w-full"
              >
                <p>@VexScythe</p>
              </Link>
            </div>
            <div className="flex bg-secondary rounded-xl items-center p-4 gap-4">
              <div className="flex gap-2 items-center">
                <FaLinkedinIn className="w-6 h-6 text-accent" />
                <p className="text-base uppercase font-semibold">LINKEDIN:</p>
              </div>
              <p className="text-end w-full">@DavideLudovici</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
