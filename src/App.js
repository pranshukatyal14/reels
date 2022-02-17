import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Feed from "./components/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Feed />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
