import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Message from "./components/Message";
import Profil from "./components/Profil";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/messages" element={<Message />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profil" element={<Profil></Profil>}></Route>
      </Routes>
    </div>
  );
}

export default App;
