import React from "react";
import Container from "../../common/Container";
import Form from "../../common/Form";
import InlineInputContainer from "../../common/InlineInputContainer";
import Input from "../../common/Input";
import Button from "../../common/Button";

const NewEntry = ({onSubmit, onChange, newEntry}) => {

    const handlechange = (e) => {
        onChange(e.target.id, e.target.value);
    }
    return(
        <Container>
            <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
                <InlineInputContainer>
                    <Input
                    name="title"
                    id="title"
                    value={newEntry.title}
                    placeholder={"Title"}
                    onChange={handlechange}
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer style={{
                    height:"300px",
                    margin:"10px"
                }}>
                    <Input style={{
                    height:"300px",
                    margin:"10px"
                    
                }}
            
                    name="content"
                    id="content"
                    value={newEntry.content}
                    placeholder={"Text here"}
                    onChange={handlechange}
                    required
                    />
                </InlineInputContainer>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default NewEntry;