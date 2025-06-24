import Board from "./components/Board"
import NavBar from "./components/NavBar"
import { Button } from "./components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"

const App = ()=>{
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="p-5">
      <NavBar/>
      <br />
      {/* <hr /> */}
      <Board/>
<br />
      <Button className=" w-full p-7 text-xl">Click to Play</Button>
    </div>
    </ThemeProvider>

  )
}

export default App