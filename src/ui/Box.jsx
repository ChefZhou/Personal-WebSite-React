function Box({ title, children, className }) {
  return (
    <div
      className={`flex justify-center items-center min-h-[calc(100vh-4rem)] bg-gradient-to-r from-[rgb(100,116,139)] to-[rgb(71,85,105)] ${className}`}
    >
      <div className="shadow-lg rounded-lg w-full max-w-4xl p-6">
        <div className="bg-white/90 rounded-xl p-6 shadow-xl border border-gray-500/30">
          <h2 className="text-gray-800 text-4xl mb-4 font-bold text-center">
            {title}
          </h2>
          <div className="text-gray-700 text-center overflow-hidden max-h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
