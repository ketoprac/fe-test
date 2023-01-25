import RepoCard from "./RepoCard";

const ReposWrapper = (props: any) => {
  const { repos, error, isLoading, username } = props;

  return (
    <main className="flex items-center justify-center text-white font-bold gap-5 px-12 py-6 rounded w-8/12">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <p className="animate-spin">o</p>
      ) : repos && repos.length > 1 ? (
        <div>
          <div className="flex justify-center items-center gap-2 mb-2">
            <img
              className="rounded-full h-8"
              src={repos[0].owner.avatar_url}
              alt="avatar"
            />
            <h1 className="text-lg font-semibold">{username}'s Repositories</h1>
          </div>
          <RepoCard repos={repos} />
        </div>
      ) : username ? (
        "Not found"
      ) : null}
    </main>
  );
};

export default ReposWrapper;
