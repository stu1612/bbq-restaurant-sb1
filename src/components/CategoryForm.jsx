// components
import InputField from "../components/InputField";
// files
import validateString from "../scripts/validateString";
import formInput from "../data/CategoryInputData.json";

export default function CategoryForm({
  titleState,
  describeState,
  onCreateCategory,
  onImageSelect,
}) {
  const [title, setTitle] = titleState;
  const [description, setDescription] = describeState;

  return (
    <form onSubmit={onCreateCategory}>
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
          type="file"
          accept="image/png, image/jpg"
          onChange={onImageSelect}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
