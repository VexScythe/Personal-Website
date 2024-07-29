import { motion } from 'framer-motion';

const Slide = () => {
  return (
    <motion.div
      initial={{ top: '100vh' }}
      animate={{ top: '100vh' }}
      exit={{
        top: '-100vh',
        transition: {
          duration: 2,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="h-screen w-screen fixed top-0 left-0 bg-accent"
    />
  );
};

export default Slide;
