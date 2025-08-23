import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { LuSquareActivity } from "react-icons/lu";
import { GiWallet } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const navItems = [
    {
      to: "/",
      icon: <IoHomeSharp className="font-bold text-3xl lg:text-6xl" />,
      label: "Home",
      match: (pathname) => pathname === "/",
    },
    {
      to: "/activity",
      icon: <LuSquareActivity className="font-bold text-3xl lg:text-6xl" />,
      label: "Activity",
      match: (pathname) => pathname.startsWith("/activity"),
    },
    {
      to: "/wallet",
      icon: <GiWallet className="font-bold text-3xl lg:text-6xl" />,
      label: "Wallet",
      match: (pathname) => pathname.startsWith("/wallet"),
    },
    {
      to: "/account",
      icon: <MdAccountCircle className="font-bold text-3xl lg:text-6xl" />,
      label: "Account",
      match: (pathname) => pathname.startsWith("/account"),
    },
  ];

  return (
    <footer className="fixed left-0 bottom-0 w-full bg-[#333332] text-white text-center py-1 z-50 rounded-t-2xl">
      <div className="flex justify-between px-2 py-4">
        {navItems.map((item) => {
          const isActive = item.match(location.pathname);
          const textColor = isActive ? "#C4933F" : "#fff";
          return (
            <Link to={item.to} key={item.label}>
              <div className="flex items-center flex-col">
                {React.cloneElement(item.icon, { style: { color: textColor } })}
                <p className="font-semibold" style={{ color: textColor }}>
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
