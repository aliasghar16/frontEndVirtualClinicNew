import axios from 'axios';

const setAuthToken = token => {
    if(token) {
      console.log('++++++ token --------+',token);
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
      console.log('++++++++++ No token available ------- ');
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;
