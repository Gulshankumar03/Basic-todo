import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full">
        <header className="text-4xl font-bold">
          <Link href="/">
            Todo<span className="text-orange-500 font-extrabold">List</span>
          </Link>
        </header>
      </div>
    </>
  );
};

export default Header;
