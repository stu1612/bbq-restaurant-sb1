import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <header>
        <div className="logo">
          <img src="" alt="" />
        </div>
      </header>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/menu/dishes">Menu</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}
