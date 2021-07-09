import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';

interface Props {
	navigateToContacts?: Function
}

class SearchBar extends Component<Props> {

	constructor(props: any){
		super(props)
	}


	render() {
		return (
			<div style={{ display: 'flex', width: '100%' }}>
				<InputGroup style={{ borderRadius: '50px', border: '1px solid' }}>
					<div style={{width: '10%'}}>
						<InputGroupAddon addonType="prepend">
							<div style={{textAlign: 'center'}}><i style={{fontSize: '15px', lineHeight: '37px'}} className="fa fa-search"></i></div>
						</InputGroupAddon>
					</div>
					<div style={{width: '80%'}}>
						<Input style={{'background': 'transparent',border: 'none',color: '#ffffff', fontSize: '15px', lineHeight: '25px'}}  placeholder="Search People" />
					</div>
					{this.props.navigateToContacts && <div style={{width: '10%'}}>
						<InputGroupAddon addonType="append">
							<div onClick={this.props.navigateToContacts?.bind(this)} style={{textAlign: 'center'}}><i style={{fontSize: '15px', lineHeight: '37px'}} className="fa fa-plus"></i></div>
						</InputGroupAddon>
					</div>}
				</InputGroup>
			</div>
		);
	}

}

export default SearchBar;
