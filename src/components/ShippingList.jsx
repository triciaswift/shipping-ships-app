import { useEffect, useState } from "react";
import { getAllShips } from "../services/shipService";
import { getAllHaulers } from "../services/hualerService";
import { getAllDocks } from "../services/dockService";

export const ShippingList = () => {
  const [ships, setShips] = useState([]);
  const [haulers, setHaulers] = useState([]);
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getAllShips().then((shipsArr) => {
      setShips(shipsArr);
    });
    getAllHaulers().then((shipsArr) => {
      setHaulers(shipsArr);
    });
    getAllDocks().then((shipsArr) => {
      setDocks(shipsArr);
    });
  }, []);

  return (
    <section className="categories">
      <div>
        <header>Ships</header>
        {ships.map((ship) => {
          return <div key={ship.id}>{ship.name}</div>;
        })}
      </div>
      <div>
        <header>Haulers</header>
        {haulers.map((hauler) => {
          return <div key={hauler.id}>{hauler.name}</div>;
        })}
      </div>
      <div>
        <header>Docks</header>
        {docks.map((dock) => {
          return <div key={dock.id}>{dock.location}</div>;
        })}
      </div>
    </section>
  );
};
