import { useEffect, useState } from "react";
import { getAllHaulers } from "../src/services/hualerService";

export const HaulerList = () => {
  const [haulers, setHaulers] = useState([]);

  useEffect(() => {
    getAllHaulers().then((haulerArr) => {
      setHaulers(haulerArr);
    });
  }, []);
  return (
    <div>
      <span className="text-2xl font-bold">Haulers</span>
      <div className="flex flex-col">
        {haulers.map((hauler) => {
          return (
            <div className="flex justify-between" key={hauler.id}>
              <div>{hauler.name}</div>
              <button className="border-2 border-cyan-500 p-1 bg-cyan-500/50 hover:bg-cyan-500 rounded-md">
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
