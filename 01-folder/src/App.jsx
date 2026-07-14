// parent is main.jsx

// function App(){
//   //return 'Hello'
//   return <h1>MERN STACK</h1> // we write html code in jsx
// }
// export default App

const App = () =>{
  return(
    //use instead of <div>
    <>                 
    <div id ='parent'>
      <h1 id='child1'>Hello</h1>
      <h2 id='child2'>Hi</h2>
    </div>
    <div id="chach"></div>
    </>
  )
}

export default App
