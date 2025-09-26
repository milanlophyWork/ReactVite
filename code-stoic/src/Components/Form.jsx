import { useState } from "react"

export default function Form(){

    const [name, setName] = useState('')
    const a = [1,2,3,4,5]
    const sum = a.reduce((acc, curr)=> acc + curr, 0)
    console.log(sum)
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