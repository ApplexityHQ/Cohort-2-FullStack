import { useState } from "react"

function App() {
  const [firstTitle, setFirstTitle] = useState("my name is applexity");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <Header title="My name is raman" />
    </div>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App





















// function App() {
//   return (
//     <div>
//       <Header title="applexity1"></Header>
//       <Header title="applexity2"></Header>
//     </div>
//   )
// }


// function Header({title}) { //object de-structuring
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }



// export default App



