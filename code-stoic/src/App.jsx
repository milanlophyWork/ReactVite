
import './App.css'

import Hello from './Components/Hello'
import Card from './Components/Card'
import ReactLogo from './assets/react.svg'
import Greet, { Greet2, Greet3, Greet4 } from './Components/Greet'
import Fruits , {Fruits2} from './Components/Fruits'

function App() {

  // const seatNumbers = [4, 6, 3, 2] // Passing array as obj
  const person = {
    name : "Rob",
    message : "Hi there!",
    seatNumbers : [1, 4, 7]
  }
  return (
    <div> {/* Use capitals for starting letter of components to distinguish between html tags and components  */}

      {/* <Hello></Hello> */} {/*Components : building blocks of react */}
      {/* <Hello/> */} {/* Reusing components : now this component is static as always display hello to robin. */}

      {/* <Greet name="Milan" greet="Hi"/> */} {/* Props or properties : values passed to components to make them dynamic */}
      {/* <Greet greet="Hello" name = "Helan"/> */} {/* passed like we pass properties inside html tags */}
      {/* <Greet greet = "Good morning" name = "Heaven"/> */}

      {/* <Greet2 name="Milan" greet ="Hi"/> */} {/* Destructuring props */}

      {/* 
        <Card title = "React" description = "Welcome to React" img={ReactLogo}>
          <p>React is an open-source js library used to build user interfaces especially for single page applications (SPAs). It focuses on view layer 
            (The 'V' in MVC - Model View Controller). ie it handles how things look and update in the browser.</p>

          <button>Learn more</button>
        </Card> */} {/* Task : create reusable card component */}

      {/* <Greet greet ="Hi"/> */} {/* Immutability of props : Name mutated to "Jake" return error that props are read only hence cannot assigned a value. */}
      {/* <Greet2 name = "Milan"/> */}

      {/* <Greet2 
        name = "Heaven" 
        greet = "Hi" 
        seatNumbers={seatNumbers}
      /> */} {/* Passing array to components using props */}

      {/* <Greet3 person = {person}/> */} {/* Passing objects to components using props without destructuring */}
      {/* <Greet4 person = {person}/> */} {/* Passing objects to components using props with destructuring */}

      {/* <Fruits/> */} {/* Rendering arrays of strings :  ie Mapping through a given array */}
      {/* <Fruits2/> */} {/* Rendering array of objects */}
      {/* Rendering component itself */}

    </div>
  ) 
}

export default App
// To open simple browser in vs code : Copy localhost url open command palette (ctrl + shift + p) type 'simple browser' then enter and paste the url.
// To have it side by side press ctrl + \ then drag and drop browser tab to right.