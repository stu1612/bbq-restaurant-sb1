// NPM packages
import { useLocation, useNavigate } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const navigate = useNavigate();

  const { heroImage, alt, name, description, price, recipe } =
    location.state.data;

  return (
    <div className="category">
      <div>
        <img src={heroImage} alt={alt} />
      </div>
      <div>
        <h2>{name}</h2>
        <span>{price}</span>
        <p>{description}</p>
        <ul>{recipe}</ul>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
