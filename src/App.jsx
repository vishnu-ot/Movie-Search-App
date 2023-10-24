import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/Signup/SignupPage";
import HomePage from "./Pages/HomePage/HomePage";
import Protectedroute from "./Pages/Protectedroute";
import ProtectedLogin from "./Pages/ProtectedLogin";
import "./App.css";
import { useContext } from "react";
import { FormContext } from "./context/FormContext";

function App() {
  const {auth}=useContext(FormContext)
  return (
    <div className={`${auth ? 'home-page' :'main-page'}`}>
      <div className="header-section">
        <Header />
      </div>
      <div className="content-section">
        <Routes>
          <Route element={<ProtectedLogin />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

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
