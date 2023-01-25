import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useGetUserReposQuery } from "../redux/apiSlice";

const Home: NextPage = () => {
  const searchInputRef: any = useRef(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: repos, error, isLoading } = useGetUserReposQuery(username);

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    setUsername(searchInputRef.current.value);
    setLoading(false);
  }

  console.log(username);



  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Skilltest MyTEnS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl text-white font-bold">Github Repository Finder</h1>
      <div className="m-2">
        <form onSubmit={handleSubmit}>
        <input
          className="bg-slate-700 text-white font-bold p-2 rounded mr-1"
          type="text"
          ref={searchInputRef}
        />
        <input
          className="bg-slate-700 text-white p-2 rounded cursor-pointer hover:bg-slate-800"
          type="submit"
          value={isLoading ? "/" : "Search"}
        />
        </form>
      </div>
      <main className="flex items-center justify-center text-white font-bold gap-5 px-12 py-6 rounded w-8/12">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <p className="animate-spin">o</p>
        ) : repos && repos.length > 1 ? (
          <div>
            <div className="flex justify-center items-end gap-2 mb-2">
              <img
                className="rounded-full h-16"
                src={repos[0].owner.avatar_url}
                alt="avatar"
              />
              <h1 className="text-3xl mb-2 font-semibold">{username}'s Repositories</h1>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-2">
              {repos.map((repo) => (
                <a key={repo.id} href={repo.html_url}>
                  <div className="rounded border p-2 bg-slate-900 hover:border-slate-200 hover:bg-slate-800">
                    <p className="text-gray-100">{repo.name}</p>
                    <p className="text-sm text-gray-200 font-light">
                      {repo.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          "Not found"
        )}
      </main>
    </div>
  );
};

export default Home;
