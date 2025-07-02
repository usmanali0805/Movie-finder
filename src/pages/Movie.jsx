import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Movie = () => {
  const movies = [
    {
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
    },
    {
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
    {
      Title: "Captain America: Brave New World",
      Poster:
        "https://i.pinimg.com/474x/15/3e/aa/153eaa19c88070b8169f9b97f855b5f4.jpg",
      Year: "2025",
    },
    {
      Title: "Mickey 17",
      Poster:
        "https://i.pinimg.com/474x/f9/9e/9b/f99e9bf09e525eefd198139e8b28a140.jpg",
      Year: "2025",
    },
    {
      Title: "Lilo & Stitch (2025)",
      Poster:
        "https://i.pinimg.com/474x/23/02/53/2302535af5bb8e2ff977eee452af91e9.jpg",
      Year: "2025",
    },
    {
      Title: "Den of Thieves 2: Pantera",
      Poster:
        "https://i.pinimg.com/474x/22/00/e0/2200e0896c2b3b4365d82b91d3475af1.jpg",
      Year: "2025",
    },
    {
      Title: "A Minecraft Movie",
      Poster:
        "https://i.pinimg.com/236x/d7/5d/e9/d75de946edabea4101479f9cb28f2a4b.jpg",
      Year: "2025",
    },
    {
      Title: "The Accountant 2",
      Poster: "https://i.pinimg.com/236x/23/d0/41/23d041ed9ea67433b8b1f05d1485c034.jpg",
      Year: "2025",
    },
    {
      Title: "Peaky Blinders",
      Poster: "https://i.pinimg.com/474x/7a/ab/d6/7aabd6f0920bacdd1cf0ce726358d6fa.jpg",
      Year: "2022",
    },
    {
      Title: "Love Alarm",
      Poster: "https://i.pinimg.com/236x/7f/56/c4/7f56c4e70324233fb8bb67fa248365f7.jpg",
      Year: "2025",
    },
    
    {
      Title: "Alone in Venice",
      Poster: "https://i.pinimg.com/474x/1d/a3/c9/1da3c9a1fa671acbb62e0dd96ac2753e.jpg",
      Year: "2025",
    },
    {
      Title: "Alto Knights",
      Poster: "https://i.pinimg.com/236x/6e/86/ca/6e86caa7b5620a3a71af7a3b15375f91.jpg",
      Year: "2025",
    },
    {
      Title: "The Amateur",
      Poster: "https://m.media-amazon.com/images/M/MV5BMWJhNmFmMjAtYjVmZi00N2QxLWIyMjctOTc5MjUwNjM2MGYxXkEyXkFqcGc@._V1_SX300.jpg",
      Year: "2025",
    },
    {
      Title: "A Simple Favor",
      Poster: "https://i.pinimg.com/474x/b9/bc/74/b9bc74c3d9c872816548c6a5bb79db0f.jpg",
      Year: "2025",
    },
    {
      Title: "Ash",
      Poster: "https://m.media-amazon.com/images/M/MV5BOWNhOTUxM2ItMmVjNy00NzZjLTg5NzEtOWZhMTZjNTRhNzViXkEyXkFqcGdeQXVyNDYwMjI1OTY@._V1_SX300.jpg",
      Year: "2025",
    },
    {
      Title: "Back in Action",
      Poster: "https://i.pinimg.com/474x/af/91/da/af91dabebde0022234ea588e26517f79.jpg",
      Year: "2025",
    },
    {
      Title: "The Bad Guys 2",
      Poster: "https://i.pinimg.com/236x/29/49/71/2949713b3dcdb76a7fe71ef4cb6365d9.jpg",
      Year: "2025",
    },
    {
      Title: "Battlefield 2025",
      Poster: "https://i.pinimg.com/236x/65/89/8f/65898fa9c6367f6017e6bac72b7b2b37.jpg",
      Year: "2025",
    },
    {
      Title: "Bridget Jones: Mad About the Boy",
      Poster:"https://i.pinimg.com/474x/09/e6/b5/09e6b51224ff44a815466ddf8f09860a.jpg",
      Year: "2025",
    },
    {
      Title: "Karate Kid: Legends",
      Poster:"https://i.pinimg.com/474x/93/58/a1/9358a1ebf16ee1248f14abaedcadfce5.jpg",
      Year: "2025",
    },
    {
      Title: "Superman ",
      Poster:"https://i.pinimg.com/236x/8a/78/2d/8a782d308c983d9f5eefba9a5f201cc2.jpg",
      Year: "2025",
    },
  ];

  return (
    <div className="z-50 bg-[#101010] ">
      <div className=" w-full bg-[#101010] m-auto flex justify-center items-center py-32 gap-5 flex-col">
        <div className="heading h-20 ">
          <h1 className="text-5xl font-bold text-white"> Top Movies</h1>
        </div>
        <div className="justify-center items-center grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((serial, index) => {
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

export default Movie;
