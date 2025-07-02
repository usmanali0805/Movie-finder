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
      <div className="card cursor-pointer bg-[#272727] rounded-t-[10px] rounded-b-sm  w-[230px] max-h-[450px] h-[450px]   flex flex-col">
        <div className=" w-full rounded-t-[10px] relative img h-[80%] object-cover overflow-hidden">
          <div
            className="p-1 fav rounded-full right-1.5 bg-white absolute z-10 flex justify-center items-center hover:opacity-100"
            onClick={(event) => {
              event.preventDefault();
              AddMovieToFavourite();
            }}
          >
            <Heart className="text-red-500  w-6 h-6" />
          </div>
          <img
            className="w-full img  h-[100%] object-cover "
            src={movie.src}
            alt="img"
          />
        </div>
        <h2 className="text-2xl px-3 py-1 poppins-regular text-[red]">
          {movie.name}
        </h2>
        <div className="poppins-ight px-3  text-white">{movie.year}</div>
      </div>
    </>
  );
};
export default Card;
