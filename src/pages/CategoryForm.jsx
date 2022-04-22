// npm
import { useState } from "react";
// components
import InputField from "../components/InputField";
// files
import validateString from "../scripts/validateString";
// data
import formInput from "../data/Category_InputForm.json";

export default function CategoryForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alt, setAlt] = useState("");
  const [imgURL, setImgURL] = useState(
    "https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
  );

  function createItem(event) {
    event.preventDefault();
    console.log(title, description, alt, imgURL);
  }

  return (
    <div>
      <h2>Add category item</h2>
      <form onSubmit={createItem}>
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
