import { Children } from "react";
import HeaderMenu from "../features/Header/HeaderMenu";

function Header({ children }) {
  return (
    <header
      className="bg-header text-white p-4 shadow sticky top-0 left-0 w-full"
      style={{ zIndex: 1000 }}
    >
      <div>
        <h1>{children}</h1>
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
