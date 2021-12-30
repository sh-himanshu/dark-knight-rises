import React, { createContext, useContext, useEffect, useState } from "react";
import { possibleCoordinates } from "../lib/utils";

interface Location {
  position: [number, number];
  coordinate: [number, number];
}

interface StateContextProps {
  children: React.ReactNode;
}

interface stateContextValue {
  isPossibleMove: (move: [number, number]) => boolean;
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  firstMove: boolean;
  setFirstMove: React.Dispatch<React.SetStateAction<boolean>>;
}

const stateContext = createContext<stateContextValue | undefined>(undefined);

const StateContext = ({ children }: StateContextProps) => {
  const [location, setLocation] = useState<Location>({
    position: [0, 0],
    coordinate: [0, 0],
  });

  const [firstMove, setFirstMove] = useState(true);

  const [possibleMoves, setPossibleMoves] = useState<Array<[number, number]>>(
    []
  );

  useEffect(() => {
    setPossibleMoves(possibleCoordinates(location.coordinate));
  }, [location]);

  const isPossibleMove = (move: [number, number]) => {
    try {
      return !!possibleMoves.find(
        (e) => JSON.stringify(e) === JSON.stringify(move)
      );
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  return (
    <stateContext.Provider
      value={{ isPossibleMove, location, setLocation, firstMove, setFirstMove }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
export default StateContext;
