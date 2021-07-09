import React, { Component } from 'react';
import { Col, Input, ListGroupItem, Row } from 'reactstrap';
import ChatMessageDetailsInfo from './ChatMessageDetailsInfo';

interface Props {
    clickList: any
    loginProfileId: any
    loginProfileImg: any
    onChangeMessage: Function
    userMessage: any
    clickSendMessage: Function
}

class ChatMessageDetails extends Component<Props> {

    prevValue: any = ''
    count: any = 0
    constructor(props: any) {
        super(props)
        this.returnCountForDays = this.returnCountForDays.bind(this)
    }

    // Return Count for showing days
    returnCountForDays(data: any) {
        if (!this.prevValue) {
            this.prevValue = data
            this.count = 1
        } else if (this.prevValue != data) {
            this.prevValue = data
            this.count = 1
        } else {
            this.count += 1
        }
        return this.count
        // this.setState({})
    }


    render() {
        return (
            <div>
                <div style={{ background: '#13233A', color: '#ffffff', padding: '15px' }}>
                    <Row>
                        <Col style={{width: '3%'}} xs="1" sm="1" md="1" lg="1" xl="1">
                            <div><i style={{ fontSize: '25px', lineHeight: '45px' }} className="fa fa-angle-left"></i></div>
                        </Col>
                        <Col style={{ fontWeight: 'bold', width: '92%' }} xs="9" sm="9" md="9" lg="9" xl="9">
                            <div style={{ display: 'flex', width: '100%' }}>
                                <div style={{ width: '6%' }}>
                                     <img style={{ width: '45px', height: '45px', borderRadius: '50px' }} src={this.props.clickList.profileImg} />
                                     {this.props.clickList.dateInMins < 1 && <div style={{position: 'relative', bottom: '15%', background: 'green', width: '10px', height: '10px', left: '50%', borderRadius: '50px'}}>

                                    </div>}
                                </div>
                                <div style={{ width: '94%' }}>
                                    {this.props.clickList.profileName}
                                    <div style={{ fontSize: '13px' }}>
                                        <small>
                                            {this.props.clickList.dateInMins < 1 &&
                                                <span style={{ fontWeight: 'normal' }}> Online </span>
                                            }
                                            {(this.props.clickList.dateInMins > 60 && this.props.clickList.days == 0) &&
                                                <span style={{ fontWeight: 'normal' }}> Last seen {Math.round(this.props.clickList.dateInMins / 60)} hour(s) ago </span>
                                            }
                                            {(this.props.clickList.dateInMins > 1 && this.props.clickList.dateInMins < 60 && this.props.clickList.days == 0) &&
                                                <span style={{ fontWeight: 'normal' }}> Last seen {Math.round(this.props.clickList.dateInMins / 60)} min(s) ago </span>
                                            }
                                            {(this.props.clickList.dateInMins > 60 && this.props.clickList.days > 0) &&
                                                <span style={{ fontWeight: 'normal' }}> Last seen {this.props.clickList.days} day(s) ago </span>
                                            }
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col style={{width: '5%'}} xs="2" sm="2" md="2" lg="2" xl="2">
                            <div style={{ textAlign: 'end' }}><i style={{ fontSize: '25px', lineHeight: '45px' }} className="fa fa-ellipsis-h"></i></div>
                        </Col>
                    </Row>
                </div>
                <div style={{ background: '#ffffff', marginTop: '2%', padding: '0px 5%', maxHeight: '36rem', overflowY: 'auto' }}>
                    {this.props.clickList.chatMessageList.map((res: any) =>
                        <ChatMessageDetailsInfo key={res.id}
                            messageList={res}
                            detailList={this.props.clickList}
                            loginProfileId={this.props.loginProfileId}
                            loginProfileImg={this.props.loginProfileImg}
                            returnCountForDays={this.returnCountForDays.bind(this)} />
                    )}

                </div>
                <div style={{ position: 'absolute', bottom: '2%', height: '60px', borderTop: '1px solid', width: '70rem', background: '#f5f5f5' }}>
                    <div style={{ lineHeight: '60px' }}>
                        <Row>
                            <Col xs="1" sm="1" md="1" lg="1" xl="1">
                                <div style={{ textAlign: 'center' }}><i style={{ fontSize: '20px', color: '#13233a' }} className="fa fa-paperclip"></i></div>
                            </Col>
                            <Col xs="8" sm="8" md="8" lg="8" xl="8">
                                <Input onInput={this.props.onChangeMessage.bind(this)} value={this.props.userMessage} style={{ 'background': 'transparent', border: 'none', color: '#13233a', fontSize: '15px', lineHeight: '45px' }} placeholder="Type a message here" />
                            </Col>
                            <Col xs="1" sm="1" md="1" lg="1" xl="1">
                                <div style={{ textAlign: 'center' }}><i style={{ fontSize: '20px', color: '#13233a' }} className="fa fa-smile-o"></i></div>
                            </Col>
                            <Col xs="1" sm="1" md="1" lg="1" xl="1">
                                <div style={{ textAlign: 'center' }}><i style={{ fontSize: '20px', color: '#13233a' }} className="fa fa-microphone"></i></div>
                            </Col>
                            <Col xs="1" sm="1" md="1" lg="1" xl="1">
                                <div onClick={this.props.clickSendMessage.bind(this)} style={{ textAlign: 'center' }}><i style={{ fontSize: '20px', color: '#13233a', cursor: 'pointer' }} className="fa fa-paper-plane"></i></div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        );
    }

}

export default ChatMessageDetails;
