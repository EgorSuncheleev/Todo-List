import AddSvg from "../../icons/AddSvg";
import NewNoteTask from "../NewTaskNote/NewNoteTask";
import "./AddButton.css";

const AddButton = () => {
  return (
    <div className="add__box">
      <button className="add">
        <AddSvg />
      </button>
      <NewNoteTask />
    </div>
  );
};

export default AddButton;
