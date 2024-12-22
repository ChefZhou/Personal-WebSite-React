import HeaderMenuButton from "../../ui/HeaderMenuButton";
import { Link } from "react-router-dom";

function HeaderMenu() {
  return (
    <div className="flex justify-center items-center gap-12">
      <Link to="/">
        <HeaderMenuButton>主頁面</HeaderMenuButton>
      </Link>
      <Link to="/projects">
        <HeaderMenuButton>作品集</HeaderMenuButton>
      </Link>
      <Link to="/about">
        <HeaderMenuButton>關於我</HeaderMenuButton>
      </Link>
    </div>
  );
}

export default HeaderMenu;
