import { AiFillDashboard } from "react-icons/ai";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { IoCard } from "react-icons/io5";
import { FaUserXmark } from "react-icons/fa6";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoChatbubbleSharp } from "react-icons/io5";

export const allNavigation = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        role: 'admin',
        path: '/admin/dashboard',
    },
    {
        id: 2,
        title: 'Orders',
        icon: <PiShoppingCartSimpleFill />,
        role: 'admin',
        path: '/admin/dashboard/orders',
    },
    {
        id: 3,
        title: 'Categories',
        icon: <BiSolidCategoryAlt />,
        role: 'admin',
        path: '/admin/dashboard/categories',
    },
    {
        id: 4,
        title: 'Vendors',
        icon: <HiUsers />,
        role: 'admin',
        path: '/admin/dashboard/vendors',
    },
    {
        id: 5,
        title: 'Payment Requests',
        icon: <IoCard />,
        role: 'admin',
        path: '/admin/dashboard/payment-requests',
    },
    {
        id: 6,
        title: 'Manage Vendors',
        icon: <FaUserXmark />,
        role: 'admin',
        path: '/admin/dashboard/manage-vendors',
    },
    {
        id: 7,
        title: 'Vendor Requests',
        icon: <FaCodePullRequest />,
        role: 'admin',
        path: '/admin/dashboard/vendor-requests',
    },
    {
        id: 8,
        title: 'Live Chat',
        icon: <IoChatbubbleSharp />,
        role: 'admin',
        path: '/admin/dashboard/live-chat',
    }
]