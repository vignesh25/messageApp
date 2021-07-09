import React from 'react';
import { withRouter } from 'react-router-dom';
import { Col, ListGroup, Row } from 'reactstrap';
import ChatMessageList from '../../commonComponents/ChatMessageList';
import SearchBar from '../../commonComponents/SearchBar';
import './chatMessage.css';
import logo from '../../assets/download.jpeg'
import logo1 from '../../assets/logo1.png'
import profileImg1 from '../../assets/profileImg.png'
import ChatMessageDetails from '../../commonComponents/ChatMessageDetails';
import moment from 'moment';
import history from '../../history'
import noImage from '../../assets/noImage.png'

interface Props {
	
}

class chatMessage extends React.Component<Props> {

	loginProfileId: any = 4
	loginProfileImg = profileImg1
	userMessage: any = ''
	listChatMessage = [
		{
			'id': 1,
			'profileImg': logo,
			'profileName': 'Aravind',
			'profileChatList': 'yewq iuwey qwiey owqeiqwue oqwei uoiweu lksda dlehw leqkwej wlekj saldk',
			'lastChatMessage' : 'yewq iuwey qwiey owqeiqwue oqwei uoiweu lksda dlehw leqkwej wlekj saldk',
			'lastUpdatedAt': '2021-07-07 17:45',
			'lastSeenTime': '2021-07-07 17:45',
			'notificationCount': 2,
			'chatMessageList': [
				{
					'id':1,
					'profileId': 4,
					'profileChatList': 'dsa ldaksjd lkw lsakejq lkdj lqwkej sdlkj',
					'lastUpdatedAt': '2021-07-07 17:45'
				},
				{
					'id': 2,
					'profileId': 1,
					'profileChatList': 'ewq jwlkje welkjwejs akj',
					'lastUpdatedAt': '2021-07-07 17:50'
				},
				{
					'id': 3,
					'profileId': 4,
					'profileChatList': 'canc,mnas d,smnw ekdnsawlejld askj wle',
					'lastUpdatedAt': '2021-07-07 17:55'
				},
				{
					'id': 4,
					'profileId': 1,
					'profileChatList': 'nbmn sfer sajhewkqjhds alkeqw elqoiweu qoei dsahwq ekhe',
					'lastUpdatedAt': '2021-07-08 17:55'
				}
			]
		},
		{
			'id': 2,
			'profileImg': logo1,
			'profileName': 'Prakash',
			'profileChatList': 'dhsa ekhw elqkwhelqwekhwq lkjdas ldkhasl dkhqwekjhk djsahdk jsaeh wqkjeh ',
			'lastChatMessage' : 'dhsa ekhw elqkwhelqwekhwq lkjdas ldkhasl dkhqwekjhk djsahdk jsaeh wqkjeh',
			'lastUpdatedAt': '2021-07-08 19:20',
			'lastSeenTime': new Date(),
			'notificationCount': 3,
			'chatMessageList': [
				{
					'id': 1,
					'profileId': 2,
					'profileChatList': 'dsa ldaksjd lkw lsakejq lkdj lqwkej sdlkj',
					'lastUpdatedAt': '2021-07-06 17:45'
				},
				{
					'id': 2,
					'profileId': 4,
					'profileChatList': 'ewq jwlkje welkjwejs akj',
					'lastUpdatedAt': '2021-07-06 17:50'
				},
				{
					'id': 3,
					'profileId': 2,
					'profileChatList': 'canc,mnas d,smnw ekdnsawlejld askj wle',
					'lastUpdatedAt': '2021-07-07 17:55'
				},
				{
					'id': 4,
					'profileId': 2,
					'profileChatList': 'nbmn sfer sajhewkqjhds alkeqw elqoiweu qoei dsahwq ekhe',
					'lastUpdatedAt': '2021-07-08 08:30'
				},
				{
					'id': 5,
					'profileId': 4,
					'profileChatList': 'vnriowe roriuqr wpdjas dowiruwda askdar wqlksjd',
					'lastUpdatedAt': '2021-07-09 06:07'
				}
			]
		},
		{
			'id': 3,
			'profileImg': noImage,
			'profileName': 'Test',
			'profileChatList': 'yk dskjh dkjasdh kjwehkjhda sjdksha dkjhe kjwqhekjwe hkjhd ksajdh kj hrkj hekjw',
			'lastChatMessage' : 'yk dskjh dkjasdh kjwehkjhda sjdksha dkjhe kjwqhekjwe hkjhd ksajdh kj hrkj hekjw',
			'lastUpdatedAt': '2021-07-06 17:45',
			'lastSeenTime': '2021-07-09 10:17',
			'notificationCount': 0,
			'chatMessageList': [
				{
					'id': 1,
					'profileId': 4,
					'profileChatList': 'dsa ldaksjd lkw lsakejq lkdj lqwkej sdlkj',
					'lastUpdatedAt': '2021-07-07 17:45'
				},
				{
					'id': 2,
					'profileId': 3,
					'profileChatList': 'ewq jwlkje welkjwejs akj',
					'lastUpdatedAt': '2021-07-07 17:50'
				},
				{
					'id': 3,
					'profileId': 3,
					'profileChatList': 'canc,mnas d,smnw ekdnsawlejld askj wle',
					'lastUpdatedAt': '2021-07-07 17:55'
				},
				{
					'id': 4,
					'profileId': 4,
					'profileChatList': 'nbmn sfer sajhewkqjhds alkeqw elqoiweu qoei dsahwq ekhe',
					'lastUpdatedAt': '2021-07-08 17:55'
				}
			]
		}
	]
	clickViewMessage: any = null
	listMessageDetails = []
	groupList = [
		{
			'id': 1,
			'groupName' : 'Chats',
			'groupNavigatePage' : '/',
			'isActive': true
		},
		{
			'id': 2,
			'groupName' : 'Contacts',
			'groupNavigatePage' : '/contacts',
			'isActive': false
		}
	]

