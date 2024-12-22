function SidebarBox({ children, className }) {
  return (
    <div
      className={`w-60 h-auto bg-white shadow-lg flex flex-col p-4 rounded-lg ml-10 mt-40 hover:bg-gray-100 ${className}`}
    >
      {children}
    </div>
  );
}

export default SidebarBox;
