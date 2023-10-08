export const Filter = ({ onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={evt => {
            onChange(evt.target.value);
          }}
        />
      </label>
    </div>
  );
};
