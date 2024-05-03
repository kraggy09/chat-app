import Profile from "./Profile";

const HeroHeader = () => {
  return (
    <div className="my-2 flex items-center min-w-full justify-between">
      <h1 className="px-2 text-2xl font-bold lg:text-3xl text-white">
        Chat <span className="text-sky-500">App</span>
      </h1>
      <Profile
        profile={"https://avatar.iran.liara.run/public/boy?username=kraggy"}
      />
    </div>
  );
};

export default HeroHeader;
