import { useEffect, useState } from "react";
import { getAllShips } from "../../services/shipService";
import { getAllHaulers } from "../../services/hualerService";
import { getAllDocks } from "../../services/dockService";

export const AllList = () => {
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
    <section className="flex justify-evenly">
      <div>
        <header className="text-2xl font-bold">Ships</header>
        {ships.map((ship) => {
          return (
            <div key={ship.id} className="text-center">
              {ship.name}
            </div>
          );
        })}
      </div>
      <div>
        <header className="text-2xl font-bold">Haulers</header>
        {haulers.map((hauler) => {
          return (
            <div key={hauler.id} className="text-center">
              {hauler.name}
            </div>
          );
        })}
      </div>
      <div>
        <header className="text-2xl font-bold">Docks</header>
        {docks.map((dock) => {
          return (
            <div key={dock.id} className="text-center">
              {dock.location}
            </div>
          );
        })}
      </div>
    </section>
  );
};
