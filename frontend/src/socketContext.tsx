import {
    createContext,
    useContext,
    useRef,
    useState,
    useCallback,
  } from "react";
  import { useDispatch } from "react-redux";
  import { setGameConnected, setPgn, setColor } from "@/store/ChessGameSlice";
  
  // Create a context for both the socket and the startGame function
  type SocketContextType = {
    socket: WebSocket | null;
    startGame: () => void;
  };
  
  const SocketContext = createContext<SocketContextType>({
    socket: null,
    startGame: () => {},
  });
  
  export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const socketRef = useRef<WebSocket | null>(null);
    const dispatch = useDispatch();
    const [, forceRender] = useState({}); // to re-render context value if needed
  
    const startGame = useCallback(() => {
      if (socketRef.current) {
        console.log("Socket already initialized");
        return;
      }
  
    //   const socket = new WebSocket("ws://localhost:8080");
    //   http://192.168.3.115:5173/
    const socket = new WebSocket("ws://192.168.3.115:8080");
      socketRef.current = socket;
  
      socket.onopen = () => {
        dispatch(setGameConnected(true));
        socket.send(JSON.stringify({ type: "init_game" }));
      };
  
      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.type === "init_game") {
          dispatch(setColor(message.payload.color));
        } else if (message.type === "move") {
          dispatch(setPgn(message.board));
        }
      };
  
      socket.onclose = () => {
        dispatch(setGameConnected(false));
        socketRef.current = null; // allow reconnection
      };
  
      // Force re-render to update context value with socket
      forceRender({});
    }, [dispatch]);
  
    return (
      <SocketContext.Provider value={{ socket: socketRef.current, startGame }}>
        {children}
      </SocketContext.Provider>
    );
  };
  
  export const useSocket = () => useContext(SocketContext);
  