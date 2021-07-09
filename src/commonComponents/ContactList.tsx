import React, { Component } from 'react';
import { Col, ListGroupItem, Row } from 'reactstrap';

interface Props {
    contactList: any
    onClickList: Function
    clickList: any
}

class ContactList extends Component<Props> {

    constructor(props: any) {
        super(props)
    }


	render() {
		return (
			<ListGroupItem onClick={this.props.onClickList.bind(this, this.props.contactList)} style={{background: 'transparent', color: '#ffffff', cursor:'pointer', border: 'none', borderBottom: '1px solid #4c4b4b', borderRight: this.props.clickList && (this.props.clickList.id == this.props.contactList.id) ? '5px inset' : '' }} key={this.props.contactList.id}>
                <div>
                    <Row>
                        <Col xs="2" sm="2" md="2" lg="2" xl="2">
                            <div>
                                <img style={{width: '45px', height: '45px', borderRadius: '50px'}} src={this.props.contactList.contactProfileImg} />
                            </div>
                        </Col>
                        <Col xs="7" sm="7" md="7" lg="7" xl="7">
                            <div style={{fontWeight: 'bold'}}>
                                {this.props.contactList.contactFirstName}
                            </div>
                            <div>
                                <div>
                                    {this.props.contactList.contactMobileNo}
                                </div>
                                <div>
                                    <small style={{color: '#adb1b5'}}>
                                        <i style={{ fontSize: '16px'}} className="fa fa-phone"></i> &nbsp; &nbsp;
                                        <i style={{ fontSize: '16px'}} className="fa fa-envelope-o"></i>
                                    </small>
                                </div>
                                
                            </div>
                        </Col>
                        <Col style={{textAlign: 'end', fontSize: '13px'}} xs="3" sm="3" md="3" lg="3" xl="3">
                            <div style={{color: '#adb1b5'}}>
                                {this.props.contactList.time}
                            </div>
                        </Col>
                    </Row>
                </div>
            </ListGroupItem>
		);
	}

}

export default ContactList;
