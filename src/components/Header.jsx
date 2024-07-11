import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser} = useContext(UserContext)

  console.log("User:", loggedInUser)

  return (
    <div className="header flex justify-between items-center shadow-md ">
      <div className="image">
        <img className=" ml-2 w-14 h-14 xs:w-16 xs:h-16 sm:w-[75px] sm:h-[75px] lg:w-[130px] lg:h-[100px] lg:ml-3" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="flex items-center lg:mx-8 ">
          <li className="px-1 text-sm xs:text-base lg:text-lg lg:font-medium lg:px-3 lg:hover:bg-slate-200 lg:rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1 text-sm xs:text-base lg:text-lg lg:font-medium lg:px-3 lg:hover:bg-slate-200 lg:rounded-md">
            <Link to="/about">About</Link>
          </li>
          <li className="px-1 text-sm xs:text-base lg:text-lg lg:font-medium lg:px-3 lg:hover:bg-slate-200 lg:rounded-md">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-1 text-sm xs:text-base lg:text-lg lg:font-medium lg:px-3 lg:hover:bg-slate-200 lg:rounded-md">
            <Link to="/contact">🛒</Link>
          </li>
          <li className="px-2">
            <button
              className="p-1 text-sm xs:text-base bg-orange-400 rounded-md lg:text-lg lg:font-medium lg:px-3 lg:hover:bg-slate-200 lg:rounded-md"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
          <li className="px-4 font-bold">
            {loggedInUser}
          </li>
        </ul>
      </div>


    </div>
  );
};

// module.exports = Header;
export default Header;
