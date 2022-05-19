import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import NewEntry from "./NewEntry";
import Container from "../../common/Container";
import Splash from "../../common/Splash";
import ContentSplash from "../../assets/newContent_reflect.jpg"
import { apiHostUrl } from "../../config";

const JournalEntry = () => {
    const [newEntry, setNewEntry] = useState({
        title:'',
        content:'',
    })

    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setNewEntry({
            ...newEntry,
            [field]: value
        })
    }

const createContent = async(data, token) => {
    try{
        const res = await axios.post(`${apiHostUrl}/api/Entries/newEntry`, 
        data, 
            {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        console.log(res.data);
        //navigate route to go to the new post with the get id mapping
    } catch(err) {
        console.error(err.response.data)
    }
}

const onSubmit = () => {
    const data = newEntry;
    data.title = `${data.content}`
    data.content = `${data.content}`

    createContent(data);
}

    return(
        <Container>
            <Splash image={ContentSplash} style={{
                height: '20vh',
                color: "#f1f1f1"
            }}>
            <h1>New Entry</h1>
            </Splash>
            <NewEntry
            newEntry={newEntry}
            onChange={updateForm}
            onSubmit={onSubmit}
            />
        </Container>
    )
}

export default JournalEntry;