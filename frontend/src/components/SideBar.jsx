import { useContext } from "react";
import Conversation from "./Conversation";
import HeroHeader from "./HeroHeader";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";
import { CurrentChat } from "../context/CurrentChat";

const SideBar = () => {
  const { currentChat } = useContext(CurrentChat);
  console.log(currentChat);
  return (
    <div className="">
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
