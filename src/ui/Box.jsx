function Box({ children, className }) {
  return (
    <div className={`p-4 border rounded-md bg-white shadow-md ${className}`}>
      {children}
    </div>
  );
}

export default Box;
