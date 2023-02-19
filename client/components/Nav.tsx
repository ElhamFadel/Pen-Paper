import {
  FaHome,
  FaCode,
  FaEye,
  FaGithub,
  FaSearch,
  FaInfoCircle,
  FaBook,
  FaMobileAlt,
} from 'react-icons/fa';
import NavItem from './NavItem';
interface NavProps {}

const navItemObject = [
  {
    label: 'Home',
    Icon: FaHome,
  },
  {
    label: 'Code',
    Icon: FaCode,
  },
  {
    label: 'Insights',
    Icon: FaEye,
  },
  {
    label: 'Github',
    Icon: FaGithub,
  },
  {
    label: 'Lens',
    Icon: FaSearch,
  },
  {
    label: 'About',
    Icon: FaInfoCircle,
  },
  {
    label: 'Guestbook',
    Icon: FaBook,
  },
  {
    label: 'App',
    Icon: FaMobileAlt,
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
