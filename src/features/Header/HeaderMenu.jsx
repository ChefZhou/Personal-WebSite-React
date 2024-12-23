import { HiHome, HiClipboardList, HiIdentification } from "react-icons/hi";
import { Link } from "react-router-dom";
import HeaderMenuButton from "../../ui/HeaderMenuButton";

function HeaderMenu() {
  return (
    <div className="flex justify-center items-center gap-12">
      <Link to="/">
        <HeaderMenuButton>
          <div className="flex items-center gap-2">
            <HiHome className="text-2xl" />
            <span>主頁面</span>
          </div>
        </HeaderMenuButton>
      </Link>
      <Link to="/projects">
        <HeaderMenuButton>
          <div className="flex items-center gap-2">
            <HiClipboardList className="text-2xl" />
            <span>作品集</span>
          </div>
        </HeaderMenuButton>
      </Link>
      <Link to="/about">
        <HeaderMenuButton>
          <div className="flex items-center gap-2">
            <HiIdentification className="text-2xl" />
            <span>關於我</span>
          </div>
        </HeaderMenuButton>
      </Link>
    </div>
  );
}

export default HeaderMenu;
