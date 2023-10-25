import { useEffect, useState } from "react";
import { getAllHaulers } from "../../services/hualerService";
import { useNavigate } from "react-router-dom";

export const HaulerList = () => {
  const [haulers, setHaulers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllHaulers().then((haulerArr) => {
      setHaulers(haulerArr);
    });
  }, []);

  return (
    <div className="text-center">
      <span className="text-3xl font-bold ">Haulers</span>
      <div className="flex flex-col">
        {haulers.map((hauler) => {
          return (
            <div
              className="flex justify-evenly items-center p-2"
              key={hauler.id}
            >
              <div>{hauler.name}</div>
              <button
                className="border-2 border-cyan-500 p-1 bg-cyan-500/50 hover:bg-cyan-500 rounded-md"
                onClick={() => {
                  navigate(`/haulingships/${hauler.id}`);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Testing shortcuts
