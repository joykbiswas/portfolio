

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-center ">
        <div className="navbar fixed z-10 bg-opacity-40  bg-black text-white max-w-8xl mx-auto">
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
                    <ul className="text-black">
                      <li>
                      <a href="/">Home</a>
                      </li>

                      <li>
                        <a href="#about">About Me</a>
                      </li>
                      <li>
                        <a href="#resume">Resume</a>
                      </li>
                      <li>
                      <a href="#project">Project</a>
                      </li>
                      <li>
                      <a href="#contact">Contact Me</a>
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
                      <a href="/">Home</a>
                    </li>

                    {/* ----end----- */}
                    <li>
                      <a href="#about">About Me</a>
                    </li>
                    <li>
                    <a href="#resume">Resume</a>
                    </li>
                    <li>
                    <a href="#project">Project</a>
                    </li>
                    <li>
                    <a href="#contact">Contact Me</a>
                    </li>
                  </ul>
                </div>
              </div>

              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
