import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { PageNotFound } from "./pages/404";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Appointments } from "./components/appointment/appointment";
import { Services } from "./components/services";
import { Chat } from "./components/chat";
import { Dashboard } from "./components/dashboard/dashboard";
import { Client } from "./pages/client";
import { useState } from "react";
import { AppContextProvider } from "./utils/data";
import { ProtectedRoute } from "./utils/hooks";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  return (
    <AppContextProvider.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
        }}
      >
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/client" element={<Client />}>
        <Route path="/client/dashboard" index={true} element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
        <Route path="/client/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>}></Route>
        <Route path="/client/services" element={<ProtectedRoute><Services /></ProtectedRoute>}></Route>
        <Route path="/client/appointments" element={<ProtectedRoute><Appointments /></ProtectedRoute>}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>

    </AppContextProvider.Provider>
  );
}

export default App;
