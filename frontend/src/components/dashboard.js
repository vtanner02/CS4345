import NavMenu from "./appbar";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Dashboard(){
    const [user, setUser] = useState(undefined);
    const navigate = useNavigate()
    useEffect(() => {
        let u=window.sessionStorage.getItem("user")
        let spl = u.split(",")
        setUser(spl)
    }, [ ]);
    const logout = ()=>{
        window.sessionStorage.removeItem(user)
        navigate("/login")
    }
    if (!user){
        return<>Loading ... </>
    }
    else{
        if(user[5]=="professor"){
            return<div>
            <div>
            <h1>Welcome, {user[1]}</h1>
            <h4>What would you like to do today?</h4>
            <ul>
                <li><Link to='/postjob'>Add a TA position to job listings</Link></li>
                <li><Link to='/viewapps'>View submitted applications for my classes</Link></li>
                <li onClick = {logout}>Logout</li>
            </ul>
            </div>
        </div>   
        }
        else{
            return<div>
            <div>
            <h1>Welcome, {user[1]}</h1>
            <h4>What would you like to do today?</h4>
            <ul>
                <li><Link to='/viewposting'>Browse available postings</Link></li>
                <li><Link to='/viewapps'>View my submitted applications</Link></li>
                <li onClick = {logout}>Logout</li>
            </ul>
            </div>
        </div>   
        }
    }
}