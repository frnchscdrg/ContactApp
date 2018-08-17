import React, { Component } from 'react'
import { Container, Content, Text, Card, CardItem, Button, Icon, Left} from 'native-base'



class ContactView extends Component {

	

	render() {
		console.log(this.props)
		return (

			<Container>
				<Content padder>
					<Card style= {{ justifyContent: 'center' }}>
						<CardItem>
							<Icon 
                     		type="FontAwesome" 
                     		name="user"
                     		style={{ color: "#45a8bc"}}
                     		/>
                     		<Text> {this.props.navigation.state.params.contact.name} </Text>
						</CardItem>

						<CardItem>
							<Icon
                      		type="FontAwesome"
                      		name="phone"
                      		style={{ color: "#f4c242" }}
                     		/>
							<Text> {this.props.navigation.state.params.contact.mobile} </Text>
						</CardItem>

						<CardItem>
							<Icon
                      		type="FontAwesome"
                      		name="at"
                      		style={{ color: "#6745bc" }}
                     		/>
							<Text> {this.props.navigation.state.params.contact.email} </Text>
						</CardItem>
	
						<CardItem>
							<Icon
                      		type="FontAwesome"
                      		name="building"
                      		style={{ color: "#875008" }}
                     		/>
							<Text> {this.props.navigation.state.params.contact.company} </Text>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

export default ContactView