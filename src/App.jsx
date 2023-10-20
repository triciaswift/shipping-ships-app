import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { ShippingList } from "./components/ShippingList";
import { NavBar } from "./components/navbar/NavBar";

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
      </Route>
    </Routes>
  );
}

export default App;
