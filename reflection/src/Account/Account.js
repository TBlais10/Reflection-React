import React, {useState, useEffect, useContext, Fragment} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import { AuthContext } from "../Providers/AuthProvider";
import Image from "../assets/account_reflect.jpg"
import Button from "../common/Button";


const Account = (props) => {
    const params = useParams();
    const [profile, setProfiles] = useState({
        id: params.proId
    });
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useContext(AuthContext);
    const host = process.env.REACT_APP_API_HOST || "http://localhost8080";

    useEffect(() => {
        const _fetchProfile = async () => {
                const res = await axios.get(`${host}/api/Entries/${profile.id}`,
                {
                    headers : {
                        Authorization: `Bearer ${auth.token}`
                    }
                }
            )
            console.log(res.data);
            setProfiles(res.data);
            setLoading(false)
        }
        setLoading(true);
        _fetchProfile();
    }, [])

    const displayAccount = () => {
        return (
            <Fragment>
                {/* {banner} */}
                <div style={{
                    backgroundImage: `url(${Image})`,
                    backgroundSize: 'cover',
                    height: '27vh',
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '1rem 0rem',
                    padding: '8px',
                    maxWidth: '900px',
                    width: '100%'
                }}>
                    <div style={{
                        flex: 1,
                        flexDirection: 'column',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img src="https://via.placeholder.com/200" />
                    </div>
                    <div style={{
                        flex: 2,
                        flexDirection: 'column',
                        color: '#f1f1f1',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <h1>{profile.fname.toUpperCase()} {profile.lname.toUpperCase()}</h1>
                    </div>
                </div>
            </Fragment>
        )
    }

    return(
        <div style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            {loading ? (
                "Loading..."
            ) : 
            displayAccount()
            }
        </div>
    )
}

export default Account;