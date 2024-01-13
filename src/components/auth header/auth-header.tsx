import { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo 2.png";
import "./auth-header.scss";

export const AuthHeader: FC<{
  heading: string;
  paragraph: string;
  linkName: string;
  linkUrl: string;
}> = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
  return (
    <div className="heading">
      <div className="">
        <img alt="" style={{ height: "180px", width: "180px" }} src={Logo} />
      </div>
      <h2 className="">{heading}</h2>
      <p className="">
        {paragraph}{" "}
        <Link to={linkUrl} className="">
          {linkName}
        </Link>
      </p>
    </div>
  );
};
