import { useStateContext } from "../context/StateContext";

const Reset = () => {
  const value = useStateContext();

  const handleClick = async () => {
    value?.setFirstMove(true);
    value?.setLocation({ position: [0, 0], coordinate: [0, 0] });
  };
  return (
    <button
      onClick={handleClick}
      className="absolute right-0 bottom-0 m-10 py-3 px-6 rounded-md bg-indigo-900 text-gray-100 text-lg font-semibold tracking-widest shadow-3xl hover:bg-pink-900"
    >
      RESET
    </button>
  );
};

export default Reset;
