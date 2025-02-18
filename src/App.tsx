import { Routes, Route } from "react-router";

import "./App.css";
import HomePage from "./pages/home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" >
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
