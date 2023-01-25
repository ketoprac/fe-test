import { NextPage } from "next";
import { useRef, useState } from "react";
import { useGetUserReposQuery } from "../redux/apiSlice";
import Form from "./Form";
import Layout from "./Layout";
import ReposWrapper from "./ReposWrapper";

const Main: NextPage = () => {
  const searchInputRef: any = useRef(null);
  const [username, setUsername] = useState("");
  const { data: repos, error, isLoading } = useGetUserReposQuery(username);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUsername(searchInputRef.current.value);
  };

  return (
    <Layout>
      <Form handleSubmit={handleSubmit} searchInputRef={searchInputRef} />
      <ReposWrapper
        repos={repos}
        error={error}
        isLoading={isLoading}
        username={username}
      />
    </Layout>
  );
};

export default Main;
