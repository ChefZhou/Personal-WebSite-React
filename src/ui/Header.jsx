import { Children } from "react";
import HeaderMenu from "../features/Header/HeaderMenu";

function Header({ children }) {
  return (
    <header className="bg-header text-white p-4 shadow fixed top-0 left-0 w-full">
      <div>
        <h1>{children}</h1>
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
