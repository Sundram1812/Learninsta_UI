import { Link } from "react-router-dom";
import Lear_Insta from "/Lear_Insta.svg";

function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center">
      <img alt="Your Company" src={Lear_Insta} className="h-8 w-auto" />
    </Link>
  );
}

export default Logo;

// className="h-8 w-auto"
