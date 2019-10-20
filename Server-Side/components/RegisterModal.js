//To be called on when Register Button is clicked 
import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup, 
    Label,
    Input
} from 'reactstrap';
import { connect } from 'http2';

class RegisterModal extends Component {
    state = {
        modal: false,
        name:'', 
        email:'',
        password:''

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({[ e.target.name]: e.target.value })
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        alert("Registration was Successful!")

    }

    render(){
        return(
            <div>
                <Button
                color = "dark"
                style = {{marginBottom: '2rem'}}
                onClick = {this.toggle}
                >Book Now!</Button>

                <Modal
                    isOpen = {this.state.modal}
                    toggle = {this.toggle}

                >
                    <ModalHeader toggle = {this.toggle}>Booking</ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.onSubmit}>
                            <FormGroup>
                            <Label>Name
                                <Input
                                type = 'text'
                                value = {this.state.name}
                                onChange = {this.onChange}
                                >
                                </Input>
                                </Label>
                                <Label>Email
                                <Input
                                type = 'email'
                                value = {this.state.email}
                                onChange = {this.onChange}
                                >
                                </Input>
                                </Label>
                                <Label>Password
                                <Input
                                type = 'password'
                                value = {this.state.password}
                                onChange = {this.onChange}
                                >
                                </Input>
                                </Label>
                            </FormGroup>
                        </Form>
                        <Button
                        color = "dark"
                        style = {{marginBottom: '2rem'}}
                        onClick = {this.onSubmit}
                        >Register Now!</Button>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}
export default connect()(RegisterModal);
