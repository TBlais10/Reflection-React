import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Profile from "./Profile";
import { AuthContext } from "../Providers/AuthProvider";

const Profiles = (props) => {
    const [auth, setAuth] = useContext(AuthContext);
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
        const _getDevelopers = async () => {
            try{
                const res = await axios.get(`${host}/api/profile`, 
                    {
                        headers: {
                        "Authorization": `Bearer ${auth.token}`
                        }
                    }
                );
                
                console.log(res.data);
                // setAuth({...auth, name: res.data.name}) //Check out geekylikes
                setProfiles(res.data);
                setLoading(false);
            } catch (err){
                console.log(err.message ? err.message : err.response)
            }

        }
        setLoading(true);
        _getDevelopers();
    }, [auth.token])

    const displayProfiles = () => {
        // console.log(profiles)
        return profiles.map(pro => <Profile profile={pro} key={pro.id} onSelect={onSelect}/>)
    }

    const onSelect = (proId) => {
        navigate(`/profile/${proId}`)
    }

    return(
        <div style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            alignItems: 'center',
            minHeight: "100vh",
        }}>
            <h1>Profiles</h1>
            {loading ?
                "Loading..."
            : 
                displayProfiles()
            }
        </div>

    )
}

export default Profiles;