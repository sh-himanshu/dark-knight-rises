import ChessBoard from "./components/ChessBoard";
import Knight from "./components/Knight";
import Reset from "./components/Reset";
import StateContext from "./context/StateContext";

const App = () => {
  return (
    <StateContext>
      <div className="h-screen w-screen bg-amber-200 flex justify-center items-start ">
        <ChessBoard />
        <Knight />
        <Reset />
      </div>
    </StateContext>
  );
};

export default App;
