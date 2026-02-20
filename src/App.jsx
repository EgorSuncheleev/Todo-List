import AddButton from "./components/ui/AddButton/AddButton";
import ColorThemeButton from "./components/ui/ColorThemeButton/ColorThemeButton";
import SearchInput from "./components/ui/SearchInput/SearchInput";
import SelectButton from "./components/ui/SelectButton/SelectButton";
import Task from "./components/ui/task/task";

const App = () => {
  return (
    <div className="todo">
      <div className="todo__container">
        <h1 className="todo__title">todo list</h1>
        <div className="todo__form">
          <SearchInput className='todo__search' />
          <SelectButton />
          <ColorThemeButton />
        </div>
        <Task />
        <Task />
        <Task />
        <div className="todo__footer"></div>
      </div>
      <AddButton />
    </div>
  );
};

export default App;
