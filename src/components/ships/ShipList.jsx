import { useEffect, useState } from "react";
import "./ShipList.css";
import { getShipsWithTheirHaulers } from "../../services/shipService";

export const ShipList = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getShipsWithTheirHaulers().then((shipsArr) => {
      setShips(shipsArr);
    });
  }, []);
  return (
    <>
      {ships.map((ship) => {
        return (
          <div className="ship-container" key={ship.id}>
            <div>Ship: {ship.name}</div>
            <div className="hauler-name">Hauler: {ship.hauler?.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </>
  );
};
