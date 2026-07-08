// if any variable inside the function write in {}
// import card from './components/Card.jsx'

import Card from "./components/Card.jsx"


// const App = () =>{
//   const user = "USER1"
//   return (
//   <div className="card">
//     <h1>Shaeeb Ali Khan</h1>
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, totam.</p>
//     <h2>Hello , I am user</h2>
//     <h2>Hello , I am {user}</h2>
//     <div>
//     <h3>Here import card components </h3>
//       {<Card/>}
//     </div>
//   </div>
//   )
// }

import Navbar from "./components/Navbar.jsx"
const App = () => {
  return(
    <div>
    <Navbar/>
    <Card/>
    </div>
  )
}
export default App
