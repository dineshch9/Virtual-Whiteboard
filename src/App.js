import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import Toolbox from "./components/Toolbox";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/ToolboxProvider";
import Card from "./components/card/Card";


function App() {
  if(!(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent))){
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
