import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <div className="fixed top-0 left-0 z-50 w-full h-20 flex sm:flex-row items-center justify-between px-4 sm:px-8 bg-black">
  <div className="home w-fit sm:w-[15%] flex items-center justify-center gap-5  sm:py-0">
    <Link to="/">
      <h1 className="text-3xl sm:text-4xl text-[red] font-bold anton-regular">
        Movier
      </h1>
    </Link>
  </div>
  <ul className="flex  sm:flex-row items-center gap-4 sm:gap-[60px] text-white py-2 sm:py-0">
    <Link to="/">
      <li className="cursor-pointer hover:text-[red] transition">Home</li>
    </Link>
    <Link to="/movies">
      <li className="cursor-pointer hover:text-[red] transition">Movies</li>
    </Link>
    <Link to="/favorites">
      <li className="cursor-pointer hover:text-[red] transition">Favourites</li>
    </Link>
  </ul>
</div>

  );

};

export default Navbar;

// https://images.thedirect.com/media/article_full/disney-movies-titles.jpg