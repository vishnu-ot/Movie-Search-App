import "./App.css";

import { Route, Routes } from "react-router-dom";

import Footer from "./component/footer/Footer";
import Header from "./component/Header/Header";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/Signup/SignupPage";
import HomePage from "./Pages/HomePage/HomePage";
import Protectedroute from "./Pages/Protectedroute";

function App() {
  return (
    <div className="main-page">
      <div className="header-section">
        <Header />
      </div>
      <div className="content-section">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<Protectedroute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </div>
      <div></div>
    </div>
  );
}

export default App;
