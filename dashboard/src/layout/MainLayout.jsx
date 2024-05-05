import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = () => {
    return (
        <div className='bg-[#cdcae9] w-full min-h-screen'>
            <Header />
            <Sidebar />
            <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
                <Outlet />  {/* An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */}
            </div>
        </div>
    );
};

export default MainLayout;