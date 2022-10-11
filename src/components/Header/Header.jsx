import React, { useEffect, useState } from "react";
import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { NavLink } from "react-router-dom";
import profile from "../../assets/Images/IMG_0706.png";
import logo from "../../assets/Images/logo.png";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 text-[#111D5E] w-full ${
        scroll && "backdrop-blur-[5px] bg-white/20 shadow-lg"
      }`}
    >
      <Navbar className="md:container mx-auto h-[80px]">
        <Navbar.Start>
          <NavLink
            to={"/"}
            className="flex justify-center items-center normal-case text-3xl font-bold"
          >
            <img src={logo} alt="" className="w-[60px]" />
            Quiz Dude
          </NavLink>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <Menu
            horizontal
            className="p-0 flex gap-20 text-[24px] font-semibold"
          >
            <NavLink
              to={"/"}
              className="hover:text-[#F68B57] transition delay-75"
            >
              Home
            </NavLink>

            <NavLink
              to={"statistics"}
              className="hover:text-[#F68B57] transition delay-75"
            >
              Statistics
            </NavLink>

            <NavLink
              to={"blog"}
              className="hover:text-[#F68B57] transition delay-75"
            >
              Blog
            </NavLink>
          </Menu>
        </Navbar.Center>
        <Navbar.End>
          <div className="w-10">
            <img
              className="w-full rounded-full"
              src={profile}
              alt="ProfileImage"
            />
          </div>
          <Dropdown vertical="end">
            <Button color="ghost" tabIndex={0} className="lg:hidden">
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            {/* <Dropdown.Menu className="w-52 menu-compact">
              <Dropdown.Item>
                <NavLink>Home</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink>Statistics</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink>Blog</NavLink>
              </Dropdown.Item>
            </Dropdown.Menu> */}
          </Dropdown>
        </Navbar.End>
      </Navbar>
    </div>
  );
};

export default Header;
