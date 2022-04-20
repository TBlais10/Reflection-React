import React from "react";
import BorderCard from "../common/BorderCard"

const Profile = (props) => {
    const [name, id, journalEntries] = props.Profile
    return(
        <BorderCard onClick={() => props.onSelect(id)}>
            <h2>{name}</h2>
            <p>{id}</p>
        </BorderCard>
    )
}

export default Profile;