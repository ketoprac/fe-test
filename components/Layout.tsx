const Layout = ({ children }: any) => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl text-white font-bold">
        Github Repository Finder
      </h1>
      {children}
    </div>
  );
};

export default Layout;
