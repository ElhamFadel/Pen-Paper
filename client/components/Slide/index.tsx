import Image from 'next/image';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
interface SlideProps {}

const slides = [
  {
    id: 1,
    title: 'Your Title',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Your Title',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 3,
    title: 'Your Title',
    image:
      'https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    title: 'Your Title',
    image:
      'https://images.unsplash.com/photo-1675436678084-f2c460bf5d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1853&q=80',
  },
];

const Slide: React.FC<SlideProps> = ({}) => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <div className="mt-2 rounded-xl overflow-hidden">
      <Swiper pagination autoplay={{ delay: 3000 }} loop>
        {slides.map(({ id, image, title }) => (
          <SwiperSlide
            key={id}
            className="content max-w-[1400px] max-h-[250px] rounded-xl overflow-hidden relative"
          >
            <div style={{ width: '100%', height: '100%' }}>
              <a href="#">
                <Image
                  src={image}
                  alt="logo"
                  width={1400}
                  height={250}
                  className="w-full h-full object-cover rounded hover:scale-105 transition duration-300 z-10"
                />
              </a>
            </div>
            <div className="absolute inset-0 flex items-center justify-center w-60 h-32 italic opacity-80 top-1/2 left-1/2 tracking-wider transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-white font-bold text-3xl">{title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
