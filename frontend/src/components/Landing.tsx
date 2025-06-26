
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-red-100x border-2x max-w-7xl mx-auto min-h-[70vh] flex flex-col justify-center items-center  ">
            
            <div className="flex flex-col justify-center items-center gap-2">
                <img src="https://media.lordicon.com/icons/wired/flat/1476-chess-king.gif" alt="" />
            <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent max-sm:text-2xl"> 
                This Page Is Under Dev 
            </p>

            {/* <Board/> */}
            <Button variant={"outline"} className="w-full h-18 " onClick={()=>navigate("/game")}>Click to play the Game</Button>
            </div>
        </div>
    )
}

export default Landing