import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Users from "./pages/users";
import UserProfile from "./pages/userProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
