import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../../assets/logo (1).png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHover, setIsHover] = useState(false);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-4 sticky top-0">
      <div className="flex  justify-between navbar">
        <div className="flex nav-logo">
          <img src={logo} alt="" />
          <a className="btn btn-ghost normal-case text-2xl font-extrabold nav-title">
            Action figure toys
          </a>
        </div>
        <div className="flex justify-between">
          <ul className="nav-routes flex px-1 text-slate-400">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="allToys">All Toys</Link>
            </li>
            <li className="mr-4">
              <Link to="/blogs">Blogs</Link>
            </li>
            { user &&
              <li className="mr-4">
              <Link to="/myToys">My Toys</Link>
            </li>}
              { user && <li className="">
              <Link to="/addToy">Add A Toy</Link>
            </li>}
          </ul>
        </div>
        <div className="flex rounded-full"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
            { user &&
              <div className="user-profile" style={{ position: "relative" }}>
                <img src={user?.photoURL} alt="" />
                {isHover && (
                <span
                  style={{
                    position: "absolute",
                    fontSize: "10px",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#ffffff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {user?.displayName}
                </span>
              )}
              </div>
              }
              {user ? (
              <button onClick={handleLogout} className="logout-button ">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
            )}
          </div>
          
      </div>
    </div>
  );
};

export default Header;
