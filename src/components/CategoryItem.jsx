// npm
import { Link } from "react-router-dom";

export default function CategoryItem({ item, categoryId }) {
  const { title, imgURL, longDescription, alt } = item;
  return (
    <div className="category-item">
      <div>
        <img
          src={imgURL}
          alt={alt}
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
      </div>
      <h2>{title}</h2>
      <p>{longDescription}</p>
      <Link to={`/menu/${categoryId}/${item.id}`} className="btn">
        See more
      </Link>
    </div>
  );
}
