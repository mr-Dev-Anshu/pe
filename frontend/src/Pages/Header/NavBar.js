import React, { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import ThemeContext from "../../contex/themeContext/ThemeContext";
export default function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className={theme ? "dark" : null}>
      <div className="bg px-12 py-4 color ">
        <div className="sm:block hidden ">
          <div className=" flex justify-between   ">
            <a href="/">
            <div>
              <span className="border-r border-gray-600 pr-12 text-2xl font-bold cursor-pointer ">
                Mr. Anshu{" "}
                <span className="dark:text-gray-500 dark:hover:text-white ">
                  Dev.
                </span>
              </span>
            </div>
            </a>

            <span className="border-r border-gray-600 pr-12 ">
              <ul className="flex gap-20 ">
                <li className="cursor-pointer text-gray-500 font-bold dark:hover:text-white hover:text-black   ">
                  Home
                </li>
                <li className="cursor-pointer text-gray-500 font-bold dark:hover:text-white hover:text-black   ">
                  Services
                </li>
                <li className="cursor-pointer text-gray-500 font-bold dark:hover:text-white hover:text-black   ">
                  about
                </li>
                <li className="cursor-pointer text-gray-500 font-bold dark:hover:text-white  hover:text-black  ">
                  work
                </li>
              </ul>
            </span>

            <span className="flex gap-24 items-center ">
              <span className="w-10 h-10 cursor-pointer  rounded-full flex items-center justify-center   bg-gray-700 color  ">
                A
              </span>
              <div className="btn">Contact me </div>
              <MdDarkMode
                onClick={handleTheme}
                className="cursor-pointer "
                size={40}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
