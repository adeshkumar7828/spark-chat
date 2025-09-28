function SignUpPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-white dark:bg-gray-900 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
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
          <a href="#" className="link link-primary">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
