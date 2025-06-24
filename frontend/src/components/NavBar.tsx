import { ModeToggle } from "./ModeToggle"

const NavBar = ()=>{
    return(
        <div className="p-3  flex justify-between  bg-zinc-800x  text-4xl ">
            

           <div>
            ChessByte
           </div>
           <div className="flex items-center">
            <ModeToggle/>
           </div>
            
        </div>
    )

}

export default NavBar