function Button({ children, className }) {
  return (
    <button
      className={`bg-transparent border-none text-inherit font-inherit cursor-pointer p-0 text-slate-400 hover:text-sky-400 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
