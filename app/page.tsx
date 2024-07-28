import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import MarqueeComp from '@/components/MarqueeComp';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-14">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br />
              <span className="text-accent">Davide Ludovici</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Proud to be a self-taught programmer. Always curious to learn new
              technologies and determined to improve my skills.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <div className="pb-14 flex flex-col gap-6">
          <h3 className="text-xl">Tech I learned so far</h3>
          <div
            style={{
              height: '4px',
              background:
                'linear-gradient(to right, #1c1c22, #00ff99, #1c1c22)',
              margin: '20px 0',
            }}
          />
          <MarqueeComp />
          <div
            style={{
              height: '4px',
              background:
                'linear-gradient(to right, #1c1c22, #00ff99, #1c1c22)',
              margin: '20px 0',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
