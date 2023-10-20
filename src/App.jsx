import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { ShippingList } from "./components/ShippingList";
import { NavBar } from "./components/navbar/NavBar";
import { ShipList } from "./components/ships/ShipList";

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
      </Route>
    </Routes>
  );
}

export default App;
