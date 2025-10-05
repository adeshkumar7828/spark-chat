import { replace, useNavigate } from "react-router";
import { useLogoutUserMutation } from "../services/injected/authApi";

function LogoutPage() {
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutUserMutation();

  async function handleLogout() {
    try {
      await logout().unwrap();
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed:", err);
      // In case of error, still try to navigate
      navigate("/login");
    }
  }
  return (
    <div className="h-[80vh] flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-white dark:bg-gray-900 p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        <p className="mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-center gap-4">
          <button
            className="btn btn-outline"
            onClick={() => navigate(-1, { replace: true })}
          >
            Cancel
          </button>
          <button
            className="btn btn-error"
            onClick={handleLogout}
            disabled={isLoading}
          >
            {isLoading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default LogoutPage;
