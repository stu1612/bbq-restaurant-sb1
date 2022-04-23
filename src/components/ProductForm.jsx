// npm
import { useState, useEffect } from "react";
// components
import InputField from "../components/InputField";
// files
import validateString from "../scripts/validateString";
import validateNumber from "../scripts/validateNumber";
import formInput from "../data/ProductInputData.json";
import { readCollection } from "../firebase/firestore";

export default function ProductForm({
  nameState,
  describeState,
  priceState,
  recipeState,
  imgState,
  optionState,
  onCreateProduct,
}) {
  const [name, setName] = nameState;
  const [description, setDescription] = describeState;
  const [price, setPrice] = priceState;
  const [recipe, setRecipe] = recipeState;
  const [imgURL, setImgURL] = imgState;
  const [optionValue, setOptionValue] = optionState;
  // local state
  const [list, setList] = useState([]);

  useEffect(() => {
    async function loadCategoryItems(path) {
      const listData = await readCollection(path);
      setList(listData);
    }
    loadCategoryItems(`dishes/dishes/content/`);
  }, [optionValue]);

  const OptionItem = list.map((item) => (
    <option value={item.title} key={item.id}>
      {item.title}
    </option>
  ));

  return (
    <form onSubmit={onCreateProduct}>
      <select
        value={optionValue}
        onChange={(event) => setOptionValue(event.target.value)}
      >
        {OptionItem}
      </select>
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
  );
}
