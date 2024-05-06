import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../hooks/useLogout";

const LogoutBtn = () => {
  const { logout } = useLogout();
  return (
    <button
      onClick={async (e) => {
        e.preventDefault();
        await logout();
      }}
      className="text-white mx-auto  border-2 hover:bg-white hover:text-red-500 transition-all duration-200 ease-linear hover:border-none  border-sky-500 rounded-full ml-3  py-2 px-2"
    >
      <RiLogoutBoxLine size={25} />
    </button>
  );
};

export default LogoutBtn;
