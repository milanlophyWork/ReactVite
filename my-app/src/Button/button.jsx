// import styles from './button.module.css'

function Button(){
    const styles = { // inline css
        backgroundColor : "hsl(200, 100%, 50%)", // in jsx use camelcase for keys and values must be a string.
        color : "white",
        padding : "10px 20px",
        borderRadius : "5px",
        border : "none",
        cursor : "pointer"
    }

    return(
        // <button className = "button">Click me</button> // applying external css stylesheet
        // <button className = {styles.button}>Click me</button> // applying dedicated css stylesheet
        <button style = {styles}>Click me</button> // applying inline css
    )
}
export default Button