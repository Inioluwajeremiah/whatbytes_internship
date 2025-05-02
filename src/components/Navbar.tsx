"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
// #0971E3

const Navbar = () => {
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
    <nav className="w-[25%] h-screen lg:flex flex-col  border-r border-gray-200 pt-10 hidden">
      {navData.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`w-[90%] flex row items-center gap-4 py-4 rounded-r-4xl hover:bg-gray-200/50  ${
            pathname.includes(item.link) ? "bg-gray-200/50" : "bg-white"
          } ${
            pathname.includes(item.link) ? "text-[#0971E3]" : "text-gray-700"
          }  px-10  font-bold`}
        >
          <img src={item.image} alt={`${item.title}`} className="w-8 h-8" />
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
