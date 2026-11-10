"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useRouter, usePathname } from "next/navigation";
import path from "path";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if menu item is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Check if menu dropdown contains active item
  const isDropdownActive = (links: { path: string }[]) => {
    return links.some((link) => pathname.startsWith(link.path));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleDropdownOpen = (menu: string | null) => {
    setOpenDropdown(menu === openDropdown ? null : menu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    closeDropdown();
  };

  const navLinks = [
    {
      label: "Programs",
      links: [
        { name: "Steam", path: "/steam" },
        {
          name: "Bridge",
          path: "/bridge",
          sublinks: [
            { name: "Foundation Programme", path: "/bridge/foundation" },
            { name: "UI-UX", path: "/bridge/ui-ux" },
            { name: "AI", path: "/bridge/ai" },
            { name: "Digital Marketing", path: "/bridge/digital-marketing" },
            { name: "AI Video Production", path: "/bridge/video-editing" },
            {
              name: "Corporate Sustainability",
              path: "/bridge/sustainability",
            },
            { name: "3D Product Design", path: "/bridge/3d-design" },
            {
              name: "Advanced Design Workshop",
              path: "/bridge/advanced-design-workshop",
            },
          ],
        },
        { name: "Yuvabe Studios", path: "https://yuvabestudios.com/" },
      ],
    },
    {
      label: "Our Stories",
      links: [
        { name: "Blogs", path: "/stories/blogs" },
        { name: "Newsletter", path: "/stories/newsletters" },
        {
          name: "Impact Report",
          path: "/stories/impact-report",
        },
      ],
    },
    {
      label: "Get Involved",
      links: [
        { name: "We Serve", path: "/get-involved/we-serve" },
        { name: "We Evolve", path: "/get-involved/we-evolve" },
        { name: "Donate", path: "/get-involved/donate" },
        {
          name: "Start Your Own Fundraiser",
          path: "/get-involved/donate#startyourownfundraiser",
        },
        { name: "Join Us", path: "/get-involved/join-us" },
        { name: "Connect With Us", path: "/get-involved/connect-with-us" },
      ],
    },
  ];

  const handleKeyDown = (
    event: React.KeyboardEvent,
    label: string,
    hasSublinks: boolean,
  ) => {
    if (event.key === "ArrowDown") {
      // Navigate down to the next link
      const nextElement = document.getElementById(label + "-next");
      if (nextElement) nextElement.focus();
    }

    if (event.key === "ArrowUp") {
      // Navigate up to the previous link
      const prevElement = document.getElementById(label + "-prev");
      if (prevElement) prevElement.focus();
    }

    if (event.key === "ArrowRight" && hasSublinks) {
      // Open submenu on ArrowRight
      setOpenDropdown(label);
    }

    if (event.key === "ArrowLeft") {
      // Close submenu on ArrowLeft
      setOpenDropdown(null);
    }
  };

  return (
    <header className="bg-white/95 shadow-lg shadow-gray-300 w-full px-3 sm:px-6 md:px-10 lg:px-14 xl:px-18 top-0 left-0 z-50 backdrop-blur-lg sticky">
      <nav className="flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={isMobile ? 30 : 40}
              height={isMobile ? 30 : 40}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <h2 className="Font-primary font-semibold text-[16px] mt-2 ">
            Yuvabe Education
          </h2>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center space-x-2 xl:hidden">
          {/* Mobile Menu Toggle */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <HiX size={24} className="text-gray-700 hover:text-[#592AC7]" />
            ) : (
              <HiOutlineMenu
                size={24}
                className="text-gray-700 hover:text-[#592AC7]"
              />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex lg:space-x-6 xl:space-x-10 text-black font-medium font-primary">
          <li>
            <Link
              href="/"
              onClick={closeDropdown}
              tabIndex={0}
              className={`hover:text-[#592AC7] transition duration-300 py-2 px-1 block border-b-2 ${
                isActive("/")
                  ? "text-[#592AC7] border-[#592AC7]"
                  : "border-transparent"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              tabIndex={0}
              onClick={closeDropdown}
              className={`hover:text-[#592AC7] transition duration-300 py-2 px-1 block border-b-2 ${
                isActive("/about-us")
                  ? "text-[#592AC7] border-[#592AC7]"
                  : "border-transparent"
              }`}
            >
              About Us
            </Link>
          </li>

          {navLinks.map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleDropdownOpen(menu.label)}
              onMouseLeave={closeDropdown}
            >
              <button
                tabIndex={0} // Make it focusable
                aria-haspopup="true" // Indicate that it has a dropdown
                aria-expanded={openDropdown === menu.label ? "true" : "false"}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleDropdownOpen(menu.label);
                  }
                }}
                className={`flex items-center whitespace-nowrap py-2 px-1 border-b-2 transition duration-300 ${
                  isDropdownActive(menu.links)
                    ? "text-[#592AC7] border-[#592AC7]"
                    : "hover:text-[#592AC7] border-transparent hover:border-[#592AC7]"
                }`}
              >
                {menu.label} <IoMdArrowDropdown className="ml-1" />
              </button>
              <AnimatePresence>
                {openDropdown === menu.label && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg p-2 rounded-md z-10"
                  >
                    {menu.links.map((link, i) => (
                      <li key={i} className="relative">
                        {/* First-level item with peer */}
                        <Link
                          href={link.path}
                          onClick={closeDropdown}
                          tabIndex={0}
                          className={`peer flex justify-between items-center py-2 px-4 rounded-md transition duration-300 ${
                            isActive(link.path)
                              ? "bg-[#592AC7]/10 text-[#592AC7]"
                              : "hover:bg-gray-100 hover:text-[#592AC7]"
                          }`}
                        >
                          {link.name}
                          {link.sublinks && (
                            <span className="ml-2 text-sm">&#9656;</span>
                          )}
                        </Link>

                        {/* Second-level submenu - visible only when this link is hovered */}
                        {link.sublinks && (
                          <ul
                            className="absolute top-0 left-full mt-0 w-48 bg-white shadow-lg p-2 rounded-md z-20
        invisible opacity-0
        peer-hover:visible peer-hover:opacity-100
        hover:visible hover:opacity-100
        transition-opacity duration-200"
                          >
                            {link.sublinks.map((sublink, j) => (
                              <li key={j}>
                                <Link
                                  href={sublink.path}
                                  onClick={closeDropdown}
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (
                                      e.key === "Enter" ||
                                      e.key === "ArrowRight"
                                    ) {
                                      closeDropdown();
                                      router.push(link.path);
                                    }
                                  }}
                                  className={`block py-2 px-4 rounded-md transition duration-300 ${
                                    isActive(sublink.path)
                                      ? "bg-[#592AC7]/10 text-[#592AC7]"
                                      : "hover:bg-gray-100 hover:text-[#592AC7]"
                                  }`}
                                >
                                  {sublink.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Desktop Donate */}
        <div className="hidden xl:flex items-center">
          <Button
            href="/get-involved/donate"
            className="!px-9 !py-3.5 text-[17px] font-semibold shadow-md hover:bg-[#592AC7]/90 hover:shadow-lg hover:-translate-y-0.5 transition duration-300"
          >
            Donate
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden flex flex-col space-y-2 py-8 bg-white overflow-y-auto max-h-[80vh]"
          >
            <Link
              href="/"
              onClick={closeMobileMenu}
              tabIndex={0}
              className={`px-4 py-2 rounded-md transition duration-300 ${
                isActive("/")
                  ? "bg-[#592AC7]/10 text-[#592AC7]"
                  : "hover:bg-gray-100 hover:text-[#592AC7]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={closeMobileMenu}
              tabIndex={0}
              className={`px-4 py-2 rounded-md transition duration-300 ${
                isActive("/about-us")
                  ? "bg-[#592AC7]/10 text-[#592AC7]"
                  : "hover:bg-gray-100 hover:text-[#592AC7]"
              }`}
            >
              About Us
            </Link>

            {navLinks.map((menu, index) => (
              <div key={index} className="flex flex-col">
                {/* Top-level menu toggle button */}
                <button
                  onClick={() => handleDropdownOpen(menu.label)}
                  tabIndex={0} // Make it focusable
                  aria-haspopup="true"
                  aria-expanded={openDropdown === menu.label ? "true" : "false"}
                  className={`flex items-center justify-between w-full text-left px-4 py-2 rounded-md transition duration-300 ${
                    isDropdownActive(menu.links)
                      ? "bg-[#592AC7]/10 text-[#592AC7]"
                      : "hover:bg-gray-100 hover:text-[#592AC7]"
                  }`}
                >
                  <span>{menu.label}</span>
                  <IoMdArrowDropdown
                    className={`transition-transform duration-300 ${
                      openDropdown === menu.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* First-level submenu */}
                <AnimatePresence>
                  {openDropdown === menu.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="ml-4 mt-1 space-y-1"
                    >
                      {menu.links.map((link, i) => (
                        <li key={i} className="flex flex-col">
                          <div className="flex justify-between items-center">
                            <Link
                              href={link.path}
                              onClick={closeMobileMenu}
                              tabIndex={0}
                              className={`block px-4 py-2 rounded-md transition duration-300 ${
                                isActive(link.path)
                                  ? "bg-[#592AC7]/10 text-[#592AC7]"
                                  : "hover:bg-gray-100 hover:text-[#592AC7]"
                              }`}
                            >
                              {link.name}
                            </Link>

                            {/* Show toggle arrow if sublinks exist */}
                            {link.sublinks && (
                              <button
                                onClick={() => toggleMobileSubmenu(link.name)}
                                className={`px-2 focus:outline-none ${
                                  openMobileSubmenus[link.name]
                                    ? "rotate-180"
                                    : ""
                                } transition-transform duration-300`}
                                aria-label={`Toggle submenu for ${link.name}`}
                              >
                                <IoMdArrowDropdown size={20} />
                              </button>
                            )}
                          </div>

                          {/* Second-level submenu (expandable) */}
                          {link.sublinks && openMobileSubmenus[link.name] && (
                            <ul className="ml-6 mt-1 space-y-1">
                              {link.sublinks.map((sublink, j) => (
                                <li key={j}>
                                  <Link
                                    href={sublink.path}
                                    onClick={closeMobileMenu}
                                    tabIndex={0}
                                    className={`block px-4 py-2 rounded-md transition duration-300 ${
                                      isActive(sublink.path)
                                        ? "bg-[#592AC7]/10 text-[#592AC7]"
                                        : "hover:bg-gray-100 hover:text-[#592AC7]"
                                    }`}
                                  >
                                    {sublink.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="px-4 pt-2">
              <Button
                href="https://yuvabeeducation.com/get-involved/donate"
                className="block w-full text-center !py-3.5 text-[17px] font-semibold hover:bg-[#592AC7]/90 transition duration-300"
              >
                Donate
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
