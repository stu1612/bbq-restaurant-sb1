export default function FileInput({ onImageSelect }) {
  return (
    <label>
      Upload image:
      <input
        type="file"
        accept="image/png, image/jpg"
        onChange={onImageSelect}
        required
      />
    </label>
  );
}
