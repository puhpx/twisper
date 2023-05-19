import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

import SidebarLogo from './SidebarLogo';

const Sidebar = () => {
  const items = [
    {
      lable: 'Home',
      href: '/',
      icon: BsHouseFill
    },
    {
      lable: 'Notifications',
      href: '/notifications',
      icon: BsBellFill
    },
    {
      lable: 'Profile',
      href: '/users/001',
      icon: FaUser
    },
  ]
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
        </div>
      </div>
    </div>
  )
}

export default Sidebar;