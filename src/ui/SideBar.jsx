import SidebarBox from "../ui/SidebarBox";
import { FaGithubSquare } from "react-icons/fa";

function Sidebar() {
  return (
    <SidebarBox>
      <div className="mb-4">
        <div className="w-32 h-40 ml-auto mr-auto rounded-full overflow-hidden">
          <img
            src="/selfie2.jpg"
            alt="Profile"
            className="w-auto h-auto object-cover"
          />
        </div>
        <h1 className="text-xl font-bold text-center mt-4">
          周泓毅 (Denny Zhou)
        </h1>
        <p className="text-center text-gray-600">初級前端開發者</p>
      </div>
      <div className=" ml-auto mr-auto rounded-full overflow-hidden">
        <a
          href="https://github.com/ChefZhou"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={32} />
        </a>
      </div>
      <div className="mt-4 text-gray-700">
        <p className="text-base leading-relaxed whitespace-pre-line break-words">
          {`歡迎來到我的部落格！目前是一名初級前端開發者，對於前端技術有著濃厚的興趣。這裡會分享我學習前端技術的心得或是作品。`
            .match(/.{1,15}/g)
            .map((text, index) => (
              <span key={index}>
                {text}
                <br />
              </span>
            ))}
        </p>
      </div>
    </SidebarBox>
  );
}

export default Sidebar;
