"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const username = "Rahil Siddiqque";
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = usePathname();
  const [pathname, setPathname] = useState<string>("");
  const navData = [
    {
      title: "Dashboard",
      image: pathname.includes("/dashboard")
        ? "/dashboard_active.png"
        : "/dashboard.png",
      link: "/dashboard",
    },
    {
      title: "Skill Test",
      image: pathname.includes("/skill-test")
        ? "/badge_active.png"
        : "/badge.png",
      link: "/skill-test",
    },
    {
      title: "Internship",
      image: pathname.includes("/internship")
        ? "/internship_active.png"
        : "/internship.png",
      link: "/internship",
    },
  ];

  useEffect(() => {
    setPathname(location);
  }, [location]);

  return (
    <header className="w-full fixed top-0 left-0 bg-white border-b border-gray-200 z-50 lg:relative ">
      <div className=" bg-white px-10 w-full h-20 flex flex-row items-center justify-between">
        {/* company logo */}
        <div className="flex flex-row items-center gap-x-2 sm:gap-x-4">
          <img
            src="/logo.png"
            alt="WhatBytes logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <p className="text-black font-black text-lg sm:text-xl md:text-2xl lg:text-3xl">
            WhatBytes
          </p>
        </div>

        {toggleMenu && (
          <div className="fixed top-0 left-0 bg-white  w-full h-screen lg:hidden mt-20 flex flex-col  pt-10 ">
            {navData.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setToggleMenu(false)}
                className={`w-[90%] flex row items-center gap-4 py-4 mt-2 rounded-r-4xl hover:bg-gray-200/50  ${
                  pathname.includes(item.link) ? "bg-gray-200/50" : "bg-white"
                } ${
                  pathname.includes(item.link)
                    ? "text-[#0971E3]"
                    : "text-gray-700"
                }  px-10  font-bold`}
              >
                <img
                  src={item.image}
                  alt={`${item.title}`}
                  className="w-8 h-8"
                />
                {item.title}
              </Link>
            ))}
            {/* user profile picture and name ==> show in nav bar in  extra small screen (xs:)  but hide in small screen (sm:)*/}
            <div className="w-fit flex flex-row items-center gap-2  border  border-gray-200 rounded-md p-2 sm:hidden mx-10 mt-2">
              <img
                src="/user.png"
                alt={`${username} profile icon`}
                className="w-10 h-10 rounded-full"
              />
              <p className="text-black font-bold text-base">{username}</p>
            </div>
          </div>
        )}

        <div className="flex flex-row items-center gap-3">
          {/* user profile picture and name ==> hide in extra small (xs:) screen but show on header in small screen (sm:) */}
          <div className="hidden sm:flex flex-row items-center gap-2  border  border-gray-200 rounded-md p-2">
            <img
              src="/user.png"
              alt={`${username} profile icon`}
              className="w-10 h-10 rounded-full"
            />
            <p className="text-black font-bold text-base">{username}</p>
          </div>

          {/* menu icon */}
          <button
            className="lg:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <img src="/menuicon.svg" alt="menu icon" />
          </button>
        </div>

        {/* <div className="gap-4 flex flex-row items-center">

         
          <div className="hidden sm:flex flex-row items-center gap-2  border  border-gray-200 rounded-md p-2">
            <img
              src="/user.png"
              alt={`${username} profile icon`}
              className="w-10 h-10 rounded-full"
            />
            <p className="text-black font-bold text-base">{username}</p>
          </div>

      
          <button
            className="lg:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <img src="/menuicon.svg" alt="menu icon" />
          </button>
        </div> */}
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
