import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import Box from "./box";
import lines from "./winner";
function Board (){
    const [turn,setTurn]=useState("X");
    const [board,setBoard]=useState(["","","","","","","","",""]);
    const [winner,setWinner]=useState({won:"none"});
    const [highlighted,setHighlighted]=useState(null);
    
   useEffect(()=>{
    checkWinner();
    if(turn =="X"){
        setTurn("O")
    }else {
        setTurn("X")
    }
   },[board]) 
   
   useEffect(()=>{
    if(winner.won != "none"){
        alert(` won ${winner.won}`)
    }
    
   },[winner])

    const handleChange = (box)=>{
        setBoard(board.map((val,idx)=>{
            if(idx == box && val == ""){
                return turn;
            };
            return val;
            
        }));
        // useEffectin içine aldık çünkü kazanan alerti hata veriyordu bir sonraki oyuncuyu gösteriyordu
        // if(turn =="X"){
        //     setTurn("O")
        // }else {
        //     setTurn("X")
        // }
    };


 
    const handleReset= () => {
        setTurn("X")
        setBoard(Array(9).fill(""));
        
      };
      const checkWinner= ()=>{
        lines.forEach((line)=>{
        const firstplayer= board[line[0]];
        if(firstplayer == "")return;
        let isline=true;
        line.forEach((idx)=>{
            if(board[idx ]!= firstplayer){
                isline=false;
            }
        })
        if(isline){
            setWinner({won:turn});
            
        }
    })
}

    return(
        <div>
            <h1 className="h1">{`${turn} to Play`}</h1>
            <div className="Game" >
                <div className="Board">
                 
                   <Box val={board[0]} handleChange={()=>{handleChange(0)}}/>
                   <Box val={board[1]} handleChange={()=>{handleChange(1)}}/>
                   <Box val={board[2]} handleChange={()=>{handleChange(2)}}/>
                </div>
                <div className="Board" >
                <Box val={board[3]} handleChange={()=>{handleChange(3)}} />
                <Box val={board[4]} handleChange={()=>{handleChange(4)}}/>
                <Box val={board[5]} handleChange={()=>{handleChange(5)}}/>

                </div>
                <div className="Board">
                <Box val={board[6]} handleChange={()=>{handleChange(6)}}/>
                <Box val={board[7]} handleChange={()=>{handleChange(7)}}/>
                <Box val={board[8]} handleChange={()=>{handleChange(8)}}/>

                </div>
                <div className="reset">
                <button id="reset"  onClick={handleReset}>RESET</button>
                </div>
                
            </div>
            
        </div>
    )
}
export default Board;