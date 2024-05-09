import { useContext, useEffect, useState } from "react";
import Conversation from "./Conversation";
import HeroHeader from "./HeroHeader";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";
import { CurrentChat } from "../context/CurrentChat";
import useFetch from "../hooks/useFetch";

const SideBar = () => {
  const { currentChat } = useContext(CurrentChat);
  const endpoint = "user/get-all-users";
  const { loading, data } = useFetch("/api/v1/" + endpoint);
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filteredUsers = data?.users.filter((user) =>
      user?.fullName?.toLowerCase().startsWith(lowerSearch)
    );
    setUsers(filteredUsers);
  }, [search, data]);

  return (
    <div className="">
      <HeroHeader />
      <div className="divider mt-0 mb-0 px-3"></div>

      {/* Pass setSearch directly to SearchInput component */}
      <SearchInput search={search} setSearch={setSearch} />
      <div className="divider mt-0 mb-0 px-3"></div>
      {loading ? (
        <span className="loading loading-ball-xl"></span>
      ) : (
        <Conversation chat={users} />
      )}
      <LogoutBtn />
    </div>
  );
};

export default SideBar;
