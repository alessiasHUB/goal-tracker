import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faHouse,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const handleLogIn = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <header>
      <nav>
        <button onClick={handleLogIn}>
          {loggedIn ? "log out" : "log in"}button
        </button>
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} className="home-icon" />
        </Link>
        <Link href="/about">
          <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
        </Link>
        {loggedIn && (
          <Link href="/setup">
            <FontAwesomeIcon icon={faFlag} className="setup-icon" />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
