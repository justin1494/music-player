import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export const Nav = ({ toggleLibraryStatus }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => toggleLibraryStatus()}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
