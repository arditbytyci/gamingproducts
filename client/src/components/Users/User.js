import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import '../Users/User.css';




const User = (props) => {

    const {_id,username,email,role} = props.user;
    const history = useNavigate();



    return (

        <div class="card">
         <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: {_id}</li>
            <li class="list-group-item"> Username: {username}</li>
            <li class="list-group-item"> Email: {email}</li>
            <li class="list-group-item"> Role: {role}</li>
          </ul>
    </div>
         
    );

   }


   

export default User