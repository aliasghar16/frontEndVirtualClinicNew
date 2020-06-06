import React ,{useContext} from 'react';
import Code3 from './code3';
import NameContext from './testContext';
let Code2=()=>{

let myContext=useContext(NameContext);
  return(
    <div> <h4> age ::: {myContext.name.age}  </h4>
    <Code3 />
    </div>
  )

}
export default Code2;
