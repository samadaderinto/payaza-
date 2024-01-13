import { FC } from "react";
import { Link } from "react-router-dom";
import "./card.scss"



export const Card: FC<{title: string, header?: string, url: string, bg: string, color: string, width?: string}> = ({ title, header, url = "#", bg, color, width }) => {
  return (
    <div className="card" style={{background: bg, color: color, width: width}}>
      <h3>{title}</h3>
      <div className="">{header}</div>
      <Link to={`/${url}`}>{url}</Link>
    </div>
  );
};
