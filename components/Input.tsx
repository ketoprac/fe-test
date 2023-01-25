const Input = (props: any) => {
  const { searchInputRef } = props;
  return (
    <input
      className="bg-slate-700 text-white font-bold p-2 rounded mr-1"
      type="text"
      ref={searchInputRef}
    />
  );
};

export default Input;
