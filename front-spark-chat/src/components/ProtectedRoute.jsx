import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { useGetUserDataFromCookiesQuery } from "../services/injected/authApi";

function ProtectedRoute() {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isError, isSuccess } =
    useGetUserDataFromCookiesQuery(undefined, { skip: !!user });

  // If user data exists in Redux, render protected content immediately
  if (user) {
    return <Outlet />;
  }

  // Handle the loading state while the request is in progress
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56 text-primary"></progress>
      </div>
    );
  }

  // Handle the success state
  if (isSuccess && (user || data)) {
    return <Outlet />;
  }

  // Handle error state (e.g., fetch failed, user not authenticated)
  // or if the user is not authenticated after loading is complete
  if (isError || (!user && !data)) {
    return <Navigate to={"/login"} replace />;
  }

  // Fallback case (should be unreachable with proper logic)
  return <div>Something went wrong.</div>;
}

export default ProtectedRoute;
