import { useStateContext } from "../context/StateContext";
import image from "../images/knight.png";
import { isEqual } from "../lib/utils";

const Knight = () => {
  const value = useStateContext();
  const position = value!.location.position;

  return (
    <img
      src={image}
      alt="Knight"
      className={
        "h-16 w-16 absolute transition-all ease-in-out delay-100" +
        (isEqual(position, [0, 0]) ? " opacity-0" : " opacity-100")
      }
      style={{
        top: position[1] - 32,
        left: position[0] - 32,
      }}
    />
  );
};

export default Knight;
