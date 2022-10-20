import React from "react";
import Board from "./board";


function Box({handleChange,val
}){
    
    return(
        <div>
            <div onClick={handleChange} className="box">{val}</div>
        </div>
    )
}
export default Box;