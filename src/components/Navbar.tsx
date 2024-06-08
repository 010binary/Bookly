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
  const [popup, setPopup] = useState({ show: false, message: "" });

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePopup = (message: string) => {
    setPopup({ show: true, message });
  };

  const closePopup = () => {
    setPopup({ show: false, message: "" });
  };

  return (
    <>
      <nav className="relative pt-10 px-6 pb-2 flex justify-between">
        <button
          onClick={handleToggleSidebar}
          aria-controls="separator-sidebar"
          type="button"
          className="inline-flex items-center ms-3 text-sm cursor-pointer text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">
            {isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          </span>
          <Image
            src={isSidebarOpen ? CloseNav : OpenNav}
            alt={isSidebarOpen ? "Close Nav" : "Open Nav"}
            width={20}
            height={20}
          />
        </button>

        <div>
          <button
            className="mr-4 cursor-pointer"
            onClick={() =>
              handlePopup("This feature is currently not available")
            }
          >
            <span className="sr-only">Search Icon</span>
            <Image src={SearchIcon} alt="search Icon" width={25} height={25} />
          </button>
          <button
            className="cursor-pointer"
            onClick={() =>
              handlePopup("This feature is currently not available")
            }
          >
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

      {popup.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-0 right-2 text-red-600 text-2xl"
            >
              <span className="sr-only">Close</span>
              &times;
            </button>
            <p className="mb-4">{popup.message}</p>
          </div>
        </div>
      )}

      <aside
        id="separator-sidebar"
        className={`fixed top-[4.8rem] left-0 z-40 w-full h-[calc(100vh-4rem)] transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white text-black`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
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
