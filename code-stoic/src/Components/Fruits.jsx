export default function Fruits(){
    const fruits = ['Apple', 'Mango', 'Banana', 'Grape']

    return (
        <div>
            {fruits.map(fruit => <h4>{fruit}</h4>)}
            <ol>{fruits.map(fruit => <li key = {fruit}>{fruit}</li>)}</ol>  {/* Each child in a list should have a unique key */} 
        </div>
    )
}

export function Fruits2(){
    const fruits = [
        {id : 1, name : 'Apple', price : 15},
        {id : 2, name : 'Mango', price : 13},
        {id : 3, name : 'Banana', price : 10},
        {id : 4, name : 'Grape', price : 12}
    ]

    return(
        <div>
            <ol>
                {fruits.map(fruit => 
                              <li key = {fruit.id}>
                              {fruit.name} ${fruit.price}
                              </li>)}
            </ol>
        </div>
    )
}