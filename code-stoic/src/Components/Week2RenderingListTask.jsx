// Week 2 : Day 1 tasks
import { useState, useEffect } from "react"

export default function RenderList({arr}){
    return (
        arr.map(item => <li key={item}>{item}</li>)
    )
}

export function Log(){

    const [name, setName] = useState('')
    const [pswd, setPswd] = useState('')

    function handleLogin(e){
        e.preventDefault()
        console.log(isLogin ? 'Login Successful' : 'Sign Up Successful')
        setName('')
        setPswd('')
    }

    let isLogin = false
    let page = <form>
        <input type="text" placeholder="Name :" value={name} onChange={e=> setName(e.target.value)}/>
        <input type="password" placeholder="Password :" value={pswd} onChange={e=> setPswd(e.target.value)}/>

        {isLogin ? 
            <button onClick={e => handleLogin(e)}>Login</button> : 
            <button onClick={e => handleLogin(e)}>Sign up</button>}
    </form>

    return page
}

// Week 2: day 2 tasks
export function Registration(){

    const [value, setValue] = useState({name : '', email : '', password : ''})
    const [details, setDetails] = useState(null)

    function handleReg(e){
        e.preventDefault()
        setDetails(value)
    }
    return(
        <div>
            <form onSubmit={handleReg}>
                <input 
                    type="text" 
                    placeholder="Name : " 
                    value={value.name} 
                    onChange={e=> 
                        setValue({ ...value, name : e.target.value})}
                /> <br></br>
                <input 
                    type="email" 
                    placeholder="Email : " 
                    value={value.email} 
                    onChange={e => 
                        setValue({...value, email :e.target.value})}
                /> <br></br>

                {/* '...value' copies existing values into new obj. If not passed old data are lost  */}
                <input 
                    type="password" 
                    placeholder="Password : " 
                    value={value.password} 
                    onChange={e => 
                        setValue({...value, password :e.target.value})}
                /> 
                <br></br> <br></br> 

                <button type="submit">Submit</button>
            </form>

            {
                details && <div>
                    <h2>Submitted details</h2>
                    <p>{details.name}</p>
                    <p>{details.email}</p>
                    <p>{details.password}</p>
                </div>
            }
        </div>
    )
}

export function StatesOfUI(){
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(()=> {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=5') 
        .then(res => res.json())
        .then(data => {
            setPokemon(data.results)
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    },[])

    if(loading) return <div>Loading...</div> // loading state : while fetching occurs
    if(error) return <div>Error: {error}</div> // state of error: if fetch fails

    if(pokemon.length === 0) return <div>No pokemon found</div> // empty state : if request suceeds but there is no data (pokemon.length===0)

    // success state : when data is available and shown
    return(
        <div>
            <h2>Pokemons</h2>
            <ul>
                {pokemon.map(item => <li key={item.name}>{item.name}</li>)} 
            </ul>
        </div>
    )
}