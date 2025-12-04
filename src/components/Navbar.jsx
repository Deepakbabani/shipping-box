import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl">Shipping Box</h1>
        <div>
          <Link to="/" className="text-white mr-4 hover:underline">
            Add Box
          </Link>
          <Link to="/list" className="text-white hover:underline">
            List Boxes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
