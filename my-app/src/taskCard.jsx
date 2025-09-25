
function TaskCard(props){
    return(
        <div>
            <h4>Title : {props.title}</h4>
            <p>{props.description}</p>
            <img src={props.img} alt="img" />

            <div>{props.children}</div> {/* Allows user to pass JSX/content inside <TaskCard>...</TaskCard> */}
        </div>
    )
}// Every component automatically receives a special prop called children. It represents the content nested between a component's opening and closing tags.

export default TaskCard