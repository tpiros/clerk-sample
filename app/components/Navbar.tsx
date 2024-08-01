'use client';
import { useAuth, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import NavbarAuth from './NavbarAuth';
import NavbarNonAuth from './NavbarNonAuth';

export default function Navbar() {
  const { userId } = useAuth();

  return (
    <div className="navbar px-4 z-20">
      <div className="navbar-start">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          HOME
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="text-sm font-medium" prefetch={false}>
              Home
            </Link>
          </li>
          {userId && <NavbarAuth />}
          {!userId && <NavbarNonAuth />}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/" className="text-sm font-medium" prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/browse"
                className="text-sm font-medium"
                prefetch={true}
              >
                Browse
              </Link>
            </li>
            {userId && <NavbarAuth />}
            {!userId && <NavbarNonAuth />}
          </ul>
        </div>
        {userId && <UserButton />}
      </div>
    </div>
  );
}
