import { useStateContext } from "../context/StateContext";

interface CheckProps {
  coordinate: [number, number];
}

const Check = ({ coordinate }: CheckProps) => {
  const value = useStateContext();

  const allowedMove = value!.isPossibleMove(coordinate);

  return (
    <div
      className={
        "h-[4.6rem] w-[4.6rem] " +
        (coordinate.reduce((a, b) => a + b, 0) % 2 === 0
          ? " bg-blue-900 text-white "
          : " bg-white") +
        (allowedMove && !value?.firstMove ? " border-8 border-green-600" : "")
      }
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        value?.setFirstMove(false);

        if (!(allowedMove || value?.firstMove))
          return alert("MOVE NOT POSSIBLE !");

        if (value?.location) {
          const { x, y, height, width } = (
            e.target as HTMLDivElement
          ).getBoundingClientRect();

          value.setLocation({
            position: [x + width / 2, y + height / 2],
            coordinate,
          });
        }
      }}
    ></div>
  );
};

export default Check;
