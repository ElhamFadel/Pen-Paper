import { FaSearch, FaMobileAlt } from 'react-icons/fa';
import { BiCode } from 'react-icons/bi';
import { TiHome } from 'react-icons/ti';
import { HiLightBulb } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import { RiCameraLensFill } from 'react-icons/ri';
import { FcBusinesswoman } from 'react-icons/fc';
import { BsFileCodeFill, BsChatSquareQuoteFill } from 'react-icons/bs';
import NavItem from './NavItem';
interface NavProps {}

const navItemObject = [
  {
    label: 'Home',
    Icon: TiHome,
  },
  {
    label: 'Code',
    Icon: BiCode,
  },
  {
    label: 'Insights',
    Icon: HiLightBulb,
  },
  {
    label: 'Github',
    Icon: AiFillGithub,
  },
  {
    label: 'Lens',
    Icon: RiCameraLensFill,
  },
  {
    label: 'About',
    Icon: FcBusinesswoman,
  },
  {
    label: 'Guestbook',
    Icon: BsChatSquareQuoteFill,
  },
  {
    label: 'App',
    Icon: BsFileCodeFill,
  },
];
const Nav: React.FC<NavProps> = ({}) => {
  return (
    <nav className="fixed top-16 left-20 h-screen bg-gray-100 w-1/6 px-4 py-6 pl-10 flex flex-col justify-between">
      <div className="space-y-6">
        <ul className="space-y-4">
          {navItemObject.map(({ label, Icon }) => (
            <NavItem label={label} Icon={Icon} />
          ))}
        </ul>
      </div>
      <div className="text-right">
        <button className="bg-gray-200 rounded-full p-2 mr-4">
          <FaMobileAlt className="text-gray-700" />
        </button>
        <button className="bg-gray-200 rounded-full p-2">
          <FaSearch className="text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
