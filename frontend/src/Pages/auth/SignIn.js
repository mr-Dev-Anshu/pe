import React from "react";
import ThemeContext from "../../contex/themeContext/ThemeContext";
import AuthPageContext from "../../contex/authContext/authPageContext";
export default function Signin() {
  const { theme } = React.useContext(ThemeContext);
  const {authPage , setAuthPage } =  React.useContext(AuthPageContext) ;

  const   handlePage = ()  => {
        setAuthPage(!authPage) ;
  }
  return (
    <div className={theme ? "dark" : null}>
      <div className="bg color mt-0  ">
        <div className="flex justify-center items-center  ">
          <div className=" min-h-80 sm:min-w-96 sm:w-[50%]  w-[90%] top-0 buttom-0">
            <form className=" flex flex-col gap-y-4 " action="">
              <div>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  required
                />
              </div>
              
              <button className="btn2" type="submit">
                Sign in 
              </button>
              <div className="flex gap-3">
                <p> Don't  have an account ? </p>{" "}
                <span onClick={handlePage} className="text-blue-600 cursor-pointer font-medium   ">
                  Sign Up {" "}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
