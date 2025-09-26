import { useState } from "react"

export default function Counter(){ // state in react using useState hook
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }
    return(
        <div>
            <div>{count}</div>
            
            <p><button onClick={increment}>Increment</button></p>
            <p><button onClick={decrement}>Decrement</button></p>
        </div>
    )
}

export function Counter2(){ // creating multiple states in react
    const [count, setCount] = useState(0)
    const [incrementBy, setIncrementBy] = useState(1)

    function increment(){
        setCount(count + incrementBy)
    }
    function decrement(){
        setCount(count - incrementBy)
    }
    function increaseIncrement(){
        setIncrementBy(incrementBy + 1)
    }
    function decreaseIncrement(){
        setIncrementBy(incrementBy - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <div>
                <h3>We are changing the value by {incrementBy}</h3>

                <button onClick={increaseIncrement}>increase Increment</button>
                <button onClick={decreaseIncrement}>decrease Increment</button>
            </div>
        </div>
    )
}



{/* 
    state in react is used to handle component data that can change over time. Props are immutable. Data 
    inside prop passed from parent cannot be changed by the child component. 

    state holds data that can be changed using setter fn (setState or setX). state holds info 
    which controls behaviour of a component. 
    
    state vs props :
     - props are passed from parent to the child component. State is contained inside the component itself.
     - props are read only (immutable). states can be changed.
     - props are like parameters passed to a function. state is like a variable declared in function body.
    
    useState is the hook we use to create a state. Hook is a special fn that lets you use react features 
    without having to use cls. React automatically re-renders the component when state changes (only that 
    component not the whole app).
    
    In class components state was always an obj. In fnal components state can be of any type. State should 
    be changed only via setter fn or updater fn.
*/}