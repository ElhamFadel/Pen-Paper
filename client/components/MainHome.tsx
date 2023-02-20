import { Hero } from './Hero';

interface MainHomeProps {}

export const MainHome: React.FC<MainHomeProps> = ({}) => {
  return (
    <div className="w-4/6 mx-auto px-4 bg-white">
      <Hero />
    </div>
  );
};
