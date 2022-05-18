import React from "react";
import BorderCard from "../common/BorderCard"

const Profile = (props) => {
    const {fname, lname, id, journalEntries} = props.profile
    console.log(props.profile)
    return(
        <BorderCard onClick={() => props.onSelect(id)}>
            <h2>{fname} {lname}</h2>
            <h1>{journalEntries}</h1>
        </BorderCard>
    )
}

export default Profile;