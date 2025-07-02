import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50  w-full h-20 flex items-center justify-between ">
      <div className="home w-[15%]  flex items-center justify-center gap-5">
        <Link to="/">
          <h1 className="text-4xl anton-regular text-[red] font-bold anton-regular">
            Movier
          </h1>
        </Link>
      </div>
      <ul className="flex gap-[60px] px-[50px] text-white">
        <Link to="/">
          <li className="cursor-pointer hover:text-[red] transition">Home</li>
        </Link>
        <Link to="/movies">
          <li className="cursor-pointer hover:text-[red] transition">Movies</li>
        </Link>
        <Link to="/favorites">
          <li className="cursor-pointer hover:text-[red] transition">
            Favourites
          </li>
        </Link>
      </ul>
    </div>
  );

};

export default Navbar;

// https://images.thedirect.com/media/article_full/disney-movies-titles.jpg