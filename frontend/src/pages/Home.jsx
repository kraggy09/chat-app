import MainChat from "../components/MainChat";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px]  lg:h-[700px]  rounded-lg bg-gray-400 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
      <SideBar />
      {/* <MainChat /> */}
    </div>
  );
};

export default Home;
