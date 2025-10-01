// Week 2 : Rendering lists using maps and filter

const people = [ // first: move data into an array
    'Creola Katherine Johnson : mathematician',
    'Mario Jose Pasquel : chemist',
    'Percy Lavon Julian : chemist',
    'Subrahmanyan Chandrasekhar : astrophysicist' 
]

export default function List(){
    const listItems = people.map(person => <li>{person}</li>)// second: map people members into a new array of JSX nodes (listItems)
    return <ul>{listItems}</ul> // third: return the listItems wrapped in a <ul> 
}

// filtering array of items

const people2 = [
    {
        id : 0,
        name : 'Creola Katherine Johnson',
        profession : 'mathematician'
    },
    {
        id : 1,
        name : 'Mario Jose Pasquel',
        profession : 'chemist',
    },
    {
        id : 2,
        name : 'Percy Lavon Julian',
        profession : 'chemist'
    },
    {
        id : 3,
        name : 'Subrahmanyan Chandrasekahr',
        profession : 'astrophycist'
    }
]

const chemists = people2.filter(person => person.profession === 'chemist')

export function List2(){
    const listItems = chemists.map(item => <li>
        <p>
            <b>{item.name} : </b>
            {item.profession}
        </p>
    </li>)
    return <ul>{listItems}</ul>
}

// warning : Each child in a list should have a unique 'key' prop : To uniquely identify each item in array

// Keeping list items with key

const people3 = [
    {
        id : 0,
        name : 'Creola Katherine Johnson',
        profession : 'mathematician',
        accomplishment : 'spaceflight calculations'
    },
    {
        id : 1,
        name : 'Mario Jose Pasquel',
        profession : 'chemist',
        accomplishment : 'discovery of Artic ozone hole'
    },
    {
        id : 2,
        name : 'Percy Lavon julian',
        profession : 'chemist',
        accomplishment : 'pioneering cortisone drugs, steroids and birth control pills'
    },
    {
        id : 3,
        name : 'Subrahmanyan Chandrasekhar',
        profession : 'astrophysicist',
        accomplishment : 'white dwarf star mass calculations'
    }
]

export function List3(){
    const listItems = people3.map(person => <li key={person.id}>
       
            <b>{person.name} : </b>
            <p>{person.profession} known for {person.accomplishment}</p>
    
    </li>)

    return <ul>{listItems}</ul>
} // For locally generated data use crypto.randomUUID() for unique id. 

/* Notes : don't use item's index as key as it may lead to confusions on inserting and deleting items in array.
   
   Do not generate keys on the fly (while rendering, in motion) eg: with key = { Math.random() }. Cause keys to 
   never match up between renders as it leads to recreation of components every time. Use a stable key.

   Components won't receive key as prop. React just use it for identifying each item uniquely. If we want to use id 
   pass it as a separate prop : <List3 key={id} userId = {id}/>
*/

export function List4(){
    const chemists = people3.filter(person => person.profession === 'chemist')
    const others = people3.filter(person => person.profession !== 'chemist')
    return(
        <div>
            <ul>
                {
                    chemists.map(person => 
                        <li key={person.id}>
                            <b>{person.name} : </b>
                            {person.profession}
                        </li>
                    )
                } 
                {
                    others.map(person => 
                        <li key={person.id}>
                            <b>{person.name} : </b>
                            {person.profession}
                        </li>
                    )
                }    
            </ul>   
        </div>
    )
}

export const recipes =[
    {
        id: 'greek-salad',
        name: 'Greek Salad',
        ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
    },
    {
        id: 'hawaiian-pizza',
        name: 'Hawaiian Pizza',
        ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
    },
    {
        id: 'hummus',
        name: 'Hummus',
        ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
    }
]

export function List5(){
    return(
        <div>
            <h2>Recipes</h2>
            {recipes.map(item=> <div key={item.id}>
                <h2>{item.name}</h2>

                <ul>
                    {item.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </ul>
            </div>
            )}
        </div>
    )
}
// Avoiding 2 nested maps
function Recipe({id, name, ingredients}){
   return(
        <div>
            <h3>{name}</h3>

            <ul>
                {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </div>
   )
}
export function RecipeList(){
    return(
        <div>
            <h2>Recipes</h2>
            {recipes.map(recipe => <Recipe {...recipe} key={recipe.id}/>)}
        </div>
    )
}

// List with a separator
const poem = {
    lines : [
        'I write, erase, rewrite',
        'erase again, and then',
        'A poppy blooms.'
    ]
}
export function Separator(){
    return(
        <div>
            {poem.lines.map((line, i) => <div key={line}>
                {i>0 && <hr/>} {/* For every line except first one it insert a horizontal line before <p> */}
                <p>{line}</p>
                
            </div> )}
        </div> 
    )// i=0 -> i>0 false -> no <hr/> o/p => <p>  || i=1 -> i>0 true -> insert <hr> o/p => <hr/> <p> || i=2 -> i>0 true -> insert <hr/> o/p => <hr/> <p>
}