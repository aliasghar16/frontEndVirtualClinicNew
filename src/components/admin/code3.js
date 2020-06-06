import React ,{useContext} from 'react';

import NameContext from './testContext';

let Code3=()=>{
let name=useContext(NameContext);
  return(
    <div>
    <hr />
     <h4>  code3  For change data</h4>
    <h4> let case 1 <button onClick={()=>{name.username({type:'change_name',payload:{name:"ayx",age:50}})}}> Case 1 </button> </h4>
    <button onClick={()=>{  }}>case2</button>
     </div>
  )

}
export default Code3;
