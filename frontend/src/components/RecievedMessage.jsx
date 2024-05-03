const RecievedMessage = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-bubble  text-black text-sm md:text-base bg-white max-w-[180px]  md:max-w-[250px]">
        It was said that you would, destroy the Sith, not join them.
      </div>
      <div className="chat-footer"> 12:40</div>
    </div>
  );
};

export default RecievedMessage;
