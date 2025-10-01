"use client";
import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white shadow-lg flex items-center"
    >
      <div className="container flex items-center justify-between mx-auto px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold">
          <Link href="/" className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            JustChat
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center space-x-6 font-medium">
          <li>
            <Link
              href="/"
              className="px-3 py-2 rounded-lg hover:bg-gray-700/50 hover:text-purple-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/forums"
              className="px-3 py-2 rounded-lg hover:bg-gray-700/50 hover:text-purple-400 transition"
            >
              Forums
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="px-3 py-2 rounded-lg hover:bg-gray-700/50 hover:text-purple-400 transition"
            >
              About
            </Link>
          </li>
          <li className="flex items-center">
            <UserButton />
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-7 h-7 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <ul className="flex flex-col space-y-2 mt-2 px-6 pb-4 font-medium">
            <li>
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg hover:bg-gray-700/50 hover:text-purple-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/forums"
                className="block px-3 py-2 rounded-lg hover:bg-gray-700/50 hover:text-purple-400 transition"
              >
                Forums
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-lg hover:bg-gray-700/50 hover:text-purple-400 transition"
              >
                About
              </Link>
            </li>
            <li className="flex justify-end">
              <UserButton />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
