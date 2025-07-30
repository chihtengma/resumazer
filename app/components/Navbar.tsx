import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">Resumazer</p>
      </Link>
      <Link to="/" className="primary-button w-fit">
        Upload Resume
      </Link>
    </div>
  );
};

export default Navbar;
