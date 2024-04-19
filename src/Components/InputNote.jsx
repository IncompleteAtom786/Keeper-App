
function InputNote(props) 
{
    return <div className="inputNote">
        <input name="title" onChange={props.onChange} type="text" placeholder="Title" id="title"/>
        <input onChange={props.onChange} type="text" placeholder="Take a Note....." id="about" required/>
        <button id="add" onClick={props.onClick}>+</button>
    </div>
}

export default InputNote;