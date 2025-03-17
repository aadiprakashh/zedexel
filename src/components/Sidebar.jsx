import React from 'react';
import { FiHome, FiUser } from 'react-icons/fi';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoFolderOpenOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation(); // Get the current URL path

    return (
        <aside className="fixed left-4 top-4 bottom-4 w-[150px] bg-gray-900 text-white rounded-xl shadow-lg flex flex-col items-center p-4 space-y-6">
            <h2 className="text-lg font-bold">Logo</h2>

            <nav className="flex flex-col space-y-6">
                {/* Explore */}
                <Link 
                    to="/explore" 
                    className={`flex flex-col items-center ${
                        location.pathname === "/explore" ? "text-white" : "text-gray-400"
                    } hover:text-white group`}
                >
                    <span className={`p-2 rounded-full transition-all duration-300 ${
                        location.pathname === "/explore" ? "bg-gray-600 text-white" : "group-hover:bg-gray-600 group-hover:text-white"
                    }`}>
                        <FiHome size={20} />
                    </span>
                    <span className="text-xs mt-1">Explore</span>
                </Link>

                {/* Contractors */}
                <Link 
                    to="/contractors" 
                    className={`flex flex-col items-center ${
                        location.pathname === "/contractors" ? "text-white" : "text-gray-400"
                    } hover:text-white group`}
                >
                    <span className={`p-2 rounded-full transition-all duration-300 ${
                        location.pathname === "/contractors" ? "bg-gray-600 text-white" : "group-hover:bg-gray-600 group-hover:text-white"
                    }`}>
                        <FiUser size={20} />
                    </span>
                    <span className="text-xs mt-1">Contractors</span>
                </Link>

                {/* Projects (Active Effect Applied) */}
                <Link 
                    to="/" 
                    className={`flex flex-col items-center ${
                        location.pathname === "/" ? "text-white" : "text-gray-400"
                    } hover:text-white group`}
                >
                    <span className={`p-2 rounded-full transition-all duration-300 ${
                       location.pathname === "/" || location.pathname.startsWith("/details")
 ? "bg-gray-600 text-white" : "group-hover:bg-gray-600 group-hover:text-white"
                    }`}>
                        <IoFolderOpenOutline size={20} />
                    </span>
                    <span className="text-xs mt-1">Projects</span>
                </Link>

                {/* Users */}
                <Link 
                    to="/users" 
                    className={`flex flex-col items-center ${
                        location.pathname === "/users" ? "text-white" : "text-gray-400"
                    } hover:text-white group`}
                >
                    <span className={`p-2 rounded-full transition-all duration-300 ${
                        location.pathname === "/users" ? "bg-gray-600 text-white" : "group-hover:bg-gray-600 group-hover:text-white"
                    }`}>
                        <HiOutlineUsers size={20} />
                    </span>
                    <span className="text-xs mt-1">Users</span>
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
