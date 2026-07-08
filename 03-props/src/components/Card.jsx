// const Card = () => {
//    return(
    
//     <div className = "card">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUmRyWIGFaEwnciDv-qVsNPQDzU3LLZm6a9hAinDR7w&s=10"  />
//         <h1>Shaeeb Ali Khan</h1>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, voluptatibus.</p>
//         <button>View Profile</button>
//     </div>
    
//    )
// }

// props means properties

const Card = (props) => {
    console.log(props);
    console.log(props.user, props.age);
     
   return(
    <div className = "card">
        <img src={props.img} />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, voluptatibus.</p>
        <button>View Profile</button>
    </div>
    
   )
}
export default Card
