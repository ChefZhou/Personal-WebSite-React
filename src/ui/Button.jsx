function Button({ children, className }) {
  return (
    <button
      className={`bg-transparent border-none text-inherit font-inherit cursor-pointer p-0 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
