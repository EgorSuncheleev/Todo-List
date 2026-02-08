import '../add-button/add.css'
import SvgAdd from './add-svg'
import NewNote from './new-note/newnote'

const Add = () => {
  return (
    <div className='add__box'>
    <button className='add'>
      <SvgAdd />
    </button>
    <NewNote />
    </div>
  )
}

export default Add