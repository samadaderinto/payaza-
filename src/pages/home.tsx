import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";
import "./home.scss";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="hero-section">
        <h1>Healthy Moms, Healthy beginnings</h1>
        <p>Schedule your appointments with ease!</p>
        <button
          onClick={() => {
            navigate("/client/appointments");
          }}
        >
          Book Appointment
        </button>
      </div>

      <div className="hero-section--2">
        <h1>Empowering Moms With Safety, At Their Fingertips</h1>
        <p>
          We believe that Time and good health are two precious things more
          valuable than money. That’s why we save you both, by bringing the care
          to you.
        </p>
        <button onClick={() => {
            navigate("/client/services");
          }}>I want that kind of care</button>
      </div>
    </div>
  );
};
