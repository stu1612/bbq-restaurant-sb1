// npm
import { useState, useEffect } from "react";
// components
import InputField from "../components/InputField";
// files
import validateString from "../scripts/validateString";
import validateNumber from "../scripts/validateNumber";
import formInput from "../data/ProductInputData.json";
// firebase
import { readCollection } from "../firebase/firestore";

export default function AdminProduct() {
  const [list, setList] = useState([]);
  const [optionValue, setOptionValue] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [recipe, setRecipe] = useState([]);
  const [imgURL, setImgURL] = useState(
    "https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
  );

  useEffect(() => {
    async function loadData() {
      const listData = await readCollection(`dishes/dishes/content/`);
      setList(listData);
    }
    loadData();
  }, [optionValue]);

  function createItem(event) {
    event.preventDefault();
    console.log(name, description, price, recipe, imgURL);
  }

  return (
    <div>
      <h2>Add category item</h2>
      <select
        name="categories"
        id="categories"
        value={optionValue}
        onChange={(event) => setOptionValue(event.target.value)}
      >
        {list.map((item) => (
          <option value={item.title} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <form onSubmit={createItem}>
        <InputField
          setup={formInput.name}
          state={[name, setName]}
          validation={validateString}
        />
        <InputField
          setup={formInput.description}
          state={[description, setDescription]}
          validation={validateString}
        />
        <InputField
          setup={formInput.price}
          state={[price, setPrice]}
          validation={validateNumber}
        />
        <InputField
          setup={formInput.recipe}
          state={[recipe, setRecipe]}
          validation={validateString}
        />
        <label>
          Image:
          <input
            type="text"
            accept="image/png, image/jpg"
            value={imgURL}
            onChange={(event) => setImgURL(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
