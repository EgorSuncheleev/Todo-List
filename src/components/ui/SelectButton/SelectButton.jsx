import "./SelectButton.css";

const SelectButton = () => {
  return (
    <select className="todo__select">
      <option className="todo__select-item">all</option>
      <option className="todo__select-item">Complete</option>
      <option className="todo__select-item">Incomplete</option>
    </select>
  );
};

export default SelectButton;
