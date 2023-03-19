import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  const menu = (
    <>
      <li>
        <Link href="/"> Home </Link>
      </li>
      <li>
        <Link href="/dashboard"> Dashboard </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Next-Template</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        {session ? (
          <button onClick={() => signOut()} className="btn btn-sm btn-error">
            SignOut
          </button>
        ) : (
          <button onClick={() => signIn()} className="btn btn-sm btn-secondary">
            SingIN
          </button>
        )}
      </div>

      <div className="navbar-center">
        {session && <p> {session?.user?.email} </p>}
      </div>
    </div>
  );
};

export default Header;
