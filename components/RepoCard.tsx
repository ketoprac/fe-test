const RepoCard = (props: any) => {
  const { repos } = props;
  return (
    <div className="flex items-center justify-center flex-wrap gap-2">
      {repos.map((repo: any) => (
        <a key={repo.id} href={repo.html_url} target="_blank">
          <div className="rounded border p-2 bg-slate-900 hover:border-slate-200 hover:bg-slate-800">
            <p className="text-gray-100">{repo.name}</p>
            <p className="text-sm text-gray-200 font-light">
              {repo.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RepoCard;
