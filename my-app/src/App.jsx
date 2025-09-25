/*
 import './App.css'
 import Header from './header.jsx'
 import Footer from './footer.jsx'
 import Food from './food.jsx' 

*/

// Brocode cls

// import Card from './card.jsx' 
// import Button from './Button/button'
// import Student from "./students"
// import Student2 from "./student2"
// import UserGreeting from "./userGreeting"
// import List from "./list"
import TaskCard from "./taskCard"
// import reactLogo from "./assets/react.svg"


function App() {// React is all about reusing components. A component is a small section of reusable jsx code. It is HTML like code that can contain javaScript.

  return( // return can only return one element so for multiple elements wrap them in a div or fragment element =>  <>  </>
    <div className = "App">
      {/* <Header></Header>
      <Food/>
      <Footer/> */} {/* Fnal components */}

      {/* <Card/>
      <Card/>
      <Card/> */} {/* Card components */}

      {/* <Button/> */} {/* Styling react components with css : External , Modules , Inline */}

      {/* <Student name = "Milan" age = {21}/> 
      <Student name = "Helan" age = {20}/>
      <Student name = "Heaven" age = {14} isStudent= {true}/> 
      <Student/> */} {/* props */}
 
      {/* <Student2 name="Riya" age = "30" isStudent = {true}/> 
      <Student2/>
      <Student2 name = "Lara"/> */} {/* Using default props in modern way */}

      {/* <UserGreeting isLoggedIn = {true} username = "Milan" /> 
      <UserGreeting isLoggedIn = {true}/> */} {/* Conditional Rendering */}

      {/* <List/> */} {/* rendering list */}

      {/* <TaskCard title = "React" description = "Welcome to react" img = {reactLogo}>
        <p>React is an open-source js library used to build user interfaces especially for single page applications (SPAs). It focuses on view layer (The 'V' in MVC - Model View Controller).
          ie it handles how things look and update in the browser.
        </p>
        <button>Learn More</button>  
      </TaskCard>  */}


    </div>
  )
}

export default App
// To open simple browser in vs code : Copy localhost url open command palette (ctrl + shift + p) type 'simple browser' then enter and paste the url.
// To have it side by side press ctrl + \ then drag and drop browser tab to right.