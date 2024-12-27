import React,{useState} from 'react'
import Square from './Square'

function Box() {
  const [state,setState] = useState(Array(9).fill(""))
  const [isXTurn,setIsXTurn] = useState(true)

  const handleReset = ()=> {              //play again code
    setState(Array(9).fill(""))
  }
 // Check for a winner
  const checkWinner = ()=>{
    const winnerLogic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    
    for (const logic of winnerLogic) {
      const [a,b,c]= logic;
      if(state[a]!== "" && state[a]=== state[b] && state[a]=== state[c])
        return state[a]   // Return the winner ("X" or "O")
    };

    // Check for a tie if no winner is found
    if (state.every(cell => cell!=="")){
      return "tie";   // Return "tie" if no winner and all cells are filled
    }

    return false;
   }

   const result = checkWinner();           // game result - winner or tie

  const handleClick = (index)=>{
    // console.log("clicked at square",index);

    if(state[index]!== "" ){                  //prevent 2nd time state change in one square 
      return;
    }
    const copyState = [...state]              // updating state from "" to X or 0 
    copyState[index]= isXTurn?"X":"0";
    setState(copyState);
    setIsXTurn(!isXTurn);                       // turn change code
  }

  return (
    <>
      <div className='box'>
                                              
        {result?                                 //ternary operator is used to render result 
          (<> <center> {result==="tie"?

            (<h1 style={{color:'teal'}}>Its a Tie Game</h1>): 
            ( <h1 style={{color:'yellowgreen'}}>{result} won the game </h1>)}<button onClick = {handleReset}> Play again </button> </center> </>) :

         (<><center> <h2 style={{color:'blueviolet'}}> {isXTurn?"X":"0"}'s Turn </h2> 
            <div className="box-row">
              
              <Square onClick={()=>handleClick(0)} value={state[0]}/>
              <Square onClick={()=>handleClick(1)} value={state[1]}/>
              <Square onClick={()=>handleClick(2)} value={state[2]}/>
            </div> 
            <div className="box-row">
                <Square onClick={()=>handleClick(3)} value={state[3]}/>
                <Square onClick={()=>handleClick(4)} value={state[4]}/>
                <Square onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className="box-row">
                <Square onClick={()=>handleClick(6)} value={state[6]}/>
                <Square onClick={()=>handleClick(7)} value={state[7]}/>
                <Square onClick={()=>handleClick(8)} value={state[8]}/>
            </div> </center> </>)}
              
      </div>
    </>
  )
}

export default Box