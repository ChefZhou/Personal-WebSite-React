function SidebarBox({ children, className }) {
  return (
    <div
      className={`w-60 h-auto bg-white shadow-lg flex flex-col p-4 rounded-lg fixed top-40 ml-10 hover:bg-gray-100 ${className}`}
    >
      {children}
    </div>
  );
}

export default SidebarBox;
