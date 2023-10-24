import { useEffect, useState } from "react";
import { getDocksWithHaulers } from "../../services/dockService";

export const DockList = () => {
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getDocksWithHaulers().then((dockArr) => {
      setDocks(dockArr);
    });
  }, []);

  return (
    <div>
      <header className="text-center text-3xl font-bold">Docks</header>
      <div className="flex justify-evenly">
        {docks.map((dock) => {
          return (
            <div key={dock.id}>
              <div className="text-xl">
                {dock.location}: {dock.capacity} lbs
              </div>
              {dock.haulers.map((hauler) => {
                return hauler.id ? (
                  <div key={hauler.id} className="text-center">
                    {hauler.name}
                  </div>
                ) : (
                  <div key={hauler.id}>Currently No Haulers</div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
