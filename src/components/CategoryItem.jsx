import { Link } from "react-router-dom";

export default function CategoryItem({ item, categoryId }) {
  const { title, thumbnail, longDescription, alt, type } = item;
  return (
    <div className={`category-item ${type}`}>
      <div>
        <img src={thumbnail} alt={alt} />
      </div>
      <h2>{title}</h2>
      <p>{longDescription}</p>
      <Link to={`/menu/${categoryId}/${item.id}`} className="btn">
        See more
      </Link>
    </div>
  );
}
