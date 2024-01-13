import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ClientHeader } from "../components/client header/client header";
import { useContext } from "react";
import { AppContextProvider } from "../utils/data";
import { LoginContextType } from "../utils/types";


export const Client = () => {

  const {setIsLoggedIn} = useContext(AppContextProvider)as LoginContextType;
  const navigate = useNavigate()
  return (
    <div style={{
      display: "flex",

    }}>
      <div
        className=""
        style={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          width: "250px",
          padding: "30px 40px",
          height: "100vh",
          boxShadow: "5px 1px 20px 2px #111"
        }}
      >
        <Link
          to="/"
          style={{
            color: "#fff",
            display: "flex",
            width: "300px",
            padding: "30px 40px",
          }}
        >
          Home
        </Link>
        <Link
          to="/client/dashboard"
          style={{
            color: "#fff",
            display: "flex",
            width: "300px",
            padding: "30px 40px",
          }}
        >
          Dashboard
        </Link>
        <Link
          to="/client/appointments"
          style={{
            color: "#fff",
            display: "flex",
            width: "300px",
            padding: "30px 40px",
          }}
        >
          Appointment
        </Link>
        <Link
          to="/client/chat"
          style={{
            color: "#fff",
            display: "flex",
            width: "300px",
            padding: "30px 40px",
          }}
        >
          Chat
        </Link>
        <Link
          to="/client/services"
          style={{
            color: "#fff",
            display: "flex",
            width: "300px",
            padding: "30px 40px",
          }}
        >
          Services
        </Link>

        <Link
          to="/"
          style={{
            color: "#fff",
            display: "flex",
            width: "300px",
            padding: "30px 40px",
          }}

          onClick={(e) => {
            e.preventDefault()
            setIsLoggedIn(false)
            navigate("/")

          }}
        >
          Logout
        </Link>
      </div>

      <div style={{ color: "#fff", width: "100%" }}>
        <ClientHeader />
        <Outlet />
      </div>
    </div>
  );
};
