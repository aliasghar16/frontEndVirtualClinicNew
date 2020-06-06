import React,{useReducer} from 'react';
import Code1 from './code1';
import nameReducer from './reducer';
import NameContext from './testContext';




let Code=()=>{

  let isState={}


  let [data,dispatch]=useReducer(nameReducer,isState)



  return(
    <NameContext.Provider value={{name:data,username:dispatch}}>

    <div>
        <h1> Testing </h1>
        <hr/>
        <h3> NAme ::: {data.name}  </h3>
        <Code1/>
    </div>

    </NameContext.Provider>

  )

}

export default Code;
