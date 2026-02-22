import "./SelectButton.css";

const SelectButton = () => {

  const handleClickSelectButton = () => {
    console.log('list')
  }

  return (
    <select className="todo__select" onClick={handleClickSelectButton}>
      <option className="todo__select-item">all</option>
      <option className="todo__select-item">Complete</option>
      <option className="todo__select-item">Incomplete</option>
    </select>
  );
};

export default SelectButton;
