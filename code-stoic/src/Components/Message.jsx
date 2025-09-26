export default function Message(){
    
    function handleClick(){
        console.log('clicked')
    }

    return(
        <div>
            <button onClick={handleClick}>Click here</button>
        </div>
    ) // fn not called here as it is to be called after btn is clicked. If called, then handleClick runs immediately during render the page, not when clicked.
} 
