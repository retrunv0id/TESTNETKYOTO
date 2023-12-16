import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nft from "./Components/Nft/Nft";
import Token from "./Components/Token/Token";
import Info from "./Components/Info/Info";

function App() {

  return (
    <>
      <div>
        <Info />
        <Nft />
        <Token />
      </div>
    </>
  );
}

export default App;
