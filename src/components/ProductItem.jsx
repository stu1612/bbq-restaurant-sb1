// npm
import { Link } from "react-router-dom";

export default function ProductItem({ item, routeIds }) {
  const { name, price, itemThumbnail, shortDescription } = item;
  const [categoryId, subId] = routeIds;
  return (
    <div className="product-item">
      <div>
        <img src={itemThumbnail} alt={shortDescription} />
      </div>
      <h2>{name}</h2>
      <p>{shortDescription}</p>
      <h4>{price}</h4>
      <Link
        to={`/menu/${categoryId}/${subId}/${item.name}`}
        state={{ data: item }}
      >
        See more
      </Link>
    </div>
  );
}
