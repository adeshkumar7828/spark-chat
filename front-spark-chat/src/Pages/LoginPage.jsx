import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { usePostUserDataForLoginMutation } from "../services/injected/authApi";

function LoginPage() {
  const [login, { isLoading }] = usePostUserDataForLoginMutation();
  const [{ email, password }, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const formData = { email, password };
      const result = await login(formData).unwrap();
      if (result) navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="h-[80vh] flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-white dark:bg-gray-900 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <NavLink to="/register" className="link link-primary">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
