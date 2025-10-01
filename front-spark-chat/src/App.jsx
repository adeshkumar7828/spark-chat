import { Routes, Route } from "react-router";
import { LoginPage, LogoutPage, MainHomepage, SignUpPage } from "./Pages";
import { ProtectedRoute } from "./components";
import { AuthLayout, MainLayout } from "./layouts/index.js";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<MainHomepage />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
