import React ,{useContext} from 'react';
import Code2 from './code2';

import NameContext from './testContext';


let Code1=()=>{
let name=useContext(NameContext)
  return(
    <div> <hr /> <h4> code1 </h4>
    <h2>
      name ::: {name.name.name}
    </h2>
  <hr />
    <Code2 />
    </div>
  )

}
export default Code1;
