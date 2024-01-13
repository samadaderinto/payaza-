import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    navigate("/client/dashboard")
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div>Login</div>
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            
            className="block text-gray-700 text-sm font-medium"
          >
            Password:
          </label>
          <input
            type="password"
            
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Log in
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
          style={{ visibility: "visible", marginLeft: "145px" }}
        >
          sign up
        </button>
      </form>
    </div>
  );
};
