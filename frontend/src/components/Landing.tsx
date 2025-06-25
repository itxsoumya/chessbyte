
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-red-100x border-2 max-w-7xl mx-auto">
            <h1>Home</h1>

            {/* <Board/> */}
            <Button onClick={()=>navigate("/game")}>Click to play the Game</Button>
        </div>
    )
}

export default Landing