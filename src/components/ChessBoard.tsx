import Check from "./Check";

const getChecks = () => {
  const checks: Array<[number, number]> = [];
  for (let a = 1; a <= 8; a++) {
    for (let b = 1; b <= 8; b++) {
      checks.push([a, b]);
    }
  }
  return checks;
};

const ChessBoard = () => {
  return (
    <div className="grid grid-cols-8 mt-5 border-8 border-amber-900">
      {getChecks().map((coordinate, index) => (
        <Check key={index} coordinate={coordinate} />
      ))}
    </div>
  );
};

export default ChessBoard;
