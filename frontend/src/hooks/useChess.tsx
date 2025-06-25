import { Chess } from "chess.js"
import { useEffect, useState } from "react"



const useChess = (pgn:string) => {
    const [chess,setChess] =  useState<Chess>(new Chess())

    // console.log(chess.ascii())

    useEffect(()=>{
        const ci = new Chess()
        ci.loadPgn(pgn)
        setChess(ci)

    },[pgn])

    return chess

}

export default useChess