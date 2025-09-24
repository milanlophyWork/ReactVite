import PropTypes from 'prop-types'

// Conditional rendering allows you to control what gets rendered in your application based on certain conditions (show, hide, or change components)
function UserGreeting({isLoggedIn = false, username = "Guest"}){ // default props setting
    
    /* if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    return <h2>Please log in to continue</h2> // else not necessary */
 
    const welcomeMsg = <h2 className="welcome-msg">
                        Welcome {username}
                       </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please log into continue
                        </h2>
    
    return (isLoggedIn ? welcomeMsg : loginPrompt) // Or use ternary operator instead of if else
}

UserGreeting.PropTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string 
}

export default UserGreeting