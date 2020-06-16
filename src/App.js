import React, { useReducer } from 'react';
import Routers from './Route';
import setAuthToken from './setAuthToken';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
      case "UpdateUser":
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        // console.log('++++ wokring');
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
        };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};



let App=()=> {


  const [state, dispatch] = useReducer(reducer, initialState);

React.useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user') || null)
  const token = JSON.parse(localStorage.getItem('token') || null)
    setAuthToken(token)
  if(user && token){
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
        token
      }
    })
  }
}, [])
return (
  <AuthContext.Provider  value={{state,dispatch}}>
    <Routers />
  </AuthContext.Provider>
);
  }

export default App;
