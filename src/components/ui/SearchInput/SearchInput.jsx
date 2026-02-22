import "./SearchInput.css";
import SearchSvg from "../../icons/SearchSvg";

const SearchInput = (props) => {
  const {
    className,
    placeholder = 'Search note...',
  } = props
  
  const handleChangeInput = (e) => {
    console.log('текст', e.target.value)
  }

  return (
    <input 
    className={`todo__search ${className}`} 
    placeholder={placeholder} 
    onChange={handleChangeInput}
    ></input>
  )
};

export default SearchInput;
