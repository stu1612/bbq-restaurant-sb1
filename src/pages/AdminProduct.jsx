// npm
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// firebase
import { createDocument } from "../firebase/firestore";
import { createFile } from "../firebase/cloudStorage";
// components
import ProductForm from "../components/ProductForm";

export default function AdminProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [recipe, setRecipe] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [optionValue, setOptionValue] = useState("");
  const [file, setFile] = useState(null);

  async function onCreateProduct(event) {
    event.preventDefault();
    const payload = {
      name: name,
      description: description,
      price: price,
      recipe: recipe,
      imgURL: "",
    };

    // upload to cloudStorage
    const path = "dishes/products";
    const pathName = `dish-${name}.png`;
    const id = uuidv4();
    const fileName = path + pathName + id;
    const imageURL = await createFile(fileName, file);

    // add url into object
    payload.imgURL = imageURL;

    const filePath = `dishes/dishes/content/${optionValue}/content`;
    const documentId = await createDocument(filePath, payload);
    payload.id = documentId;
    setDishes([...dishes, payload]);
    resetForm();
  }

  function onImageSelect(event) {
    const file = event.target.files[0];
    setFile(file);
  }

  function resetForm() {
    setName("");
    setDescription("");
    setPrice(0);
    setRecipe("");
    setFile(null);
  }

  return (
    <ProductForm
      nameState={[name, setName]}
      describeState={[description, setDescription]}
      priceState={[price, setPrice]}
      recipeState={[recipe, setRecipe]}
      optionState={[optionValue, setOptionValue]}
      onCreateProduct={onCreateProduct}
      onImageSelect={onImageSelect}
    />
  );
}
