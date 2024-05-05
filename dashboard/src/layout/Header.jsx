import React, { Component } from 'react';
import { FaList } from 'react-icons/fa6';

const Header = ({ showSidebar, setShowSidebar }) => {
        return (
            <div className='fixed top-0 left-0 w-full py-5 lg:px-7 1-40'>
                <div className='ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#6a7fad] px-5 transition-all'>
                    <div onClick={() => setShowSidebar(!showSidebar) } className='w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer'>
                    <span><FaList className='text-white' /></span>
                    </div>

                    <div className='hidden md:block '>
                        <input className='text-[13px] px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#34405a] focus:border-indigo-300 overflow-hidden' type="text" name='search' placeholder='search'/>
                    </div>

                    <div className='flex justify-center items-center gap-8 relative'>
                        <div className='flex justify-center items-center'>
                            <div className='flex justify-center items-center gap-3'>
                                <div className='flex justify-center items-start flex-col text-end'>
                                    <h2 className='text-[13px] font-bold'>Billie Mead</h2>
                                    <span className='text-[12px] w-full font-normal'>Admin</span>
                                </div>
                                <img className='w-[45px] h-[45px] rounded-full overflow-hidden' src='http://localhost:3000/images/admin.jpg' alt='admin avatar' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
}

export default Header;