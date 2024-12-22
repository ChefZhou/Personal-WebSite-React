import Button from "./Button";

function HeaderMenuButton({ children }) {
  return (
    <Button className="text-base line-height-6 text-slate-400 hover:text-sky-400 ">
      {children}
    </Button>
  );
}

export default HeaderMenuButton;
