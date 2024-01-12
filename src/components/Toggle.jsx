const Toggle = ({ selectedToggle, setSelectedToggle }) => {
  return (
    <div className="mt-8 rounded-[10px] flex p-1 border border-gray  bg-gray w-[640px] gap-1 mb-4">
      {/* Onclick changing the selectedtogghle to word */}
      <div
        onClick={() => setSelectedToggle("word")}
        className={`rounded-md cursor-pointer py-2 flex-1 font-semibold text-sm ${
          selectedToggle == "word"
            ? "text-darkGray shadow-toggleShadow  bg-white"
            : "text-lightGray"
        } text-center font-inter`}
      >
        Word Input
      </div>
      {/* Onclick changing the selectedtogghle to paragraph */}
      <div
        onClick={() => setSelectedToggle("paragraph")}
        className={`rounded-md cursor-pointer py-2 flex-1 font-semibold text-sm ${
          selectedToggle == "paragraph"
            ? "text-darkGray shadow-toggleShadow bg-white"
            : "text-lightGray"
        } text-center font-inter`}
      >
        Paragraph
      </div>
    </div>
  );
};

export default Toggle;
