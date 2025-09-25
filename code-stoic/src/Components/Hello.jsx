// Components in react are just js fns that return jsx

const name  = "Robin"

function displayMsg(){
    return "Wow"
}
function Hello(){ // jsx should be wrapped in a single root element
    return (
        <div>
            <h2>Hello {name}!</h2>
            <p>{10 + 30} {displayMsg()}</p>
        </div>
    )
}// Inside jsx, js is written within curly braces. name is js, 10+30 is js expression, then calling a fn
export default Hello 

/* 
    Why Components ?

    1. Components used for modularity of code. Each component acts like a module and it is much easier to organize, manage and debug each module 
       instead of entire application. 

    2. Components are reusable. It can be reused anywhere in the code. 
    
    3. Testing. Each single components can be tested one by one. If not that particular component needs to be corrected 
       not the entire application.

    4. Multiple developers can work on different components at same time
    5. Abstraction. Hiding the details.
*/