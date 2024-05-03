const SentMessage = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>

      <div className="chat-bubble text-white text-sm md:text-base bg-sky-500 max-w-[180px]  md:max-w-[250px]">
        I hate you!
      </div>
      <div className="chat-footer"> 12:40</div>
    </div>
  );
};

export default SentMessage;
