'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import {
  SiAstro,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiMongodb,
  SiTailwindcss,
  SiVite,
  SiReact,
  SiNextdotjs,
} from 'react-icons/si';

const techIcons = [
  { icon: <SiHtml5 />, path: '' },
  { icon: <SiCss3 />, path: '' },
  { icon: <SiJavascript />, path: '' },
  { icon: <SiTypescript />, path: '' },
  { icon: <SiTailwindcss />, path: '' },
  { icon: <SiVite />, path: '' },
  { icon: <SiAstro />, path: '' },
  { icon: <SiReact />, path: '' },
  { icon: <SiNextdotjs />, path: '' },
  { icon: <SiGraphql />, path: '' },
  { icon: <SiMongodb />, path: '' },
];

export default function MarqueeComp() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <Marquee
        gradient={true}
        gradientColor="#1c1c22"
        pauseOnHover={true}
        speed={35}
        style={{ height: '100px', display: 'flex', alignItems: 'center' }}
      >
        {techIcons.map((item, i) => (
          <div
            key={i}
            style={{ padding: '0 30px', fontSize: '6rem', color: 'white' }}
          >
            <Link href={item.path}>{item.icon}</Link>
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
}
