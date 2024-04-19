
function Note(props)
{
        return <div className="note">
        <h2 className="title">{props.title}</h2>
        <p className="about">{props.about}</p>
        <p className="delete" onClick={ () => {
            props.onDelete(props.id)
        }}>
            DELETE
        </p>
    </div>
}

export default Note;