	constructor(props: any) {
		super(props)
		this.onClickViewMessages = this.onClickViewMessages.bind(this)
		this.onChangeMessage = this.onChangeMessage.bind(this)
		this.clickSendMessage = this.clickSendMessage.bind(this)
		this.navigateGroup = this.navigateGroup.bind(this)
		this.listChatMessage.forEach(res => {
			this.returnMins(res)
		})
	}

	// Click the list to view the messages
	onClickViewMessages(data: any) {
		this.clickViewMessage = data
		this.clickViewMessage.notificationCount = 0
		this.clickViewMessage.chatMessageList.forEach((res:any) => {
			this.returnMins(res)
		})
		this.setState({})

	}

	// On Change Message 
	onChangeMessage(data: any) {
		this.userMessage = data.target.value
		this.setState({})
	}

	// Click send message
	clickSendMessage(data: any) {
		let formObj = {
			'id': this.clickViewMessage.chatMessageList.length,
			'profileId': this.loginProfileId,
			'profileChatList': this.userMessage,
			'lastUpdatedAt': new Date()
		}
		this.clickViewMessage.lastChatMessage = this.userMessage
		this.clickViewMessage.chatMessageList.push(formObj)
		this.clickViewMessage.chatMessageList.forEach((res:any) => {
			this.returnMins(res)
		})
		this.userMessage = ''
		this.setState({})
	}

	// Return mins
	returnMins(data: any) {
		let today:any = new Date() 
		let getDate:any = new Date(data.lastUpdatedAt)

		// let diffInMilliSeconds = Math.abs(today - getDate) / 1000;
		var time_difference = today.getTime() - getDate.getTime();  

		// calculate days
		data['days'] = Math.round(time_difference / (1000 * 60 * 60 * 24));
		// calculate mins for online purpose
		if(data['lastSeenTime']) {
			let lastSeenDate: any = new Date(data['lastSeenTime'])
			data['dateInMins'] = 	Math.round(((today - lastSeenDate)/1000)/60)
		}
		data['time'] = moment(getDate).format('hh:mm A')
		data['day'] = moment(getDate).format('DD-MMM-YYYY')
	}

	// Navigate to group 
	navigateGroup(data: any) {
		history.push(data.groupNavigatePage)
	}

	public render() {

		// For Search bar 
		let searchBarContent;
		searchBarContent = <SearchBar />

		return (
			<div className="chatPage">
				<div>
					<Row className="chatBackground">
						<Col style={{ padding: '15px' }} xs="12" sm="4" md="3" lg="3" xl="3">
							{searchBarContent}
							<div style={{display: 'flex', width: '100%', padding: '0px 15px'}}>
								{this.groupList.map(res => 
									<div onClick={this.navigateGroup.bind(this, res)} key={res.id} style={{ marginTop: '15px', fontWeight: res.isActive ? 'normal' : 'bold', width: '30%', cursor: 'pointer', background: res.isActive ? '#ffffff' : '', color: res.isActive ? '#13233a' : '', borderRadius: res.isActive ? '50px' : '', textAlign: 'center', marginRight: '5%' }}>
										{res.groupName}
									</div>
								)}
							</div>
							<div style={{ marginTop: '15px', fontSize: '15px' }}>
								<ListGroup>
									{this.listChatMessage.map(res =>
										<ChatMessageList key={res.id} messageList={res} onClickList={this.onClickViewMessages} clickList={this.clickViewMessage} />
									)}
								</ListGroup>

							</div>
						</Col>
						{this.clickViewMessage && <Col style={{padding: '7px 0px'}} className="chatMessageBackground" xs="12" sm="8" md="9" lg="9" xl="9">
							<ChatMessageDetails clickList={this.clickViewMessage} 
												onChangeMessage={this.onChangeMessage.bind(this)}
												userMessage={this.userMessage}
												loginProfileImg={this.loginProfileImg} 
												clickSendMessage={this.clickSendMessage.bind(this)}
												loginProfileId={this.loginProfileId}/>
				  		</Col>}
					</Row>
				</div>
			</div>
		);
	}

}

export default chatMessage;
