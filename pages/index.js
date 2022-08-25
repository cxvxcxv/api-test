import axios from 'axios';
import React, { useState, useEffect} from 'react';

export default function Index() {
    const [user, setUser] = useState([]);
    const [userId, setUserId] = useState(1);

    useEffect(() => {
        axios.get(`/api/${userId}`)
        .then((answer) => setUser(answer.data))
        .catch((e) => console.log(e));
    }, [userId])
    return (
        <div className='wrapper'>
            <h1>{user.name} (a.k.a {user.username})</h1>
            <h2>Company: {user.company?.name}</h2>
            <h2>Location: {user.address?.city}, {user.address?.street}, {user.address?.suite} ({user.address?.geo.lat}, {user.address?.geo.lng})</h2>
            <h2>Website: {user.website}</h2>
            <span>
                <span>
                    <button onClick={() => setUserId(userId-1)} className={userId == 1 ? "unavailable" : "available"}>Previous</button>  
                </span>
                <span>{userId}</span>
                <span>
                <button onClick={() => setUserId(userId+1)} className={userId == 10 ? "unavailable" : "available"}>Next</button>
                </span>
            </span>
            <h2>Contacts: {user.phone} or {user.email}</h2>
        </div>
    )
}