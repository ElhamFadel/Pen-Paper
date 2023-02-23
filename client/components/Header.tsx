import Image from 'next/image';
import logo from '../images/logo.png';
import { HiSun } from 'react-icons/hi';
interface headerProps {}

const Header: React.FC<headerProps> = ({}) => {
  return (
    <>
      <header className="bg-whitesmoke border-b border-gray-300 fixed top-0 left-0 right-0 border-gray z-10 opacity-90 shadow-sm">
        <div className="container mx-auto px-32 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Pen Logo" className="h-8 w-auto" />
            <h1 className="text-lg font-medium text-primary">Pen</h1>
          </div>
          <div className="flex items-center space-x-4 hover:text-red-500">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md font-medium border-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              EN
            </button>
            <HiSun className="text-xl text-gray-200 cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
