/*
 import './App.css'
 import Header from './header.jsx'
 import Footer from './footer.jsx'
 import Food from './food.jsx' 

*/

// import Card from './card.jsx'
import Button from './button.jsx'

function App() {// React is all about reusing components. A component is a small section of reusable jsx code. It is HTML like code that can contain javaScript.

  return( // return can only return one element so for multiple elements wrap them in a div or fragment element =>  <>  </>
    <div>
      {/* <Header></Header>
      <Food/>
      <Footer/> */} {/* Fnal components */}

      {/* <Card/>
      <Card/>
      <Card/> */} {/* Card components */}

      <Button/> {/* Styling react components with css : External , Modules , Inline */}
    </div>
  )
}

export default App
