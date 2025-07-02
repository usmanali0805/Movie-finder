import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
const HomePage = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [sliderseri, setSliderseri] = useState(0);
  const [slidermovie, setSlidermovie] = useState(0);
  const [movies, setMovies] = useState([
    {
      Title: "Avatar",
      Year: 2009,
      Poster: "/avatar.jpeg",
    },
    {
      Title: "Avengers: Endgame",
      Year: 2019,
      Poster: "/avenger.jpeg",
    },
    {
      Title: "Titanic",
      Year: 1997,
      Poster: "/titanic.jpeg",
    },
    {
      Title: "The Batman",
      Year: 2022,
      Poster: "/batmen.jpg",
    },{
      Title: "Inception",
      Poster:
        "https://i.pinimg.com/736x/b0/ae/a4/b0aea49646879a043ad9f6ec3002e99f.jpg",
      Year: "2010",
    },
    {
      Title: "Interstellar",
      Poster:
        "https://i.pinimg.com/236x/01/01/c6/0101c6179012640f9fd8ecad12ebc33b.jpg",
      Year: "2014",
    },
    {
      Title: "The Dark Knight",
      Poster:
        "https://i.pinimg.com/236x/88/c8/20/88c8204e1017437290af9db9a02d83f6.jpg",
      Year: "2008",
    },
    {
      Title: "The Matrix",
      Poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      Year: "1999",
    },
    {
      Title: "The Shawshank Redemption",
      Poster: "https://m.media-amazon.com/images/I/51zUbui+gbL.jpg",
      Year: "1994",
    }, {
      Title: "Fight Club",
      Poster:
        "https://i.pinimg.com/474x/b9/b4/39/b9b43999c5d97b49cfc5cb86331e4815.jpg",
      Year: "1999",
    },
    {
      Title: "Forrest Gump",
      Poster:
        "https://i.pinimg.com/236x/8e/d7/a9/8ed7a9baeae932abec095d109d306fb3.jpg",
      Year: "1994",
    },
  ]);
  const [series, setSeries] = useState([
    {
      Title: "Breaking Bad",
      Poster:
        "https://i.pinimg.com/236x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg",
      Year: 2008,
    },
    {
      Title: "Stranger Things",
      Poster:
        "https://i.pinimg.com/236x/91/17/75/9117751636528b25a7b4687cab63572d.jpg",
      Year: 2016,
    },
    {
      Title: "Game of Thrones",
      Poster:
        "https://i.pinimg.com/474x/24/35/dc/2435dc934d41dac6d2b30a2d5176d057.jpg",
      Year: 2011,
    },
    {
      Title: "The Witcher",
      Poster:
        "https://i.pinimg.com/236x/8e/1a/1a/8e1a1a3913fd44a2188dac98602a7a81.jpg",
      Year: 2019,
    },
    {
      Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      Year: 2003,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_SX300.jpg",
    },

    {
      Title: "Harry Potter and the Sorcerer’s Stone",
      Year: 2001,
      Poster:
        "https://i.pinimg.com/236x/e4/d7/27/e4d72732cd90d6061472d056c0e96d28.jpg",
    },
    {
      Title: "The Dark Knight",
      Year: 2008,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: The Empire Strikes Back",
      Year: 1980,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTY2ZTNjMGItMTEyNy00ZDkxLTgzMmMtYzhiZGY2NzMxNjE0XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: 2003,
      Poster:
        "https://i.pinimg.com/236x/4d/8c/eb/4d8ceb7c6e967c8c7948475e43791a2b.jpg",
    },
    {
      Title: "Jurassic Park",
      Year: 1993,
      Poster:
        "https://i.pinimg.com/236x/33/7b/91/337b91c388d1d7543f646b73225b018c.jpg",
    },
    {
      Title: "The Hunger Games",
      Year: 2012,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWI1OGM4YjQtNmIxNi00YmE2LWJkNTAtY2Q0YjU4NTI5NWQyXkEyXkFqcGc@._V1_SX300.jpg",
    },
  ]);

  const search = async (movie) => {
    try {
      const key = "de147bff";
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=${movie}`
      );
      const apidata = await response.json();
      setData(apidata.Search || []);
      if (apidata.Response == false) {
        console.log(apidata.Error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    search("ironman");
  }, []);

  const Handleinput = (e) => {
    setName(e.target.value);
  };

  const Handlesearch = () => {
    if (name) {
      search(name);
    } else {
      alert("Enter movie name!");
    }
  };

  const Moveleft = () => {
    setSliderseri((prev) => {
      if (prev < 0) {
        const newValue = prev + 400;
        console.log(newValue);
        return newValue;
      }
      return prev;
    });
  };
  const Moveright = () => {
    setSliderseri((prev) => {
      if (prev >= -1600) {
        const newValue = prev - 400;
        console.log(newValue);
        return newValue;
      }
      return prev;
    });
  }
  const Movemovieleft = () => {
    setSlidermovie((prev) => {
      if (prev < 0) {
        const newValue = prev + 400;
        console.log(newValue);
        return newValue;
      }
      return prev;
    });
  };
  const Movemovieright = () => {
    setSlidermovie((prev) => {
      if (prev >= -1600) {
        const newValue = prev - 400;
        console.log(newValue);
        return newValue;
      }
      return prev;
    });
  };

  return (
    <div>
        <div  className="relative overflow-hidden h-[100vh]">
          <div className="bg-slider flex justify-center items-center">
            <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
            <div className="input-sec h-[70px] absolute w-[40%] m-5 z-20 flex items-center bg-transparent gap-5">
              <input
                onChange={Handleinput}
                type="text"
                placeholder="Search for a movie..."
                className=" flex h-full p-2 rounded-md text-gray-800 text-[18px] focus-visible:border-none bg-[white] items-center w-[85%] "
              />
              <Link to={`/search/${name}`}>
                <button
                  onClick={Handlesearch}
                  className="search text-2xl text-white h-full p-[15px] bg-red-600 hover:bg-red-700   rounded-lg flex items-center justify-center cursor-pointer"
                >
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Movies section */}
        <div className=" w-full bg-[#101010] h-fit overflow-hidden m-auto flex mb-32 gap-5 flex-col">
          <div className="heading h-[20vh]  flex items-end justify-center">
            <h1 className="text-5xl  text-white">Top Rank Movies</h1>
          </div>
          <div className="svgs w-full flex items-center justify-end pr-20">
            <div className="icons w-24 flex gap-5">
              <div
                onClick={Movemovieleft}
                className="left cursor-pointer rounded-full transition-all flex justify-center items-center p-2 hover:bg-gray-500 "
              >
                <ChevronLeft className="text-white w-6 h-6" />
              </div>
              <div
                onClick={Movemovieright}
                className="right cursor-pointer rounded-full flex transition-all justify-center items-center p-2 hover:bg-gray-500 "
              >
                <ChevronRight className="text-white" />
              </div>
            </div>
          </div>
          <div className="slider items-start flex gap-12 px-20 transition-transform duration-300"
           style={{ transform: `translateX(${slidermovie}px)` }}>
            {movies.map((movie, index) => {
              return (
                <Link
                  key={index}
                  to={`/${movie.Title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <Card
                    movie={{
                      name: movie.Title,
                      src: movie.Poster,
                      year: movie.Year,
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* series section */}
        <div className=" w-full bg-[#101010] h-fit overflow-hidden m-auto flex mb-32 gap-5 flex-col">
          <div className="heading flex items-center justify-center  h-[0%] ">
            <h1 className="text-5xl  text-white">Top Rank Series</h1>
          </div>
          <div className="svgs w-full flex items-center justify-end pr-20">
            <div className="icons w-24 flex gap-5">
              <div
                onClick={Moveleft}
                className="left cursor-pointer rounded-full transition-all flex justify-center items-center p-2 hover:bg-gray-500 "
              >
                <ChevronLeft className="text-white w-6 h-6" />
              </div>
              <div
                onClick={Moveright}
                className="right cursor-pointer rounded-full flex transition-all justify-center items-center p-2 hover:bg-gray-500 "
              >
                <ChevronRight className="text-white" />
              </div>
            </div>
          </div>
          <div
            className="slider items-start flex gap-12 px-20 transition-transform duration-300"
            style={{ transform: `translateX(${sliderseri}px)` }}
          >
            {series.map((serial, index) => {
              return (
                <Link key={index} to={`/${serial.Title}`}>
                  <Card
                    movie={{
                      name: serial.Title,
                      src: serial.Poster,
                      year: serial.Year,
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
    </div>
  );
};

export default HomePage;
