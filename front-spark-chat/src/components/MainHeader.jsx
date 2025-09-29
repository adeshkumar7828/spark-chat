import { NavLink } from "react-router";

function MainHeader() {
  return (
    <header className="w-full bg-base-100 shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-primary">SPARK CHAT</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <NavLink to="/" className="hover:text-primary transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="hover:text-primary transition">
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="hover:text-primary transition">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" className="hover:text-primary transition">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
