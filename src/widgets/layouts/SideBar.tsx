import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess,SiAcclaim } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
import { AiFillCar } from 'react-icons/ai'
import { GiMechanicGarage,GiHealthNormal,GiPoliceBadge } from 'react-icons/gi'
import { FcStatistics } from 'react-icons/fc'
import { HiDocumentAdd } from 'react-icons/hi'
import { GrUserExpert } from 'react-icons/gr'
import { MdAutorenew } from 'react-icons/md'
import { PlusOutlined, PercentageOutlined,HistoryOutlined,ProfileOutlined,FileProtectOutlined } from '@ant-design/icons'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const location = useLocation()
    const [userType, setUserType] = useState("expert");
    const Menus = [
        { title: 'Traffics', path:'/traffics', src:<GiPoliceBadge/>, auth:"admin"},
        { title: 'Accidents', path: '/taccidents', src: <SiFuturelearn />, auth:"admin" },
        { title: 'Register Accident', path: '/registeraccident', src: <SiFuturelearn />, auth:"admin" },
        { title: 'Statistics', path: '/statistics', src: <FcStatistics />, auth:"admin" },
        { title:'Documentation',path:'/documentation',src:<GiMechanicGarage/>, gap: 'false', auth:"admin"},
        { title: 'My keys', path:'/keys', src:<AiFillCar/>, auth:"admin"},
        { title: 'Accidents', path:'/aaccidents', src:<AiFillCar/>, auth:"admin"},
    ]
    const sideBarLists = Menus.filter((items:any) => items.auth === userType);

    return (
        <>
            <div
                className={`${
                    open ? 'w-60' : 'w-fit'
                } hidden sm:block relative h-full duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-white`}
            >
                <Link to='/'>
                    <div className={`flex ${'gap-x-4'} items-center`}>
                        {true && (
                            <span className='text-xl font-medium whitespace-nowrap dark:text-zinc-700'>
                                Traffic System
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-2 p-1 text-base font-normal rounded-lg cursor-pointer dark:text-zinc-700 hover:bg-gray-200 dark:hover:bg-white dark:hover:shadow-lg
                        ${menu.gap ? 'mt-4' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-50 dark:shadow-lg '
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar