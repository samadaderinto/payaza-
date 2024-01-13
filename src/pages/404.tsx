import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div >
      <button onClick={() => navigate(-1)}>{"Go back <---"}</button>
    </div>
  );
};
