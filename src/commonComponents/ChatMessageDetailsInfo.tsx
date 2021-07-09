import React, { Component } from 'react';
import { Col, ListGroupItem, Row } from 'reactstrap';

interface Props {
    messageList: any
    detailList: any
    returnCountForDays: Function
    loginProfileId: any
    loginProfileImg: any 
}

class ChatMessageDetailsInfo extends Component<Props> {

    constructor(props: any) {
        super(props)
    }


    render() {
        let showContent;
        if (this.props.messageList.profileId == this.props.loginProfileId) {
            showContent = <Row>
                <Col xs="11" sm="11" md="11" lg="11" xl="11">
                <div style={{ background: '#13233a', padding: '15px', borderRadius: '10px 10px 0px 10px', color: '#ffffff', fontSize: '14px' }}>
                        {this.props.messageList.profileChatList}
                        <div style={{ textAlign: 'end', fontSize: '13px' }}>
                            <small>
                                {this.props.messageList.time}
                            </small>
                        </div>
                    </div>
                </Col>
                <Col xs="1" sm="1" md="1" lg="1" xl="1">
                    <div>
                        <img style={{ width: '45px', height: '45px', borderRadius: '50px' }} src={this.props.loginProfileImg} />
                    </div>
                </Col>
            </Row>
        } else {
            showContent = <Row>
                <Col xs="1" sm="1" md="1" lg="1" xl="1">
                    <div>
                        <img style={{ width: '45px', height: '45px', borderRadius: '50px' }} src={this.props.detailList.profileImg} />
                        
                    </div>
                </Col>
                <Col xs="11" sm="11" md="11" lg="11" xl="11">
                    <div style={{ background: '#efeff1', padding: '15px', borderRadius: '10px 10px 10px 0px', color: '#000000', fontSize: '14px' }}>
                        {this.props.messageList.profileChatList}
                        <div style={{ textAlign: 'end', fontSize: '13px' }}>
                            <small>
                                {this.props.messageList.time}
                            </small>
                        </div>
                    </div>
                </Col>
            </Row>
        }

        return (
            <div style={{marginTop: '1%'}}>
                {this.props.messageList.days > 1 &&
                    <div style={{ marginBottom: '2%' }}>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            {this.props.returnCountForDays(this.props.messageList.days) == 1 && <span style={{ background: '#13233A', color: '#ffffff', padding: '10px', borderRadius: '50px', fontSize: '14px' }}>
                                {this.props.messageList.day}
                            </span>}
                        </div>
                        <div style={{ marginTop: '2%' }}>
                            {showContent}
                        </div>
                    </div>
                }
                {this.props.messageList.days == 1 &&
                    <div style={{ marginBottom: '2%' }}>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            {this.props.returnCountForDays('yesterday') == 1 && <span style={{ background: '#13233A', color: '#ffffff', padding: '10px', borderRadius: '50px', fontSize: '14px' }}>
                                Yesterday
                            </span>}
                        </div>
                        <div style={{ marginTop: '2%' }}>
                            {showContent}
                        </div>
                    </div>
                }
                {this.props.messageList.days == 0 &&
                    <div style={{ marginBottom: '2%' }}>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            {this.props.returnCountForDays('today') == 1 && <span style={{ background: '#13233A', color: '#ffffff', padding: '10px', borderRadius: '50px', fontSize: '14px' }}>
                                Today
                            </span>}
                        </div>
                        <div style={{ marginTop: '2%' }}>
                            {showContent}
                        </div>
                    </div>
                }
            </div>

        );
    }

}

export default ChatMessageDetailsInfo;
