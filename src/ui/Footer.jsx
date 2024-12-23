import { HiMail, HiOutlinePhoneIncoming } from "react-icons/hi";

function Footer() {
  return (
    <footer
      className="sticky bottom-0 w-full text-center text-lg bg-footer text-gray-300 p-4 mt-4"
      style={{ zIndex: 1000 }}
    >
      聯繫方式
      <div className="flex flex-col items-center space-y-2 mt-2">
        <div className="flex items-center">
          <HiOutlinePhoneIncoming className="mr-2" />
          <span>0970-961-596</span>
        </div>
        <div className="flex items-center">
          <HiMail className="mr-2" />
          <span>cowboy14100@gmail.com</span>
        </div>
      </div>
      <p>&copy; 2024 Denny Zhou. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
