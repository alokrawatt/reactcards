import react from "react";
import {add,sub,mult,div} from './Calc'

function App(){
    return (
        <>
        <ul>
          <li> {add(87,2)}</li>
          <li> {sub(87,2)}</li>
          <li>{mult(87,2)}</li>
          <li> {div(87,2)}</li>
      
        </ul>
        </>
    );
}

export default App;