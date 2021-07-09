import React, { Component } from 'react';
import { Col, ListGroupItem, Row } from 'reactstrap';

interface Props {
    messageList: any
    onClickList: Function
    clickList: any
}

class ChatMessageList extends Component<Props> {

    constructor(props: any) {
        super(props)
    }


	render() {
		return (
			<ListGroupItem onClick={this.props.onClickList.bind(this, this.props.messageList)} style={{background: 'transparent', color: '#ffffff', cursor:'pointer', border: 'none', borderBottom: '1px solid #4c4b4b', borderRight: this.props.clickList && (this.props.clickList.id == this.props.messageList.id) ? '5px inset' : '' }} key={this.props.messageList.id}>
                <div>
                    <Row>
                        <Col xs="2" sm="2" md="2" lg="2" xl="2">
                            <div>
                                <img style={{width: '45px', height: '45px', borderRadius: '50px'}} src={this.props.messageList.profileImg} />
                                {this.props.messageList.dateInMins < 1 && <div style={{position: 'absolute', bottom: '15%', background: 'green', width: '10px', height: '10px', left: '15%', borderRadius: '50px'}}>

                                </div>}
                            </div>
                        </Col>
                        <Col xs="7" sm="7" md="7" lg="7" xl="7">
                            <div style={{fontWeight: 'bold'}}>
                                {this.props.messageList.profileName}
                            </div>
                            <div style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                                <small style={{fontWeight: 'normal', color: '#adb1b5'}}>
                                    {this.props.messageList.lastChatMessage}
                                </small>
                            </div>
                        </Col>
                        <Col style={{textAlign: 'end', fontSize: '13px'}} xs="3" sm="3" md="3" lg="3" xl="3">
                            <div style={{color: '#adb1b5'}}>
                                {this.props.messageList.time}
                            </div>
                            {this.props.messageList.notificationCount > 0 && <div>
                                <small style={{fontWeight: 'normal', color: '#ffffff', background: '#8B68EE', borderRadius: '50px', padding: '5px'}}>
                                    {this.props.messageList.notificationCount}
                                </small>
                            </div>} 
                        </Col>
                    </Row>
                </div>
            </ListGroupItem>
		);
	}

}

export default ChatMessageList;
