import img from '/images/tech.avif';
import Image from 'next/image';
import Link from 'next/link';
interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      <div className="swiper-slide">
        <div className="content max-w-[1400px] h-[250px] rounded-xl overflow-hidden relative">
          <a href="#" className="">
            <Image
              src={img}
              alt="logo"
              className="w-full h-full fit-cover rounded hover:scale-105 transition duration-300 z-10"
            />
          </a>
          <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-20">
            <h2 className="text-white font-bold text-2xl">Your Title</h2>
          </div>
        </div>
      </div>
    </>
  );
};
