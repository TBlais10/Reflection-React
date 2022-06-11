import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import ViewEntries from "./ViewEntries";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ViewEntry = (props) => {
    const [auth, setAuth] = useContext(AuthContext);
    const [journalEntries, setJournalEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
        const _getEntry = async () => {
            try{
                const res = await axios.get(`${host}/api/Entries`, 
                    {
                        headers: {
                        "Authorization": `Bearer ${auth.token}`
                        }
                    }
                );

                console.log(res.data)
                setJournalEntries(res.data)
                setLoading(false);
        } catch (err){
            console.log(err.message ? err.message : err.response)
        }
       
    }
    setLoading(true);
    _getEntry();
    }, [auth.token])

    const displayEntries = () => {
        return journalEntries.map(ent => <ViewEntries ViewEntries={ent} key={ent.id} onSelect={onSelect}/>) //todo: research
    }

    const onSelect = (entId) => {
        navigate(`/${entId}`)
    }

    return(
        <div style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            alignItems: 'center',
            minHeight: "100vh",
        }}>
            <h1>Journal Entries</h1>
            {loading ?
                "Loading..."
            : 
                displayEntries()
            }
        </div>
    )
}

export default ViewEntry;