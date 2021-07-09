import React from 'react';
import { withRouter } from 'react-router-dom';
import { Col, ListGroup, Row } from 'reactstrap';
import ChatMessageList from '../../commonComponents/ChatMessageList';
import SearchBar from '../../commonComponents/SearchBar';
import './contacts.css';
import logo from '../../assets/download.jpeg'
import logo1 from '../../assets/logo1.png'
import noImage from '../../assets/noImage.png'
import profileImg1 from '../../assets/profileImg.png'
import ChatMessageDetails from '../../commonComponents/ChatMessageDetails';
import moment from 'moment';
import createHistory from "history/createBrowserHistory";
import { profile } from 'console';
import ContactList from '../../commonComponents/ContactList';
import ContactDetails from '../../commonComponents/ContactDetails';
const history = createHistory();

interface Props {

}

class contacts extends React.Component<Props> {

	listContactList = [
		{
			'id': 1,
			'contactFirstName': 'Aravind',
			'contactLastName': 'Krishna',
			'contactMobileNo': 9876567654,
			'contactEmailId': 'araKrish@gmail.com',
			'contactProfileImg': logo,
			'lastUpdatedAt': '2021-07-07 17:45',
			'lastSeenTime': '2021-07-07 17:45',
		},
		{
			'id': 2,
			'contactFirstName': 'Praksh',
			'contactLastName': 'Raja',
			'contactMobileNo': 8789890989,
			'contactEmailId': 'prakashRRaja@gmail.com',
			'contactProfileImg': logo1,
			'lastUpdatedAt': '2021-07-08 19:20',
			'lastSeenTime': new Date(),
		},
		{
			'id': 3,
			'contactFirstName': 'Muthaiah',
			'contactLastName': 'L',
			'contactMobileNo': 9987009899,
			'contactEmailId': 'muthaiahLK@gmail.com',
			'contactProfileImg': profileImg1,
			'lastUpdatedAt': '2021-07-06 17:45',
			'lastSeenTime': '2021-07-09 10:17',
		}
	]
	clickViewProfile: any = null
	groupList = [
		{
			'id': 1,
			'groupName': 'Chats',
			'groupNavigatePage': '/',
			'isActive': false
		},
		{
			'id': 2,
			'groupName': 'Contacts',
			'groupNavigatePage': '/contacts',
			'isActive': true
		}
	]
	errorMessage: any = ''

	constructor(props: any) {
		super(props)
		this.clickViewProfile = {
			// 'id': 3,
			'contactFirstName': '',
			'contactLastName': '',
			'contactMobileNo': '',
			'contactEmailId': '',
			'contactProfileImg': noImage,
			'lastUpdatedAt': '',
			'lastSeenTime': '',
		}
		this.onClickViewProfile = this.onClickViewProfile.bind(this)
		this.createNewContact = this.createNewContact.bind(this)
		this.onChangeField = this.onChangeField.bind(this)
		this.saveContact = this.saveContact.bind(this)
		this.navigateGroup = this.navigateGroup.bind(this)
		this.listContactList.forEach(res => {
			this.returnMins(res)
		})
	}

	// Return mins
	returnMins(data: any) {
		let today: any = new Date()
		let getDate: any = new Date(data.lastUpdatedAt)

		// let diffInMilliSeconds = Math.abs(today - getDate) / 1000;
		var time_difference = today.getTime() - getDate.getTime();

		// calculate days
		data['days'] = Math.round(time_difference / (1000 * 60 * 60 * 24));
		// calculate mins for online purpose
		if (data['lastSeenTime']) {
			let lastSeenDate: any = new Date(data['lastSeenTime'])
			data['dateInMins'] = Math.round(((today - lastSeenDate) / 1000) / 60)
		}
		data['time'] = moment(getDate).format('hh:mm A')
		data['day'] = moment(getDate).format('DD-MMM-YYYY')
	}

	// Click the list to view the profile
	onClickViewProfile(data: any) {
		this.clickViewProfile = data
		this.setState({})
	}

	// Create new contact
	createNewContact(data: any) {
		this.clickViewProfile = {
			// 'id': 3,
			'contactFirstName': '',
			'contactLastName': '',
			'contactMobileNo': '',
			'contactEmailId': '',
			'contactProfileImg': noImage,
			'lastUpdatedAt': '',
			'lastSeenTime': '',
		}
		this.setState({})
	}

	// On Change first name 
	onChangeField(type: any, data: any) {
		this.clickViewProfile[type] = data.target.value
		if (type === 'contactEmailId') {
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
			if (!pattern.test(data.target.value)) {
				this.errorMessage = "Please enter valid email address.";
			} else {
				this.errorMessage = ''
			}
		}
		if (type === 'contactMobileNo') {
			var pattern = new RegExp(/^[0-9\b]+$/);
			if (!pattern.test(data.target.value)) {
				this.errorMessage = "Please enter only number.";
			} else if (data.target.value.length != 10) {
				this.errorMessage = "Please enter valid phone number.";
			} else {
				this.errorMessage = ''
			}
		}
		if(type === 'contactFirstName') {
			if(!data.target.value) {
				this.errorMessage = 'Please enter first name'
			} else {
				this.errorMessage = ''
			}
		}
		this.setState({})
	}

	// Save Contact 
	saveContact() {
		console.log('dsdwesd', this.clickViewProfile)
		if(!this.clickViewProfile.contactFirstName || !this.clickViewProfile.contactMobileNo || !this.clickViewProfile.contactEmailId) {
			alert('Please enter value')
		} else if (!this.errorMessage) {
			this.clickViewProfile.lastUpdatedAt = this.clickViewProfile.lastSeenTime = new Date()
			this.clickViewProfile.id = this.listContactList.length + 1
			this.listContactList.push(this.clickViewProfile)
			this.createNewContact('')
			this.setState({})
		} else {
			alert(this.errorMessage)
			this.errorMessage = ''
		}

	}

	// Navigate to group 
	navigateGroup(data: any) {
		history.goBack()
	}

	public render() {

		// For Search bar 
		let searchBarContent;
		searchBarContent = <SearchBar navigateToContacts={this.createNewContact.bind(this)} />

		return (
			<div className="chatPage">
				<div>
					<Row className="chatBackground">
						<Col style={{ padding: '15px' }} xs="12" sm="4" md="3" lg="3" xl="3">
							{searchBarContent}
							<div style={{ display: 'flex', width: '100%', padding: '0px 15px' }}>
								{this.groupList.map(res =>
									<div onClick={this.navigateGroup.bind(this, res)} key={res.id} style={{ marginTop: '15px', fontWeight: res.isActive ? 'normal' : 'bold', width: '30%', cursor: 'pointer', background: res.isActive ? '#ffffff' : '', color: res.isActive ? '#13233a' : '', borderRadius: res.isActive ? '50px' : '', textAlign: 'center', marginRight: '5%' }}>
										{res.groupName}
									</div>
								)}
							</div>
							<div style={{ marginTop: '15px', fontSize: '15px' }}>
								<ListGroup>
									{this.listContactList.map(res =>
										<ContactList key={res.id} contactList={res} onClickList={this.onClickViewProfile} clickList={this.clickViewProfile} />
									)}
								</ListGroup>

							</div>
						</Col>
						<Col style={{ padding: '7px 0px' }} className="chatMessageBackground" xs="12" sm="8" md="9" lg="9" xl="9">
							<ContactDetails clickList={this.clickViewProfile}
								onChangeField={this.onChangeField.bind(this)}
								saveContact={this.saveContact.bind(this)}
							/>
						</Col>
					</Row>
				</div>
			</div>
		);
	}

}

export default contacts;
