import React from "react";


// TO pre ramder the details
export async function generateSraricParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_API_KEY}&language=en-US&page=1`
  );
  const movies = await data.json();
  return resizeBy.results.map((movie) => {
    movie: toString(movie.id);
  });
}

const MovieDetails = async ({ params }) => {
  const { slug } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=${process.env.NEXT_API_KEY}`
  );
  const movie = await data.json();

  return (
    <div>
      <div>
        <h2 className=" font-bold text-xl lg:text-3xl">{movie.title}</h2>
        <h2 className="  text-sm lg:text-lg font-semibold">
          {movie.release_date}
        </h2>
        <h2 className=" text-lg">
          Runtime: <span className=" font-bold">{movie.runtime} min.</span>
        </h2>
        <h2 className=" bg-green-600 text-sm  inline-block my-2 py-1 px-2  lg:py-2 lg:px-4 rounded-md">
          {movie.status}
        </h2>

        <img
          className=" w-full h-[300px] lg:h-[600px] object-cover my-7"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />

        <p className=" my-5 text-lg">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
