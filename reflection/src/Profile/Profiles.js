import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from '../faCommon/Spinner'
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Profile from "./Profile";

const Profiles = (props) => {
    const [auth] = useContext(AuthContext);
    const[profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
        const _getDevelopers = async () => {
            try{
                const res = await axios.get(
                    `${host}/api/profie`,
                    {
                        headers : {
                            "Authorization" : `Bearer ${auth.token}`
                        }
                    }
                )
                console.log(res.data)
                setLoading(false);
                setProfiles(res.data);
            } catch (err){
                console.log(err.response.message)
            }

        }
        setLoading(true);
        _getDevelopers();
    }, [auth.token])

    const displayProfiles = () => {
        return profiles.map(pro => <Profile profile={pro} key={pro.id} onSelect={onSelect}/>)
    }

    const onSelect = (proId) => {
        navigate(`/developers/${proId}`)
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
                <Spinner />
            :
            displayProfiles()
            }
        </div>

    )
}

export default Profiles;