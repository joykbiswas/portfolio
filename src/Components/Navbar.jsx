import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-center ">
        <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white max-w-7xl mx-auto">
          <div className="navbar-start  ">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <div>
                  <div className="flex flex-col gap-6">
                    <ul>
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending"
                              : isActive
                              ? "text-red-500 text-xl underline"
                              : "text-xl"
                          }
                        >
                          Home
                        </NavLink>
                      </li>

                      <li>
                        <a href="#about">About Me</a>
                          
                        
                      </li>
                      <li>
                        <NavLink
                          to=""
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending"
                              : isActive
                              ? "text-red-500 text-xl underline"
                              : "text-xl"
                          }
                        >
                          My Cart
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
            <div className=" w-16">
              {/* <img src="https://i.ibb.co/TPm2tyJ/mobile-plaza.jpg" alt="" /> */}
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal px-1">
              <div>
                <div className=" gap-6">
                  <ul className="flex gap-8">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-red-500 text-xl underline"
                            : "text-xl "
                        }
                      >
                        Home
                      </NavLink>
                    </li>

                    {/* ----end----- */}
                    <li>
                        <a href="#about">About Me</a>
                          
                        
                      </li>
                    <li>
                      <NavLink
                        to="/my-cart"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-red-500 text-xl underline"
                            : " text-xl "
                        }
                      >
                        My Cart
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
