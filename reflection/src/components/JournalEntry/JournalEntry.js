import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewEntry from "./NewEntry";
import Container from "../../common/Container";
import Splash from "../../common/Splash";
import ContentSplash from "../../assets/newContent_reflect.jpg";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../../Providers/AuthProvider";

//Add route that re-directs to the new entry (get mapping in routes)
//add edit mapping?

const JournalEntry = (props) => {
  const [newEntry, setNewEntry] = useState({
    title: "",
    content: "",
  });

  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const updateForm = (field, value) => {
    setNewEntry({
      ...newEntry,
      [field]: value,
    });
  };

  const createContent = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/Entries/newEntry`, data,
        {
          headers : {
            Authorization : `Bearer ${auth.token}`
          }
        }
      );
      console.log(res.data);
      //navigate route to go to the new post with the get id mapping
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  };

  const onSubmit = () => {
    const data = newEntry;
    data.title = `${data.content}`;
    data.content = `${data.content}`;

    createContent(data);
  };

  return (
    <Container>
      <Splash
        image={ContentSplash}
        style={{
          height: "20vh",
          color: "#f1f1f1",
        }}
      >
        <h1>New Entry</h1>
      </Splash>
      <NewEntry newEntry={newEntry} onChange={updateForm} onSubmit={onSubmit} />
    </Container>
  );
};

export default JournalEntry;
