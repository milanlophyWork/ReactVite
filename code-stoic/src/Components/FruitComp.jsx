
export default function FruitComp({name, price}){ 
    // Key is not a prop. If it is destructured undefined will be returned. React automatically uses the key returned in map for its purpose. No need to destructure it like we did for name, price
    return <li>{name} ${price}</li>
}

export function FruitComp2({name, price}){
     return (
        <>
            {
                price > 12 ? 
                 <li>{name} ${price} </li> : 
                 null 
            } 
        </>// used fragments '<> </>' instead of div. Because we have ul in parent comp so we need to return li instead of div. Fragments just groups everything. So inner tag is returned actually.
     )
    // return price > 12 ? <li>{name} ${price}</li> : <li>{name}: out of stock!</li>
}

export function FruitComp3({name, price, soldout}){
    return(
        <li>
            {name} ${price} {soldout ? "soldOut!" : null }
        </li>
    )
}