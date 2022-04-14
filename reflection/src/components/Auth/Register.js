import React, {useState} from "react";
import axios from 'axios';
import NewUserForm from "./NewUserForm";
import Container from "../../common/Container";
import Splash from "../../common/Splash";
import RegSplash from "../../assets/login_reflect.jpg"
import { apiHostUrl } from "../../config";

const Register =() => {
    const [newUser, setNewUser] = useState({
        email:'',
        password:'',
        fName: '',
        lName: '',
        age: '',
        town: '',
        state: '',
    })

    const updateForm = (field, value) => {
        setNewUser({
            ...newUser,
            [field]: value
        })
    }

    const createUser = (data) =>{
        try {
            const res = await axios.post(`${apiHostUrl}/auth/signup`, data);
        console.log(res.data)
        } catch (err) {
        console.error(err.message);
        }
    }

    const login = (data) =>{

    }

    const createProfile = (data) =>{

    }

    const onSubmit = () => {
        const data = newUser;
        data.name = `${data.fName} ${data.lName}`
        data.username = data.email

        createUser(data);
    };

    return(
        <Container>
            <Splash image={RegSplash} style={{
                height: '20vh',
                color: "#f1f1f1",
                }}>
                <h1>Register</h1>
            </Splash>
            <NewUserForm 
            newUser={newUser} 
            onChange={updateForm} 
            onSubmit={onSubmit}
            />
        </Container>
    )
}

export default Register;