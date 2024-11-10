import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import Toolbox from "./components/Toolbox";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/ToolboxProvider";
import Card from "./components/card/Card";


const mobile=()=>{
  return!( (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) || window.innerWidth<1100);
}

function App() {
  if(mobile){
    return (
      
      <BoardProvider>
        <ToolboxProvider>
          <Toolbar />
          <Board />
          <Toolbox />
        </ToolboxProvider>
      </BoardProvider>
    );

  }else{
    return (
      <>

    <Card/>
    </>
    )
    


  }

}

export default App;
