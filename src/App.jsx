import { Outlet, Route, Routes } from "react-router-dom";
import { AllList } from "./components/shippingShips/AllList";
import { NavBar } from "./components/navbar/NavBar";
import { ShipList } from "./components/shippingShips/ShipList";
import { HaulerList } from "./components/shippingShips/HaulerList";
import { EditHauler } from "./components/forms/EditHauler";
import { DockList } from "./components/shippingShips/DockList";

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
        <Route index element={<AllList />} />
        <Route path="shippingships" element={<ShipList />} />
        <Route path="haulingships" element={<HaulerList />} />
        <Route path="haulingships/:haulerId" element={<EditHauler />} />
        <Route path="docks" element={<DockList />} />
      </Route>
    </Routes>
  );
}

export default App;
