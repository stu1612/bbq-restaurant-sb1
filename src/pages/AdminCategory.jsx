// npm
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
// files
import { createDocument } from "../firebase/firestore";
// components
import CategoryForm from "../components/CategoryForm";
import { createFile } from "../firebase/cloudStorage";
import readFile from "../scripts/readFile";

export default function AdminCategory() {
  const { dishes, setDishes } = useContext(AppContext);
  const [title, setTitle] = useState("hello");
  const [description, setDescription] = useState("testing");
  const [file, setFile] = useState(null);

  async function onCreateCategory(event) {
    event.preventDefault();
    const payload = {
      title: title,
      description: description,
      imgURL: "",
    };

    // upload to cloudStorage
    const fileName = `dishes-dish-${title}.png`;
    const imageURL = await createFile(fileName, file);

    // add url into object
    payload.imgURL = imageURL;

    const filePath = "dishes/dishes/content";
    const documentId = await createDocument(filePath, payload);
    payload.id = documentId;
    setDishes([...dishes, payload]);
    resetForm();
  }

  function onImageSelect(event) {
    const file = event.target.files[0];
    // store file in state as a reference
    setFile(file);
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setFile(null);
  }

  return (
    <div>
      <CategoryForm
        titleState={[title, setTitle]}
        describeState={[description, setDescription]}
        onCreateCategory={onCreateCategory}
        onImageSelect={onImageSelect}
      />
    </div>
  );
}
