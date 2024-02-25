import React from "react";
import { Link } from "react-router-dom";
import mmr from "./mmm.png"
const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <nav className="container bg-slate-800 flex items-center justify-between">
          <div className="flex place-items-center justify-normal">
            <img
              src={mmr}
              alt=""
              className="px-10 py-2"
              width="135px"
              height="8px"
            ></img>
            <h1 className="text-3xl text-yellow-200">Qaree</h1>
          </div>
          <div className="text-yellow-200 text-xl ">
            <ul className=" mx-5  mr-10">
              <Link to="" className="mr-8">
                Features
              </Link>
              <Link to="" className="mr-8">
                Blog
              </Link>
              <Link to="" className="mr-8">
                About
              </Link>
              <Link to="" className="mr-8">
                Contact Us
              </Link>
              <Link to="" className="mr-8">
                Download
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
