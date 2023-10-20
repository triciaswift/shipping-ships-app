import { useEffect, useState } from "react";
import "./ShipList.css";
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
    <>
      {ships.map((ship) => {
        return (
          <div className="ship-container" key={ship.id}>
            <div>Ship: {ship.name}</div>
            <div className="hauler-name">Hauler: {ship.hauler?.name}</div>
            <button
              onClick={() => {
                handleDelete(ship.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};
