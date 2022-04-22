// npm
import { useState, useContext } from "react";
// components
import InputField from "../components/InputField";
// files
import { createDocument } from "../firebase/firestore";
import validateString from "../scripts/validateString";
// data
import formInput from "../data/CategoryInputData.json";
// context
import { DishContext } from "../context/DishContext";

export default function CategoryForm() {
  const { dishesList, setDishesList } = useContext(DishContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alt, setAlt] = useState("");
  const [imgURL, setImgURL] = useState(
    "https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
  );

  async function addObjectToFireStore(event) {
    event.preventDefault();
    const payload = {
      documentId: title,
      title: title,
      description: description,
      imgURL: imgURL,
    };
    const path = "dishes/dishes/content";
    const document = await createDocument(payload, path, title);
    payload.title = document;
    setDishesList([...dishesList, payload]);
  }

  return (
    <div>
      <h2>Add category item</h2>
      <form onSubmit={addObjectToFireStore}>
        <InputField
          setup={formInput.title}
          state={[title, setTitle]}
          validation={validateString}
        />
        <InputField
          setup={formInput.description}
          state={[description, setDescription]}
          validation={validateString}
        />
        <InputField
          setup={formInput.alt}
          state={[alt, setAlt]}
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
