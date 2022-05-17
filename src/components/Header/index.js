import React, { useEffect, useRef } from "react";
import "./style.css";
// --------------
import Logo from "../../assets/images/logos/colored-logo.svg";

const Header = ({ scrollPosition }) => {
  const navLinks = [
    { href: "#home", text: "Home", className: "" },
    { href: "#about", text: "About Us", className: "" },
    { href: "#services", text: "Our Services", className: "" },
    { href: "#testimonials", text: "Testimonials", className: "" },
    { href: "#contact", text: "Contact", className: "" },
    { href: "#newsletter", text: "Get Free quote", className: "main-btn-2" },
  ];
  const menuTogglerRef = useRef();
  const navlinksRef = useRef();
  const headerRef = useRef();

  const menuToggle = () => {
    menuTogglerRef.current.classList.toggle("active");

    navlinksRef.current.style.display = "flex";
    let linkHeight = navlinksRef.current.clientHeight + "px";
    if (menuTogglerRef.current.classList.contains("active")) {
      navlinksRef.current.animate([{ height: "0px" }, { height: linkHeight }], {
        duration: 300,
      });
    } else {
      navlinksRef.current.animate([{ height: linkHeight }, { height: "0px" }], {
        duration: 300,
      });
      setTimeout(() => {
        navlinksRef.current.style.display = "none";
      }, 300);
    }
  };

  useEffect(() => {
    headerRef.current.classList.remove("header-activate");
    if (scrollPosition > 50) {
      headerRef.current.classList.add("header-activate");
    }
  }, [scrollPosition]);

  return (
    <header ref={headerRef}>
      <nav>
        <div className="menu-logo-cont">
          <div className="logo">
            <a href="index.html">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <button
            ref={menuTogglerRef}
            className="menu-toggler"
            onClick={menuToggle}
          >
            <span></span>
          </button>
        </div>
        <ul className="nav-links" ref={navlinksRef}>
          {navLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href} className={link.className}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
