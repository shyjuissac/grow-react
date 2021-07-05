import { useState } from "react";
import Mod from "./Mod";
function Life(props) {
    const [modelisopen, setmodelopen] = useState(false);

    
    function deleteHandler(){
        setmodelopen(true);
    }
  return (
  <div>
      <h1>{props.text}</h1>
      <button onClick={deleteHandler}>Click</button>
      {modelisopen && <Mod/>}
      </div>
      );
}

export default Life;
