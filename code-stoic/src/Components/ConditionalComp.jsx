import Hello from "./Hello"
import Greet from "./Greet"

export default function ConditionalComp(){
    const display = false
    if(display){
        return (
            <div>
                <h3>This is a conditional component</h3>
            </div>
        )
    }
    return <h3>Code everyday!</h3> // this will auti=omatically be the else statement
}

export function ConditionalComp2(){
    const display = true

    if(display){ // problem in rendering components like this is that it's not good to have multiple return statements inside fn.
        return <Greet greet= "hi" name="milan" />
    }else{
        return <Hello/>
    }
}   

// Element variables helps us to avoid multiple return statements. Element variables are variables that store html elements
export function ConditionalComp3(){
    let msg 
    const display = true

    if(display) {
        msg = <h3>This is message 1</h3>
    }else{
        msg = <h3>This is message 2</h3>
    }
    return msg
}

// with ternary operators
export function ConditionalComp4(){
    const display = false

    return display ? <h3>This is message 1</h3> : <Greet greet = "Hello" name= "Milan"/>
}