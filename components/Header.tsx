import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => (
  <header>
    <nav>
      <Link href="/">
        <FontAwesomeIcon icon={faHouse} className="home-icon" />
      </Link>
      <Link href="/about">
        <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
      </Link>
    </nav>
  </header>
);

export default Header;
