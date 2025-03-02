import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ movie, href, is_favourite, onRemoveFavt }) => {
  const handleFavourites = () => {
    const my_favorites = localStorage.getItem("Favorites");
    if (is_favourite) {
      removeFromFavt(my_favorites);
    } else {
      addToFavt(my_favorites);
    }
  };

  const addToFavt = (my_favorites) => {
    if (my_favorites) {
      const f_data = JSON.parse(my_favorites);
      const isAlreadyAdd = f_data.some((fav) => fav.name === movie.name);
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
    }
  };

  const removeFromFavt = (my_favorites) => {
    if (my_favorites) {
      const f_data = JSON.parse(my_favorites);
      const filtered_data = f_data.filter((fav) => fav.name !== movie.name);
      localStorage.setItem("Favorites", JSON.stringify(filtered_data));
      onRemoveFavt();
    }
  };

  const CardComponent = () => {
    return (
      <div className="card bg-[#272727] rounded-t-[10px] rounded-b-sm w-full max-h-[450px] h-[450px] flex flex-col">
        <div className=" w-full rounded-t-[10px] relative img h-[80%] object-cover overflow-hidden">
          <div
            className="p-1 cursor-pointer fav rounded-full right-1.5 bg-white absolute z-10 flex justify-center items-center hover:opacity-100"
            onClick={(event) => {
              event.preventDefault();
              handleFavourites();
            }}
          >
            <Heart
              fill={is_favourite ? "red" : "transparent"}
              className="text-red-500  w-6 h-6"
            />
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
    );
  };

  return href ? (
    <Link to={href} className="block" style={{ width: "inherit" }}>
      <CardComponent />
    </Link>
  ) : (
    <div className="block" style={{ width: "inherit" }}>
      <CardComponent />
    </div>
  );
};
export default Card;
