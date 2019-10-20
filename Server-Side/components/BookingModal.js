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
import { DateTimePicker } from 'react-widgets'
import NumericInput from 'react-numeric-input';
import { connect } from 'http2';

class BookingModal extends Component {
    state = {
        modal: false,
        startDate:'',
        endDate:'',
        numberOfPeople:'',
        creditCardNumber:'',

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
        alert("Booking was Successful!")

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
                                <DateTimePicker>Check In Date</DateTimePicker>
                                <Input
                                value = {this.state.startDate}
                                onChange = {this.onChange}
                                >
                                </Input>
                                <DateTimePicker>Check Out Date</DateTimePicker>
                                <Input
                                value = {this.state.endDate}
                                onChange = {this.onChange}
                                >
                                </Input>
                                
                                <NumericInput>
                                value = {this.state.numberOfPeople}
                                onChange = {this.onChange}
                                </NumericInput>

                                <Label>Credit Card Number
                                <Input
                                value = {this.state.creditCardNumber}
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
                        >Book Now!</Button>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}
export default connect()(BookingModal);
