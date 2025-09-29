import { Routes, Route } from "react-router";
import { LoginPage, LogoutPage, MainHomepage, SignUpPage } from "./Pages";
import { MainHeader } from "./components";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<MainHomepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
