import { Outlet, Route, Routes } from "react-router-dom";
import { ShippingList } from "./components/ShippingList";
import { NavBar } from "./components/navbar/NavBar";
import { ShipList } from "./components/ships/ShipList";
import { HaulerList } from "../haulers/HaulerList";
import { EditHauler } from "../forms/EditHauler";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<ShippingList />} />
        <Route path="shippingships" element={<ShipList />} />
        <Route path="haulingships" element={<HaulerList />} />
        <Route path="haulingships/:haulerId" element={<EditHauler />} />
      </Route>
    </Routes>
  );
}

export default App;
