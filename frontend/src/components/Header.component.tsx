import { Link } from "react-router-dom";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <div className="py-8 px-8">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-gray-300 font-bold tracking-tight">
          <Link to="/">TourHoliday.com</Link>
        </span>
        <span className=" flex space-x-2">
          <Link to="/signup">
            <Button size="lg">Sign In</Button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
