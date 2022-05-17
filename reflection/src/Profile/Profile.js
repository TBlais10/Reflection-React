import React from "react";
import BorderCard from "../common/BorderCard"

const Profile = (props) => {
    const {name, id} = props.profile
    return(
        <BorderCard onClick={() => props.onSelect(id)}>
            <h2>{name}</h2>
            <p>{id}</p>
        </BorderCard>
    )
}

export default Profile;