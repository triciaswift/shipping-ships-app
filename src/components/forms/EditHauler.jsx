import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHaulerById, updateHauler } from "../../services/hualerService";
import { getAllDocks } from "../../services/dockService";

export const EditHauler = () => {
  const [hauler, setHauler] = useState([]);
  const [docks, setDocks] = useState([]);
  const { haulerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getHaulerById(haulerId).then((haulerArr) => {
      setHauler(haulerArr);
    });
  }, [haulerId]);

  useEffect(() => {
    getAllDocks().then((dockArr) => {
      setDocks(dockArr);
    });
  }, []);

  const handleInputChange = (event) => {
    const haulerCopy = { ...hauler };
    haulerCopy[event.target.name] = event.target.value;
    setHauler(haulerCopy);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const updatedHauler = {
      id: hauler.id,
      name: hauler.name,
      dock_id: hauler.dock_id,
    };

    updateHauler(updatedHauler).then(() => {
      navigate(`/haulingships`);
    });
  };

  return (
    <form className="mx-40 my-20 border-2 py-9" onSubmit={handleSave}>
      <header className="pb-7 text-center text-3xl font-bold">
        Edit Hauler
      </header>
      <fieldset className="flex flex-col justify-center">
        <div className="pb-4">
          <label>Name: </label>
          <input
            name="name"
            value={hauler.name ? hauler.name : ""}
            type="text"
            className="border-2 border-cyan-500 rounded-md"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center">
          <div className="mr-1">Docks: </div>
          <select
            name="dock_id"
            value={hauler.dock_id}
            className="border-2 border-cyan-500 rounded-md mb-4"
            required
            onChange={handleInputChange}
          >
            <option value={""}>Please select a dock location</option>
            {docks.map((dock) => {
              return (
                <option key={dock.id} value={dock.id}>
                  {dock.location}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>
      <button type="submit" className="border-2 border-cyan-500 rounded-md">
        Update
      </button>
    </form>
  );
};
