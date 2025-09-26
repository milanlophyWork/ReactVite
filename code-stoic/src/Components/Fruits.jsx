import FruitComp, {FruitComp2, FruitComp3} from "./FruitComp"

export default function Fruits(){ // rendering array of strings
    const fruits = ['Apple', 'Mango', 'Banana', 'Grape']

    return (
        <div>
            {fruits.map(fruit => <h4>{fruit}</h4>)}
            <ol>{fruits.map(fruit => <li key = {fruit}>{fruit}</li>)}</ol>  {/* Each child in a list should have a unique key */} 
        </div>
    )
}

export function Fruits2(){ // rendering array of objects
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

export function Fruits3(){ // rendering component
    const fruits = [
        {id : 1, name : "Apple", price : 15},
        {id : 2, name : "Mango", price : 13},
        {id : 3, name : "Banana", price : 10},
        {id : 4, name : "Grape", price : 12}
    ]

    return(
        <div>
            <ul> {/* the FruitComp returns the li element */}
                {fruits.map(fruit => 
                    <FruitComp 
                        key ={fruit.id} 
                        name = {fruit.name} 
                        price = {fruit.price}
                    />
                )}
            </ul>
        </div>
    )
}


export function Fruits4(){// Conditionally rendering list items
    const fruits = [
        {id : 1, name : "Apple", price : 15},
        {id : 2, name : "Mango", price : 13},
        {id : 3, name : "Banana", price : 10},
        {id : 4, name : "Grape", price : 12}
    ]

    return(
        <div>
            <ul>
                {fruits.map(fruit => 
                    <FruitComp2 
                        key = {fruit.id}
                        name = {fruit.name} 
                        price = {fruit.price}
                    />
                )}
            </ul>
        </div>
    )
}

export function Fruits5(){
    const fruits = [
        {id : 1, name : 'Apple', price : 15, soldout : false},
        {id : 2, name : 'Mango', price : 13, soldout : false},
        {id : 3, name : 'Banana', price : 10, soldout : true},
        {id : 4, name : 'Grape', price : 12, soldout : true}
    ]

    return(
        <div>
            <ul>
                {fruits.map(fruit => 
                    <FruitComp3 
                        key = {fruit.id} 
                        name = {fruit.name} 
                        price = {fruit.price} 
                        soldout = {fruit.soldout}
                    />
                )}
            </ul>
        </div>
    )
}