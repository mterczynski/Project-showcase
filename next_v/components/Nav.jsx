"use client";
import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from "./Logo";
import { useTranslations } from "next-intl";
import "../css/Nav.css";

function Nav() {
  const t = useTranslations("nav");
  const [toggle, setToggle] = useState(false);

  const navlink = [
    { name: t("email"), icon: MdEmail },
    { name: t("blog"), icon: FaBlog },
    { name: t("cv"), icon: PiReadCvLogoFill },
    { name: t("github"), icon: IoLogoGithub },
    { name: t("linkedin"), icon: FaLinkedin },
  ];
  const Toggleme = () => setToggle((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setToggle(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <section className="navSection">
        <div>
          <Logo />
        </div>

        <ul className="navDesktopLinks">
          {navlink.map((items, index) => {
            const Icon = items.icon;
            return (
              <div key={index} className="navLinkWrapper">
                <li className="navLink">
                  <Icon className="navIcon" />
                  <p className="navTex">{items.name}</p>
                </li>
              </div>
            );
          })}
        </ul>

        <div className="navMobileIcon" onClick={Toggleme}>
          {toggle ? (
            <IoMdClose size={30} className="navIconButton" />
          ) : (
            <IoMdMenu size={30} className="navIconButton" />
          )}
        </div>
      </section>

      {toggle && <MobileNav navlink={navlink} setToggle={setToggle} />}
    </nav>
  );
}

function MobileNav({ navlink, setToggle }) {
  return (
    <div className="mobileNavContainer slide-down">
      <div className="dropdown_menu">
        <Logo />
        <div className="py-2" onClick={() => setToggle(false)}>
          <IoMdClose size={30} className="dropdown_menu_icon" />
        </div>
      </div>
      <div className="mobileNavWrapper">
        <ul>
          {navlink.map((items, index) => {
            const Icon = items.icon;
            return (
              <li
                key={index}
                onClick={() => setToggle(false)}
                className="mobileNavItem">
                <Icon className="navIcon" />
                <p className="mobileNavText">{items.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
