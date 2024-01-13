
import "./client header.scss";
import logo from "../../assets/logo.png";

export const ClientHeader = () => {
  return (
    <div className="client-header">
      <div className="main">
        <img src={logo} alt="safe mom logo" />
      </div>

      <div className="action">
        Hi, User
      </div>
    </div>
  );
};
