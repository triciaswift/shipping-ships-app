import { useEffect, useState } from "react";
import {
  deleteShip,
  getShipsWithTheirHaulers,
} from "../../services/shipService";

export const ShipList = () => {
  const [ships, setShips] = useState([]);

  const getShips = () => {
    getShipsWithTheirHaulers().then((shipsArr) => {
      setShips(shipsArr);
    });
  };

  useEffect(() => {
    getShips();
  }, []);

  const handleDelete = (shipId) => {
    deleteShip(shipId).then(() => {
      getShips();
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-evenly">
        <span className="text-2xl font-bold">SHIP NAME</span>
        <span className="text-2xl font-bold">HAULER NAME</span>
        <span> </span>
      </div>
      {ships.map((ship) => {
        return (
          <div className="flex justify-evenly my-3" key={ship.id}>
            <div>{ship.name}</div>
            <div>{ship.hauler?.name}</div>
            <button
              className="border-2 border-cyan-500 p-0.5 bg-cyan-500/50 hover:bg-cyan-500 rounded-md"
              onClick={() => {
                handleDelete(ship.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
