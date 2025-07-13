import React from "react";
import { Heart } from "lucide-react";

const Card = ({movie}) => {
  const AddMovieToFavourite = () => {
    const my_favorites = localStorage.getItem("Favorites");
    if (my_favorites) {
      const f_data = JSON.parse(my_favorites);
      const isAlreadyAdd = f_data.some((fav) => {
        fav.name === movie.name;
      });
      if (!isAlreadyAdd) {
        f_data.push(movie);
        localStorage.setItem("Favorites", JSON.stringify(f_data));
      } else {
        alert("Is Already Favourite");
      }
    } else {
      const newArr = [];
      newArr.push(movie);
      localStorage.setItem("Favorites", JSON.stringify(newArr));
      console.log(localStorage)
    }
  };

  return (
    <>
  <div className="card cursor-pointer bg-[#272727] rounded-t-[10px] rounded-b-sm w-[230px] h-[450px] flex flex-col">
    {/* Image Section */}
    <div className="w-full h-[80%] relative overflow-hidden rounded-t-[10px]">
      {/* Favourite Button */}
      <div
        className="p-1 fav absolute top-1 right-1.5 z-10 bg-white rounded-full flex justify-center items-center hover:opacity-100"
        onClick={(event) => {
          event.preventDefault();
          AddMovieToFavourite();
        }}
      >
        <Heart className="text-red-500 w-6 h-6" />
      </div>

      {/* Movie Poster */}
      <img
        className="w-full h-full object-cover"
        src={movie.src}
        alt={movie.name}
      />
    </div>

    {/* Movie Info */}
    <h2 className="text-xl sm:text-2xl px-3 py-1 text-[red] font-semibold">
      {movie.name}
    </h2>
    <div className="px-3 text-white text-sm sm:text-base">{movie.year}</div>
  </div>
</>
  );
};
export default Card;
