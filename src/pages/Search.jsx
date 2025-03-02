import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Card from "../components/Card";
const SearchResult = () => {
  const [results, setResults] = useState(null);
  const params = useParams();
  const searchMovies = async () => {
    try {
      const key = "de147bff";
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=${params.movie}`
      );
      const apidata = await response.json();
      setResults(apidata.Search || []);
      if (apidata.REsponse == false) {
        console.log(apidata.Error);
      }
      console.log(apidata);
    } catch (error) {
      alert(error.Error);
    }
  };
  useEffect(() => {
    if (params && params.movie) {
      searchMovies();
    }
  }, []);
  return (
    <>
      {!results ? (
        <div className="text-white h-screen flex text-2xl justify-center items-center">
          Loading...
        </div>
      ) : (
        <div className="py-20 px-10 h-fit min-h-screen text-white">
          {results?.length && (
            <div className="mb-4">
              {results.length} Search Results found for {params.movie}
            </div>
          )}
          
            <div className="grid grid-cols-5 gap-6">
              {results?.map((movie, index) => (
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
              ))}
            </div>
          
           {results.length===0 && <div className="h-screen flex justify-center text-white text-3xl items-center">
              Movie not Found
            </div>}
          
        </div>
      )}
    </>
  );
};

export default SearchResult;
