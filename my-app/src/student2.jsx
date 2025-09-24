import PropTypes from "prop-types"

function Student2({name = "Guest", age = 0, isStudent = false}){ // Setting default props
    return(
        <div className="student">
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Student : {isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student2.PropTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}
export default Student2