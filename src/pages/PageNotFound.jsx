import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-6xl">找不到該頁面</h1>
      <Link
        to="/"
        className="text-2xl mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        回到首頁
      </Link>
    </div>
  );
}

export default PageNotFound;
