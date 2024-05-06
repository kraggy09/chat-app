import { useContext } from "react";
import Conversation from "./Conversation";
import HeroHeader from "./HeroHeader";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";
import { CurrentChat } from "../context/CurrentChat";
import useFetch from "../hooks/useFetch";
import { api } from "../constant";

const SideBar = () => {
  const { currentChat } = useContext(CurrentChat);
  const endpoint = "user/get-all-users";
  const { loading, error, data } = useFetch(api + endpoint);

  console.log(data);
  console.log(currentChat);
  return (
    <div className="">
      <HeroHeader />
      <div className="divider mt-0 mb-0 px-3"></div>

      <SearchInput />
      <div className="divider mt-0 mb-0 px-3"></div>
      {loading ? (
        <spin className="loading loading-ball-xl"></spin>
      ) : (
        <Conversation chat={data?.users} />
      )}
      <LogoutBtn />
    </div>
  );
};

export default SideBar;
