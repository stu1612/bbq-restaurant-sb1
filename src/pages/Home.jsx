// npm
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// files
import { readCollection } from "../firebase/firestore";
// components
import Loading from "../components/Loading";

export default function Home() {
  const [status, setStatus] = useState(0);
  const [items, setItems] = useState([]);
  // method
  useEffect(() => {
    async function loadData() {
      const itemsData = await readCollection("dishes/dishes/content/");
      setItems(itemsData);
      setStatus(1);
    }
    loadData();
  }, []);

  // safeguard
  if (status === 0) return <Loading />;
  if (status === 2) return <p>Error ..</p>;

  const Pills = items.map((item) => <Link to="/">{item.title}</Link>);

  return (
    <section className="home" id="home">
      <div className="hero-image">
        <h1>holy bbq</h1>
        <img src="" alt="" />
      </div>
      <article className="content">
        <h2>opening hours</h2>
        <p>
          The restaurant is open Monday - Thursday from 11-20 and Friday -
          Saturday 12-22. We are closed Sundays
        </p>
        <p>
          For all bookings please fill out our booking form and we will get back
          to you with a confirmation !
        </p>
        <Link to="/contact">Contact us</Link>
      </article>
      <div className="banner-image">
        <img src="" alt="" />
      </div>
      <article className="content">
        <h2>about</h2>
        <p>
          Our newly refurbished BBQ Steak House imports the very best quality
          meat from all over the world
        </p>
        <p>
          Our dedicated team of chefs pride themselves on sourcing happy meat
          which is both tasty and farm friendly
        </p>
        <p>
          We dont compromoise on quality and not should you - Welcome to Holy
          BBQ !
        </p>
      </article>
      <div className="banner-image">
        <img src="" alt="" />
      </div>
      <article className="content">
        <h2>menu</h2>
        <p>
          Our menu is constantly being updated as our chefs continue to break
          the BBQ boundaries !
        </p>
        <p>
          Feel free to check out some of our current food items currently in
          circulation
        </p>
        <div className="pills-container">{Pills}</div>
      </article>
    </section>
  );
}
