function Card(){
    return( // class is a reserved word in jsx so use className instead
        <div className = "card"> 
            <img className="card-img" src= "https://via.placeholder.com/150" alt="profile pic"></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I am learning</p>
        </div>
    )
}

export default Card