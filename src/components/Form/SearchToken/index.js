const SearchToken = ({ check = false }) => {
  return (
    <div className="w-[100%] flex border border-[#2C2C2C] bg-[#141414] rounded-lg relative">
      <div className="w-[147px] bg-[#282828]">
        <select
          name=""
          id=""
          className="bg-[#282828] p-5 text-white text-base outline-none"
        >
          <option value="eth">Ethereum</option>
          <option value="bnb">Binance</option>
        </select>
      </div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search token address"
        className="outline-none border-none bg-[#141414] py-[22px] pl-[20px] text-[16px] text-[#86888C]"
      />
      {check && (
        <div className="w-[80px] h-[28px] bg-[#FCBF07] text-[16px] text-[#16171B)] px-3 py-[2px] text-center rounded-[32px] font-bold absolute right-[20px] top-[20px]">
          Check
        </div>
      )}
    </div>
  );
};

export default SearchToken;
