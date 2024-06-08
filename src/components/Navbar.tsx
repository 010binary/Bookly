"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  OpenNav,
  SearchIcon,
  Notification,
  HelpIcon,
  LangIcon,
  USFlag,
  HomeIcon,
  AboutIcon,
  CloseNav,
  Avatar,
} from "../../public";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className=" relative pt-10 px-6 flex justify-between">
        <button
          onClick={handleToggleSidebar}
          aria-controls="separator-sidebar"
          type="button"
          className="inline-flex items-center ms-3 text-sm cursor-pointer text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <Image src={OpenNav} alt="Open Nav" width={20} height={20} />
        </button>

        <div>
          <button className="mr-4 cursor-pointer">
            <span className="sr-only">Search Icon</span>
            <Image src={SearchIcon} alt="search Icon" width={25} height={25} />
          </button>
          <button className="cursor-pointer">
            <span className="sr-only">Notification Icon</span>
            <Image
              src={Notification}
              alt="Notification Icon"
              width={25}
              height={25}
            />
          </button>
        </div>
      </nav>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-full h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-50 text-black`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex justify-between items-center my-4">
            <button
              onClick={handleCloseSidebar}
              type="button"
              className="text-gray-900 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <Image src={CloseNav} alt="Close Nav" width={25} height={25} />
              <span className="sr-only">Close menu</span>
            </button>
            <div>
              <button className="mr-4">
                <span className="sr-only">Search Icon</span>
                <Image
                  src={SearchIcon}
                  alt="search Icon"
                  width={25}
                  height={25}
                />
              </button>
              <button>
                <span className="sr-only">Notification Icon</span>
                <Image
                  src={Notification}
                  alt="Notification Icon"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
          <div className="bg-gray-400 flex p-3 my-10">
            <span className="h-full">
              <Image src={Avatar} alt="Avatar icon" className="h-full" />
            </span>
            <span className="ms-3">
              <p className="font-bold text-black">Melody Davison</p>
              <p className="font-light text-black">@melodydavison</p>
            </span>
          </div>
          <ul className="space-y-2 font-medium my-8">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <Image src={HomeIcon} alt="Help Icon" width={28} height={28} />
                <span className="flex-1 ms-3 whitespace-nowrap capitalize">
                  Home
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <Image src={AboutIcon} alt="Help Icon" width={28} height={28} />
                <span className="flex-1 ms-3 whitespace-nowrap capitalize">
                  about
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <Image src={HelpIcon} alt="Help Icon" width={28} height={28} />
                <span className="flex-1 ms-3 whitespace-nowrap capitalize">
                  Help center
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-black group"
              >
                <Image src={LangIcon} alt="Help Icon" width={28} height={28} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Change Language
                </span>
                <Image src={USFlag} alt="US Flag" width={28} height={28} />
              </a>
            </li>
          </ul>
          <Link href="#" className="mt-20">
            <ButtonComponent>Suggest a New Book</ButtonComponent>
          </Link>
          <span className="font-semibold text-gray-600 text-center block mt-80 w-full p-4">
            <span className="block text-center">Bookly </span>
            <span className="block text-center">Book Review App v1.0</span>
          </span>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
