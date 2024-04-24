import Conversation from "./Conversation";
import HeroHeader from "./HeroHeader";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";

const SideBar = () => {
  return (
    <div>
      <HeroHeader />
      <div className="divider mt-0 mb-0 px-3"></div>

      <SearchInput />
      <div className="divider mt-0 mb-0 px-3"></div>
      <Conversation />
      <LogoutBtn />
    </div>
  );
};

export default SideBar;
