import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Favorites = () => {
  const [local, setLocal] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("Favorites");
    if (data) {
      setLocal(JSON.parse(data));
    }
  }, []);
  console.log(local);
  const HandleClear = () => {
    localStorage.clear("Favourites");
    setLocal([]);
  };

  return (
    <div className=" w-full bg-[#101010] m-auto h-fit min-h-screen flex justify-center items-center py-32 gap-5 flex-col">
      <div className="heading h-20 ">
        <h1 className="text-5xl font-bold text-white">Favorites Movies</h1>
      </div>
      <div className="justify-center items-center grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {local.length > 0 ? (
          local.map((serial, index) => (
            <Link key={index} to={`/${serial.Title}`}>
              <Card movie={serial} />
            </Link>
          ))
        ) : (
          <p className="text-white text-lg">No favorites added yet.</p>
        )}
      </div>
      <div className="button w-full h-[15vh] flex justify-center items-end text-white">
        {local.length > 0 ? (
          <button onClick={HandleClear} 
            className="text-2xl cursor-pointer px-5 py-2  bg-red-600 rounded-md text-white hover:bg-red-700"
          >
            Clear All
          </button>
        ) : (
          <Link to={"/movies"}>
            <button
              onClick={HandleClear}
              className="text-2xl cursor-pointer px-5 py-2  bg-red-600 rounded-md text-white hover:bg-red-700"
            >
              Add Movies
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Favorites;
