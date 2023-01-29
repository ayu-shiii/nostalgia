import React, { Fragment } from "react";
import "./Home.css";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Fragment>
      <div className="center-items">
        <p>
          Life is beautiful.Cherish every moment even if you 're stressed or
          hurt or whatnot. There' s always tomorrow and it always gets better.
        </p>
        <br></br>
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect()}>log in</button>
        )}
        {isAuthenticated && (
          <a href="/entry">go through the nostalgic ride</a>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
