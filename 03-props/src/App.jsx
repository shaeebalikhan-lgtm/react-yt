// const App = () => {
//    return(
//     <div className="parent">
//     <div className = "card">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUmRyWIGFaEwnciDv-qVsNPQDzU3LLZm6a9hAinDR7w&s=10"  />
//         <h1>Shaeeb Ali Khan</h1>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, voluptatibus.</p>
//         <button>View Profile</button>
//     </div>
//     <div className = "card">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUmRyWIGFaEwnciDv-qVsNPQDzU3LLZm6a9hAinDR7w&s=10"  />
//         <h1>Shaeeb Ali Khan</h1>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, voluptatibus.</p>
//         <button>View Profile</button>
//     </div>
//     </div>
//    )

import Card from "./components/Card"

// }
// const App = () => {
//   return(
//     <div className="parent">
//     <Card/> 
//     <Card/>
//      </div>
//   )
// }

const App = () => {
  return(
    <div className="parent">
    <Card user = 'Aman' age = {18} img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARK5GGkKlEbMpkmWzmbx8nTQqTaUh9epEt6ADREantA&s=10' /> 
    <Card user = 'Shaeeb' age = {28} img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10'/>
     </div>
  )
}
export default App