import React,{useState} from 'react'
import { Transition } from "@headlessui/react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import { Input, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from 'typescript-cookie'


import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess,SiAcclaim } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
import { AiFillCar } from 'react-icons/ai'
import { GiMechanicGarage } from 'react-icons/gi'
import { GiPoliceBadge } from 'react-icons/gi'
import { HiDocumentAdd } from 'react-icons/hi'
import { PlusOutlined, PercentageOutlined,HistoryOutlined,ProfileOutlined,FileProtectOutlined } from '@ant-design/icons'


const { Search } = Input;



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const avatar = useSelector((state:any) => state.userType.p_image);
    const avatarImage = "https://blackneb.com/images/photos/" + avatar;
    const userName = useSelector((state:any) => state.userType.user_name);
    const fullName = useSelector((state:any) => state.userType.f_name) + " " + useSelector((state:any) => state.userType.l_name);
    const onSearch = (value: string) => alert(value);
    const logout = () => {
      navigate("/");
      setCookie("username","false",{ expires: -1 });
      setCookie("password","false",{ expires: -1 });
      window.location.reload();
      

    }
    const Menus = [
      { title: 'Home', path: '/' },
      { title: 'Calander', path:'/calander'},
  ]

  const menusMobile = [
    { title: 'Traffics', path:'/vehicle', src:<GiPoliceBadge/>, auth:"admin"},
    { title: 'Accidents', path: '/analytics', src: <SiFuturelearn />, auth:"admin" },
    { title: 'Statistics', path: '/users', src: <CgProfile />, auth:"admin" },
    { title:'Documentation',path:'/garages',src:<GiMechanicGarage/>, gap: 'false', auth:"admin"},
    { title: 'My keys', path:'/vehicle', src:<AiFillCar/>, auth:"admin"},
    { title: 'Accidents', path:'/vehicle', src:<AiFillCar/>, auth:"admin"},
]

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to='/profile' >
          My Profile
        </Link>
      ),
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: (
        <Link to='/changepassword' >
          password
        </Link>
      ),
      icon: <UserOutlined />,
    },
    {
      key: '3',
      label: (
        <div>
          <p onClick={() => logout()} >Logout</p>          
        </div>
      ),
      icon: <LogoutOutlined />,
    },
  ];



  return (
    <div>
        <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start w-full h-16">
          <div className="flex-shrink-0">
              <img src={logo} alt="" className="h-16 rounded-full"/>
              </div>
            <div className="flex items-center justify-start w-full">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  <div>
                    {
                      Menus.map((items:any,index)=> (
                        <Link to={items.path} key={index} className={`hover:bg-slate-50 hover:shadow-lg text-zinc-800 px-3 py-2 rounded-md text-sm font-medium mx-2 ${
                          location.pathname === items.path &&
                          'bg-gray-50 dark:shadow-lg '
                      }`}>
                          {items.title}
                        </Link>
                      ))
                    }
                  </div>
                 
                </div>
              </div>
            </div>
            <div className='hidden md:flex justify-end ml-4'>
                    
                    <Dropdown menu={{ items }} placement="bottom" arrow>
                      <Avatar src={avatarImage} className='mx-4' style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
                    </Dropdown>
                    {/* <p className='text-xs'>{fullName}</p> */}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref:any) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {
                      menusMobile.map((items:any,index)=> (
                        <Link onClick={()=> setIsOpen(false)} to={items.path} key={index} className={`hover:bg-gray-700 bg-gray-600 text-white block px-3 py-2 rounded-md text-base font-medium ${
                          location.pathname === items.path &&
                          'bg-black dark:shadow-lg '
                      }`}>
                          {items.title}
                        </Link>
                      ))
                    }
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
    </div>
  )
}

export default NavBar
