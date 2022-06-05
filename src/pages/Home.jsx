import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <Link to="/countries">Countries</Link>
    </div>
  );
};

export default Home;