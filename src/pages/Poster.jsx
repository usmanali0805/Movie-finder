import { div } from "framer-motion/client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Poster = () => {
  const [data, setData] = useState({})
  const { name } = useParams()
  const search = async (movie) => {
    try {
      const key = "de147bff";
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&t=${movie}`
      );
      const apidata = await response.json();
      if(apidata.Response==false){
        console.log(apidata.Error)
        console.log('dfdf')
      }

      setData(apidata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (name) {
      search(name)
    }
  }, [name])

  return (
    <>
      {data && (
  <>
    {!data.Poster ? (
      <div className="text-white h-screen flex text-2xl justify-center items-center">
        Loading...
      </div>
    ) : (
      <div className="flex flex-col lg:flex-row justify-center gap-10 items-center text-amber-50 w-full min-h-screen p-4">
        {/* Poster on top for mobile/tablet */}
        <div className="poster rounded-xl overflow-hidden">
          <img src={data.Poster} alt="Movie Poster" className="w-72 sm:w-80 md:w-96" />
        </div>

        {/* Content below image on small screens, beside it on large */}
        <div className="main w-full lg:w-[45%] flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">{data.Title}</h1>
          <h3 className="text-lg sm:text-xl">{`Actor: ${data.Actors}`}</h3>
          <h3 className="text-lg sm:text-xl">
            Rating: {data.Ratings?.map((r) => `${r.Source}: ${r.Value}`).join(", ") || "N/A"}
          </h3>
          <div className="text-lg sm:text-xl">Plot: {data.Plot}</div>
          <div className="text-lg sm:text-xl">Year: {data.Year}</div>
        </div>
      </div>
    )}
  </>
)}

    </>
  );
};

export default Poster;
