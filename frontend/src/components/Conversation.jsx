import { useState } from "react";

const Conversation = () => {
  const [idx, setIdx] = useState(0);
  const chat = [
    {
      id: 1,
      name: "Kaif Shaikh",
      url: "https://avatar.iran.liara.run/public/boy?username=abc",
    },
    {
      id: 2,
      name: "Kaif Shaikh",
      url: "https://avatar.iran.liara.run/public/boy?username=sufi",
    },
    {
      id: 3,
      name: "Kaif Shaikh",
      url: "https://avatar.iran.liara.run/public/boy?username=sufi",
    },
    {
      id: 4,
      name: "Kaif Shaikh",
      url: "https://avatar.iran.liara.run/public/boy?username=sufi",
    },
    {
      id: 5,
      name: "Kaif Shaikh",
      url: "https://avatar.iran.liara.run/public/boy?username=sufi",
    },
  ];
  return (
    <div className="max-h-[60vh] overflow-y-scroll scrollbar-hide">
      <div className="min-w-full flex flex-col items-start lg:gap-y-1">
        {chat.map((per, index) => {
          return (
            <div
              onClick={() => setIdx(per.id)}
              key={per.id}
              className="  hover:cursor-pointer min-w-full flex items-start flex-col"
            >
              <div
                className={`flex items-center justify-start min-w-full gap-x-4 rounded-lg hover:bg-sky-500 hover:text-white  py-2 px-2 lg:gap-y-4 ${
                  per.id === idx ? "bg-sky-500 text-white" : ""
                }`}
              >
                <img src={per.url} className="h-12 lg:h-14" alt="" />
                <p className="font-semibold lg:text-lg text-white">
                  {per.name}
                </p>
              </div>
              {index !== chat.length - 1 && (
                <div className=" divider  lg:min-w-[15vw] 	mt-0 mb-0 px-3"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Conversation;
