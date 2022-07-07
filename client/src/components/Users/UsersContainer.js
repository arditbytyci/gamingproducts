import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';


const URL = "http://localhost:5000/users";
const fetchHandler = async () => {

     return await axios.get(URL).then((res) => res.data);

}

const UsersContainer = () => {

    const [users , setUsers] = useState();

    useEffect(() => {

      fetchHandler().then((data) => setUsers(data.users))

    }, []);
   
  return (
    <div>
       <ul>
      {users && users.map((user,i) => (
        <div className='user' key={i}>
          <User user={user} />
        </div>
      ))}
        </ul> 
     </div>
  )
}

export default UsersContainer