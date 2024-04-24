import Profile from "./Profile";

const HeroHeader = () => {
  return (
    <div className="mx-3 my-2 flex items-center justify-between">
      <h1 className="text-3xl text-white">
        Chat <span className="text-sky-500">App</span>
      </h1>
      <Profile />
    </div>
  );
};

export default HeroHeader;
