import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ShippingList } from "./components/ShippingList";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ShippingList />} />
      </Route>
    </Routes>
  );
}

export default App;
