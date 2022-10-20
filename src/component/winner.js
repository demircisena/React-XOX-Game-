
   const lines =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    export default lines;
//   for(let i=0 ; i<lines.length; i++){
//     const [a,b,c]=lines[i]
    
//         if(board[a] !== null && board[a] === board[b] && board[a] === board[c]){
//             return board[a];
//         }
    
// }
// return null

// lines.forEach((line)=>{
//     const firstplayer= board[line[0]]
//     let isline=true;
//     line.forEach((idx)=>{
//         if(idx != firstplayer){
//             isline=false;
//         }
//     })
//     if(isline){
//         setWinner(turn)
//     }
// })
