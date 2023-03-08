"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AllMovies = ({ title, id, poster_path, release_date }) => {

  return (
    <div>
      <h1 className=" text-sm font-bold">{title}</h1>
      <h2 className=" text-sm">{release_date}</h2>
      <Link href={`/asd`}>
        <img className=" rounded-xl" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}  />
      </Link>
    </div>
  );
};

export default AllMovies;
