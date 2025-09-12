import { Theme } from "./components/theme";
import logo from "../../shared/assets/logo.svg";
import { Link } from "react-router";
import { Navigation } from "./components/navigation";

type Props = {};

export const Header = ({}: Props) => {
  return (
    <header className="transition-all px-5 pt-3 border-b bg-second dark:bg-second-dark border-Dark dark:border-White">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
            <img src={logo} alt="Logo" className="h-[5vh] text-white" />
        </Link>
        <Theme />
      </div>
      <Navigation />
    </header>
  );
};
