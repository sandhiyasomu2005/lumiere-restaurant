
import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Menu from "./pages/menu.jsx";
import Orders from "./pages/Orders.jsx";
import Billing from "./pages/Billing.jsx";
import Payments from "./pages/Payments.jsx";
import Reports from "./pages/Reports.jsx";
import Settings from "./pages/Settings.jsx";


function ProtectedLayout() {

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-layout">

      {/* SIDEBAR */}
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />


      {/* MAIN AREA */}
      <div className="main-area">

        {/* HEADER */}
        <Header
          setMobileOpen={setMobileOpen}
        />


        {/* PAGE CONTENT */}
        <main className="page-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* DEFAULT */}
        <Route
          path="/"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />


        {/* AUTH */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />


        {/* APPLICATION */}
        <Route element={<ProtectedLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/menu"
            element={<Menu />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/billing"
            element={<Billing />}
          />

          <Route
            path="/payments"
            element={<Payments />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>


        {/* UNKNOWN URL */}
        <Route
          path="*"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
