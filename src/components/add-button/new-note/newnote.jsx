import './newnote.css'

const NewNote = () => {
  return (
    <div className="todo__newnote">
      <div className='todo__newnote-top'>
      <h1 className="todo__newnote-title">New Note</h1>
      <input className="todo__newnote-input" placeholder="Input your note..." type="text"></input>
      </div>
      <div className="todo__newnote-bottom">
        <button className="todo__newnote-button button-cancel">
          Cancel
        </button>
        <button className="todo__newnote-button button-apply">
          Apply
        </button>
      </div>
    </div>
  )
}

export default NewNote

