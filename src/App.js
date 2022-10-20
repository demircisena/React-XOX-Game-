import Board from "./component/board";
import {useState} from "react";
import Box from "./component/box";
import'../src/App.css'

function App() {

  // const [board,setBoard]=useState(Array(9).fill(null));

  //     const handleChange=(index)=>{
  //        const newBoard= board.map((value,i)=>{
  //         if(index===i){return "X"}
  //         else{return value;}
  //        })
  //       setBoard(newBoard);
  //       // setTurn(turn ==="X" ? "O" : "X")
       
  //   }


  return (
    <div className="App">
      <Board />

      
   
      
    </div>
  );
}



// const [board,setBoard]=useState(["","","","","","","","",""])
// const [turn,setTurn]=useState("X");


// const handleChange = (box)=>{
//     setBoard(board.map((val,idx)=>{
//         if(idx == box && val == ""){
//             return turn;
//         };
//         return val;
        
//     }));
//     if(turn =="X"){
//         setTurn("O")
//     }else {
//         setTurn("X")
//     }
  
// };



// return(
//     <div>
//         <h1 className="h1">{`${turn} to Play`}</h1>
//         <div className="Game" >
//             <div className="Board">
             
//                <Box val={board[0]} handleChange={()=>{handleChange(0)}}/>
//                <Box val={board[1]} handleChange={()=>{handleChange(1)}}/>
//                <Box val={board[2]} handleChange={()=>{handleChange(2)}}/>
//             </div>
//             <div className="Board">
//             <Box val={board[3]} handleChange={()=>{handleChange(3)}}/>
//             <Box val={board[4]} handleChange={()=>{handleChange(4)}}/>
//             <Box val={board[5]} handleChange={()=>{handleChange(5)}}/>

//             </div>
//             <div className="Board">
//             <Box val={board[6]} handleChange={()=>{handleChange(6)}}/>
//             <Box val={board[7]} handleChange={()=>{handleChange(7)}}/>
//             <Box val={board[8]} handleChange={()=>{handleChange(8)}}/>

//             </div>
//             {/* <>
//             <button type="reset" onClick={handleReset}>RESET</button>
//             </> */}
//         </div>
//     </div>
// )
// }

export default App;
