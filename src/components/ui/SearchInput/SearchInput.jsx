import "./SearchInput.css";
import SearchSvg from "../../icons/SearchSvg";

const SearchInput = (props) => {
  const {
    className,
    placeholder = 'Search note...'
  } = props

  return (
    <input className={`todo__search ${className}`} placeholder={placeholder}></input>
  )
};

export default SearchInput;
