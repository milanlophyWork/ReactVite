function Food(){
    const food1 = "Apple"
    const food2 = "Orange" // js written inside return require {}

    return(
        <ul>
            <li>Banana</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}
export default Food