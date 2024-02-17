import authImage from "../../static/Auth2.jpg";
import React from "react";
import ThemeContext from "../../contex/themeContext/ThemeContext";
import SignUp from "./SignUp";
import AuthPageContext from "../../contex/authContext/authPageContext";
import Signin from "./SignIn";

export default function AuthPage() {
  const { theme } = React.useContext(ThemeContext);
  const { authPage } = React.useContext(AuthPageContext);
  return (
    <div className={theme ? "dark" : null}>
      <div className="h-screen bg color sm:py-6 sm:px-24   ">
        <div className="sm:flex sm:justify-center sm:gap-24 sm:items-center sm:mt-12    ">
          <div className=" sm:max-w-md   mx-4 sm:mx-0">
            <img className="rounded " src={authImage} alt="" />
          </div>
          {authPage ? (
            <div className=" sm:items-center mt-4 sm:mt-0 ">
              <div className="hidden sm:block sm:text-6xl sm:font-medium sm:mb-12  ">
                Sign in here
              </div>
              <Signin />
            </div>
          ) : (
            <div className=" sm:items-center mt-4 sm:mt-0 ">
              <div className="hidden sm:block sm:text-6xl sm:font-medium sm:mb-12  ">
                Create Account
              </div>
              <SignUp />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
