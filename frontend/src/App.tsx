import Board from "./components/Board"
import NavBar from "./components/NavBar"
import { Button } from "./components/ui/button"


const App = ()=>{
  return (
    <div className="p-5">
      <NavBar/>
      <br />
      {/* <hr /> */}
      <Board/>
<br />
      <Button className=" w-full p-7 text-xl">Click to Play</Button>
    </div>
  )
}

export default App