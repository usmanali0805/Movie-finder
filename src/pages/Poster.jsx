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
          {!data.Poster?<div className="text-white h-screen flex text-2xl justify-center items-center">Loading...</div>:<div className="flex justify-center gap-20 items-center text-amber-50 w-full h-screen">
            <div className="main w-[45%] h-fit flex flex-col gap-7">
              <h1 className="text-8xl">{data.Title}</h1>
              <h3 className="text-xl">{`Actor: ${data.Actors}`}</h3>
              <h3 className="text-xl">
                Rating: {data.Ratings?.map((r) => `${r.Source}: ${r.Value}`).join(", ") || "N/A"}
              </h3>
              <div className="text-xl">Plot: {data.Plot}</div>
              <div>Year: {data.Year}</div>
            </div>
            <div className="poster rounded-xl overflow-hidden">
              {data.Poster && <img src={data.Poster} alt="Movie Poster" className="w-96" />}
            </div>
          </div>}
        </>
      )}
    </>
  );
};

export default Poster;
