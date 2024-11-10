import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import Toolbox from "./components/Toolbox";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/ToolboxProvider";
import Card from "./components/card/Card";
import { useState } from "react";

const x=false;




function App() {
  // const x=useState(window.innerWidth);
  if(!(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent))){
    return (
      <>

      <BoardProvider>
      <ToolboxProvider>
        <Toolbar />
        <Board />
        <Toolbox />
      </ToolboxProvider>
    </BoardProvider>
      </>
     
    )

  

}else{
  return (
    <>

    <Card/>
    </>
   
  )
}}

export default App;
