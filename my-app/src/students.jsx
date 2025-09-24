import PropTypes from 'prop-types'

// Props = read only properties that are shared between components. A parent component can send data to a child component. <Component key=value />

function Student(props){ 
    return(
        <div className= "student">
            <p>Name : {props.name} </p>
            <p>age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p> 
        </div>// For boolean values to be displayed, use condition [ternary operator]
    )
} 

// propTypes = a mechanism that ensures that the passed value is of correct datatype. Eg=> age : PropTypes.number
Student.propTypes = { // setting types of props. Gives warning in console if different datatype inserted. Don't stop application from running.
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}

// default props = default values for props in case they are not passed from the parent component Eg: name: Guest
/*
Student.defaultProps = { // In modern react, instead of defaultProps you can also use default fn parameters. Because react depricated this usage of defaultProps. ie it is old way. new way : passed as fn parameters [check student2.jsx]  
    name: "Guest",
    age : 0,
    isStudent : false
}
*/
export default Student