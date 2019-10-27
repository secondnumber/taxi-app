import React from "react";
import { Login } from "./login";
import { Map } from "./map";
import { Profile } from "./profile";
import { Header } from "./shared/Header.js";

const PAGES = {
  profile: () => <Profile />,
  map: () => <Map />,
  login: setPage => <Login setPage={setPage} />
};

function App() {
  const [page, setPage] = React.useState("profile");

  return (
    <>
      <Header setPage={setPage} />
      {PAGES[page](setPage)}
    </>
  );
}

export default App;
