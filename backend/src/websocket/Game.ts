import WebSocket from "ws";
import { Chess } from "chess.js";
import { GAME_OVER, INIT_GAME,MOVE } from "./messages";


export class Game {
  public player1: WebSocket;
  public player2: WebSocket;
  public board: Chess;
  private startTime: Date;

  constructor(player1: WebSocket, player2: WebSocket) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Chess();

    this.startTime = new Date();

    this.player1.send(JSON.stringify({
        type:INIT_GAME,
        payload:{
            color:"white"
        }
    }))
    this.player2.send(JSON.stringify({
        type:INIT_GAME,
        payload:{
            color:"black"
        }
    }))
  }

  makeMove(
    socket: WebSocket,
    move: {
      from: string;
      to: string;
    }
  ) {
    // validatino
    // is it users move

    // if (this.board.moves.length % 2 === 0 && socket !== this.player1) {
    //   return;
    // }

    // if (this.board.moves.length % 2 === 1 && socket !== this.player2) {
    //   return;
    // }
    console.log(move)
    try {
      this.board.move(move);
      console.log('inside try block')
      console.log(this.board.ascii())
    } catch (e) {
        console.log(e)
        socket.send(JSON.stringify({
          "err":"invalid move"
        }))
      return;
    }
    // update
    // push the move

    // check if game is over

    if (this.board.isGameOver()) {
      this.player1.send(
        JSON.stringify({
          type: GAME_OVER,
          payload: {
            winner: this.board.turn() === "w" ? "black" : "white",
          },
        })
      );
      return;
    }

    // if (this.board.moves.length % 2 === 0) {
    //   this.player2.send(
    //     JSON.stringify({
    //       type: MOVE,
    //       payload: move,
    //     })
    //   );
    // } else {
    //   this.player1.send(
    //     JSON.stringify({
    //       type: MOVE,
    //       payload: move,
    //     })
    //   );
     if (socket===this.player1) {
      this.player2.send(
        JSON.stringify({
          type: MOVE,
          payload: move,
          board: this.board.pgn(),
        })
      );
    } else {
      this.player1.send(
        JSON.stringify({
          type: MOVE,
          payload: move,
          board: this.board.pgn(),
        })
      );
    }
    // send the updatd board to the both player
  }
}
// {
//   "type":"move",
//   "move":{
//       "from":"a2",
//       "to":"a3"
//   }
// }