
const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#101010] text-white flex flex-col items-center py-20 px-5">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-6">About Movie Search App</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome to our Movie Search App! Discover thousands of movies with ease. Whether you're looking for the latest blockbusters or classic hits, our app provides instant access to movie details, posters, and release years.
        </p>
      </div>

      <div className="max-w-4xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div className="bg-[#202020] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-red-400 mb-3">🔍 Search Any Movie</h2>
          <p className="text-gray-400">Find movies by title and explore detailed information instantly.</p>
        </div>

        <div className="bg-[#202020] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-red-400 mb-3">❤️ Save Favorites</h2>
          <p className="text-gray-400">Mark your favorite movies and keep them saved in your collection.</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-white">Start Exploring Now!</h2>
        <p className="text-gray-400 mt-2">Search for your favorite movies and build your collection today.</p>
      </div>
    </div>
  );
};

export default About;
