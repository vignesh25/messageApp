import React, { Component } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, ListGroupItem, Row } from 'reactstrap';
import ChatMessageDetailsInfo from './ChatMessageDetailsInfo';

interface Props {
    clickList: any
    loginProfileId?: any
    loginProfileImg?: any
    clickSendMessage?: Function
    onChangeField: Function
    saveContact:Function
}

class ContactDetails extends Component<Props> {

    constructor(props: any) {
        super(props)
    }


    render() {
        return (
            <div>
                <div style={{ background: '#13233A', color: '#ffffff', padding: '15px' }}>
                    <Row>
                        <Col style={{ width: '3%' }} xs="1" sm="1" md="1" lg="1" xl="1">
                            <div><i style={{ fontSize: '25px' }} className="fa fa-angle-left"></i></div>
                        </Col>
                        <Col style={{ fontWeight: 'bold', width: '92%' }} xs="9" sm="11" md="11" lg="11" xl="11">
                            <div style={{ display: 'flex', width: '100%' }}>
                                {this.props.clickList.id && <div style={{ width: '100%' }}>
                                    {this.props.clickList.contactFirstName} {this.props.clickList.contactLastName}
                                </div>}
                                {!this.props.clickList.id && <div style={{ width: '100%' }}>
                                    Create new contact
                                </div>}
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <div style={{ lineHeight: '60px' }}>
                        <Row>
                            <Col >
                                <div style={{ width: '100%', textAlign: 'center', marginTop: '1%' }}>
                                    <img style={{ width: '150px', height: '150px', borderRadius: '50px' }} src={this.props.clickList.contactProfileImg} />
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '5%', padding: '0% 10%' }}>
                            <Col xs="6" sm="6" md="6" lg="6" xl="6">
                                <InputGroup style={{ borderRadius: '10px', border: '1px solid #13233A' }}>
                                    <div style={{ width: '10%' }}>
                                        <InputGroupAddon addonType="prepend">
                                            <div style={{ textAlign: 'center' }}><i style={{ fontSize: '20px', color: '#13233A' }} className="fa fa-user"></i></div>
                                        </InputGroupAddon>
                                    </div>
                                    <div style={{ width: '90%' }}>
                                        <Input onInput={this.props.onChangeField.bind(this, 'contactFirstName')} value={this.props.clickList.contactFirstName} style={{ border: 'none', color: '#13233A', fontSize: '15px', lineHeight: '48px', width:'99%' }} placeholder="First Name" />
                                    </div>
                                </InputGroup>
                            </Col>
                            <Col xs="6" sm="6" md="6" lg="6" xl="6">
                                <InputGroup style={{ borderRadius: '10px', border: '1px solid #13233A' }}>
                                    <div style={{ width: '10%' }}>
                                        <InputGroupAddon addonType="prepend">
                                            <div style={{ textAlign: 'center' }}><i style={{ fontSize: '20px', color: '#13233A' }} className="fa fa-user"></i></div>
                                        </InputGroupAddon>
                                    </div>
                                    <div style={{ width: '90%' }}>
                                        <Input onInput={this.props.onChangeField.bind(this, 'contactLastName')} value={this.props.clickList.contactLastName} style={{ border: 'none', color: '#13233A', fontSize: '15px', lineHeight: '48px', width:'99%' }} placeholder="Last Name" />
                                    </div>
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '5%', padding: '0% 10%' }}>
                            <Col xs="6" sm="6" md="6" lg="6" xl="6">
                                <InputGroup style={{ borderRadius: '10px', border: '1px solid #13233A' }}>
                                    <div style={{ width: '10%' }}>
                                        <InputGroupAddon addonType="prepend">
                                            <div style={{ textAlign: 'center' }}><i style={{ fontSize: '20px', color: '#13233A' }} className="fa fa-mobile"></i></div>
                                        </InputGroupAddon>
                                    </div>
                                    <div style={{ width: '90%' }}>
                                        <Input onInput={this.props.onChangeField.bind(this, 'contactMobileNo')} value={this.props.clickList.contactMobileNo} style={{ border: 'none', color: '#13233A', fontSize: '15px', lineHeight: '48px', width:'99%' }} placeholder="Mobile Number" />
                                    </div>
                                </InputGroup>
                            </Col>
                            <Col xs="6" sm="6" md="6" lg="6" xl="6">
                                <InputGroup style={{ borderRadius: '10px', border: '1px solid #13233A' }}>
                                    <div style={{ width: '10%' }}>
                                        <InputGroupAddon addonType="prepend">
                                            <div style={{ textAlign: 'center' }}><i style={{ fontSize: '20px', color: '#13233A' }} className="fa fa-envelope-o"></i></div>
                                        </InputGroupAddon>
                                    </div>
                                    <div style={{ width: '90%' }}>
                                        <Input onInput={this.props.onChangeField.bind(this, 'contactEmailId')} value={this.props.clickList.contactEmailId} style={{ border: 'none', color: '#13233A', fontSize: '15px', lineHeight: '48px', width:'99%' }} placeholder="Email No" />
                                    </div>
                                </InputGroup>
                            </Col>
                        </Row>
                        <div style={{marginTop: '5%', padding: '0% 10%', display: 'flex'}}>
                            <div style={{width: '50%', textAlign: 'end'}}>
                                <Button onClick={this.props.saveContact.bind(this)} style={{background: '#192C73', borderColor: '#192C73', fontSize: '15px',width: '50%', borderRadius: '50px'}} color="primary">Save</Button>
                            </div> &nbsp; &nbsp;
                            <div style={{width: '50%', textAlign: 'left'}}>
                                <Button style={{background: '#696C7B', borderColor: '#696C7B', fontSize: '15px',width: '50%', borderRadius: '50px', pointerEvents: this.props.clickList.id ? 'all' : 'none', opacity: this.props.clickList.id ? '1' : '0.5'}} color="primary">Discard</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default ContactDetails;
