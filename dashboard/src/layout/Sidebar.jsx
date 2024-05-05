import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNavigation } from '../navigation';
import { RiLogoutBoxFill } from "react-icons/ri";

const Sidebar = () => {

    const { pathname } = useLocation(); // for use when setting/displaying menu active states

    const [allNavigation, setAllNavigation] = useState([]);

    useEffect(() => {
        const navs = getNavigation('admin');
        setAllNavigation(navs);
    }, [])
    // console.log(allNavigation);

    return (
        <div>
            <div>

            </div>
            <div className={`w-[260px] fixed bg-[#263046] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all`}>
                <div className='h-[70px] flex justify-center items-center'>
                    <Link to='/' className='w-[180px] h-[50px]'>
                        <img className='w-full' src="http://localhost:3000/images/highheelheaven-logo-250x75-white.png" alt="logo" />
                    </Link>
                </div>
                <div className='px-[16px]'>
                    <ul className="border-solid border-2 border-[#3e4d6d] p-3">
                        {
                            allNavigation.map((nav, index) =>
                                <li key={index}>
                                    <Link to={nav.path} className={`${pathname === nav.path ? 'bg-blue-600 shadow-indigo-500/50 text-white duration-500' : 'bg-transparent font-semibold duration-200'} px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[10px] hover:pl-4 transition-all w-full mb-5 mt-5`}>
                                        <span className="text-white">{nav.icon}</span>
                                        <span className="text-white">{nav.title}</span>
                                    </Link>
                                </li>
                            )
                        }
                        <li>
                            <button className={'bg-transparent font-semibold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[10px] hover:pl-4 transition-all w-full mb-5 mt-5'}>
                                <span className="text-white"><RiLogoutBoxFill /></span>
                                <span className="text-white">Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;