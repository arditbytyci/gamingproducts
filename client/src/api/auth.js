import axios from 'axios';


export const signup = async (data) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }

    const response = await axios.post('/api/auth/SignUp',data,config);

    return response;

}


export const signin = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/auth/SignIn', data, config);

    return response;
};







