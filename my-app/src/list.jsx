/*
function List(){ // render lists
    const fruits = ["Apple", "Orange", "Cherry", "Banana", "Coconut"]
    fruits.sort() // sorting fruits before rendering

    const listItems = fruits.map(fruit=> <li>{fruit}</li>) // converting array of strings to an array of list item elements
    return(
        <ol>{listItems}</ol>
    )
}
export default List 
*/

// converting array of strings to an array of objects. Each object will have a name property and calories

function List(){
    const fruits = [
        {id: 1, name : "Apple", calories : 95},
        {id: 2, name : "Orange", calories : 45},
        {id: 3, name : "Cherry", calories : 90},
        {id: 4, name : "Banana", calories : 105},
        {id: 5, name : "Coconut", calories : 37}
    ]

    // console.log("a".localeCompare("b")) //  -ve (calculated based on weights of characters ) => first element first. Here, a should be first according to alphabetical order. a has less weight (let 1) than b (let 2) // on comparing:  1<2 so return -ve

    // fruits.sort((a,b)=> a.name.localeCompare(b.name)) //sorting the items in our list. sort our array of objects by their name property. // Alphabetical order
    // fruits.sort((a,b)=> b.name.localeCompare(a.name)) // sorting reverse order // Reverse alphabetical order
    // fruits.sort((a,b)=> a.calories-b.calories) // sorting based on calories || -ve then first a || +ve then first b || 0 keep the order unchanged // Numeric order (ascending)
    // fruits.sort((a,b)=> b.calories-a.calories) // reverse numeric order (descending) // subtraction trick works because sort looks at the sign of the result to decide order

    const lowCalory = fruits.filter((fruit)=> fruit.calories < 90)
    // const lowCalory = fruits.reduce((acc,fruit)=> acc > fruit.calories ? fruit.calories : acc, fruits[0].calories)
    console.log(lowCalory)

    const listItems = fruits.map(fruit => <li key = {fruit.id}>
                                          {fruit.name}: &nbsp;
                                          <b>{fruit.calories}</b></li>) // Each child in a list should have a unique key prop , nbsp => non-breaking space character. It creates a space that the browser will not break across next line

    return (<ul>{listItems}</ul>)
}
export default List