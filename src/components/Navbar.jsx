import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">WikiCountries</Link>
      <Link to="/countries">Countries</Link>
    </nav>
  );
};

export default Navbar;