

function Greet(props){
    console.log(props)
    // props.name = "Jake"   // !!! Immutability of props : props are immutable. ie the values of props cannot be changed. Because values of props are read-only. They cannot be assigned.

    return <h3>{props.greet} {props.name}</h3> // props actually is an obj and obj cannot directly rendered inside a react component. name we passed as prop is a property in props obj.
}// Regular fns accept parameters and components accept props

export default Greet

export function Greet2({greet, name, seatNumbers}){ // destructuring is a javascript feature that lets you extract specific values from an object (or array) . Can be done in 2 ways : in fn parameters and in fn body
    // greet = "hi" // here not mutating the props. {greet,name} actually destructures props into local variables. Changing props reassigns local variable , it does not modify props.

    // const {greet, name} = props // or destructuring can be done like this after passing props as parameter
    return (
        <h3>{greet} {name} {seatNumbers}</h3>
    )
} // we can pass any kind of data (string, array, objects, fns, components itself) to props.

export function Greet3(props){
    return(
        <div>
            <h3>{props.person.name} {props.person.message} {props.person.seatNumbers}</h3>
        </div>
    )
}

export function Greet4({person}){
    return (
        <div>
            <h3>{person.message} {person.name} {person.seatNumbers}</h3>
        </div>
    )
}
