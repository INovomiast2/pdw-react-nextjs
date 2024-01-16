import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/projects">Proyectos</Link>
            </li>
            <li>
              <Link href="/about">Sobre Mí</Link>
            </li>
          </ul>
        </div>
        <a className="text-xl btn btn-ghost" href="/">
          Piscine Discovery Web
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/projects">Proyectos</Link>
          </li>
          <li>
            <Link href="/about">Sobre Mí</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" href={`https://github.com/INovomiast2/`}>
          <FaGithub size={30} style={{ rotate: "10deg" }} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
