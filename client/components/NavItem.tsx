interface NavItemProps {
  label: string;
  Icon: React.FC;
}

const NavItem: React.FC<NavItemProps> = ({ label, Icon }) => {
  return (
    <li className="pl-3 py-2.5 rounded hover:bg-white hover:bg-opacity-40 ">
      <a
        href="#"
        className="flex items-center space-x-2 text-secondary font-medium hover:text-gray-800"
      >
        <div className="text-xl">
          <Icon />
        </div>
        <span>{label}</span>
      </a>
    </li>
  );
};

export default NavItem;
