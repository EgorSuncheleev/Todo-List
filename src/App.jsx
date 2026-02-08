import Search from "./components/search-input/search-input";
import Select from "./components/select/select";
import ShemeTheme from "./components/color-sheme/ShemeTheme";
import Task from "./components/task/task";
import Add from "./components/add-button/add";

const App = () => {
  return (
    <div className="todo"> 
      <div className="todo__container">
      <h1 className="todo__title">todo list</h1>
      <div className="todo__form">
      <Search />
      <Select />
      <ShemeTheme />
      </div>
      <Task />
      <Task />
      <Task />
      <div className="todo__footer">
      </div>
      </div>
        <Add />
    </div>
  )
}

export default App