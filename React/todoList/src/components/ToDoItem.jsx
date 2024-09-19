
function ToDoItem(props) {
    return (
        <ul>
            {props.items.map((item, index) => (
                <li 
                    className="list-disc ml-10" 
                    key={index}
                    onClick={() => {
                        props.onChecked(index)
                    }}
                    >
                        {item}
                </li>
            ))}
        </ul>
    )
}

export default ToDoItem
