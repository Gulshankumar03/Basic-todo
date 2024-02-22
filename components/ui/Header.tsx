import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

//import DescriptionIcon from "@mui/icons-material/Description";
const Header = () => {
  return (
    <>
      <div className="w-full">
        <header className="text-3xl font-extrabold">
          <Link href="/">
            Todo<span className="text-violet-700 font-extrabold">List</span>
          </Link>
        </header>
      </div>
    </>
  );
};

export default Header;
