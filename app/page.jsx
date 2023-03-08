import AllMovies from "./components/AllMovies";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_API_KEY}&language=en-US&page=1`
  );
  const movies = await data.json();
  console.log(movies.results);

  return (
    <main>
      <div className=" grid gap-16 grid-cols-fluid my-10">
        {movies.results.map((movie, index) => (
          <AllMovies
            key={index}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
