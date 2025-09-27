import { useState } from "react"

export default function Form(){ // Handling an input field in react

    const [name, setName] = useState('')

    function handleChange(e){
        setName(e.target.value) // entered key get stored in name variable
        // console.log('attempting to change the value')
    }

    return( // on adding a value prop to an <input>, the input becomes a controlled component. ie react controls the value. The hard coded firstname in value gets locked as input. we can't change. We need to use state (as state stores component data) to store and update the input's value.
        <div>
            <form>
                {/* <input onChange={(e)=> handleChange(e)} type="text" value = {name}></input> {/* we could update the value directly instead of using handleChange fn  */}
                <input onChange={e => setName(e.target.value)} type="text" value = {name}/>
            </form>
        </div>
    )
}

export function Form2(){ // Handling multiple inputs in react

    const [name, setName] = useState({firstName : '', lastName : ''})

    /* const a = [1,2,3]
    const b = [...a, 4,5]
    console.log(b) // In b, we append new values to values in a. Same happens on using ...name */

    return(
        <div>
            <form>
                <input 
                    // onChange={e => setName(e.target.value)} // it replaces whole name object with  just a string
                    onChange={e => setName({firstName : e.target.value, lastName : ''})}  // replacing each property of object separately. But it creates a new object (with firstName and lastName) every time we type in the input bar. 
                    type="text" 
                    value = {name.firstName}
                    placeholder = "firstName" 
                />
                <input onChange={e => setName({firstName : '', lastName : e.target.value})} type="text" value={name.lastName} placeholder= "lastName"/>  {/* On typing lastName, firstName disappears and vice versa. As we set empty string on updating each of them. To solve use spread operator. ('...name' preserves whatever value name holds. */}

                <p>Using spread operator :</p>
                <input onChange={e => setName({...name, firstName : e.target.value})} type="text" value={name.firstName}/> {/* Values preserved using spread operator: we are appending the new value to current value in name object. */}
                <input onChange={e => setName({...name, lastName : e.target.value})} type="text" value={name.lastName}/>

            </form>
        </div>
    )
}

// Final form
export function Form3(){ // Handling form submission in react
    const [name, setName] = useState({firstName : '', lastName : ''})

    function clickHandler(e){
        e.preventDefault() // prevent default behaviour of refreshing the page
        console.log(name)
    }
    return(
        <div>
            <form>
                <input onChange={e => setName({...name, firstName : e.target.value})} type="text" value={name.firstName} placeholder="First name" />
                <input onChange={e => setName({...name, lastName : e.target.value})} type="text" value={name.lastName} placeholder="Last name" />

                <button onClick={e => clickHandler(e)}>Add</button> {/* Whenever we click a button inside form, the form gets submitted (page refreshes) and the data stored in state is lost. So we need to prevent the default behaviour */}
            </form>
        </div>
    )
}