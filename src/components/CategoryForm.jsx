// components
import InputField from "../components/InputField";
// files
import validateString from "../scripts/validateString";
import formInput from "../data/CategoryInputData.json";

export default function CategoryForm({
  titleState,
  describeState,
  imgState,
  onCreate,
}) {
  const [title, setTitle] = titleState;
  const [description, setDescription] = describeState;
  const [imgURL, setImgURL] = imgState;
  return (
    <form onSubmit={onCreate}>
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
