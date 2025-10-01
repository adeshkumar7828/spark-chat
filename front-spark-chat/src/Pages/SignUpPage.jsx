import { useState } from "react";
import { Link } from "react-router";
import { usePostUserDataForRegistrationMutation } from "../services/injected/authApi.js";

function SignUpPage() {
  const [registration, { isLoading, isError, isSuccess }] =
    usePostUserDataForRegistrationMutation();

  const [{ userName, email, password }, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const formData = { userName, email, password };
      console.log({ isLoading, isError, isSuccess });
      console.log(formData);
      const createdUser = await registration(formData).unwrap();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-white dark:bg-gray-900 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            name="userName"
            value={userName}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered w-full"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary w-full">Sign Up</button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
