// import React
import React from 'react';
// import the components we need from nativebase
import { Container, Body, Header, Content, List, ListItem, Text, Left, Right, Icon, Button, View} from 'native-base';
// import phonecall sa we can call some digitz
import { phonecall, text } from 'react-native-communications'
import { Alert } from 'react-native'

class ContactList extends React.Component {


  constructor () {
    super ()

    this.state = {
      contacts: [
      {name: 'Moses', mobile: '09157569919', email: 'lukeses09@gmail.com', company: 'Proudcloud'},
      {name: 'Jimi Hendrix', mobile: '09173428288', email: 'lukeses09@gmail.com', company: 'Proudcloud'},
      {name: 'Batista Bomb', mobile: '09158578928', email: 'lukeses09@gmail.com', company: 'Proudcloud'},
      {name: 'Hulk Hogan', mobile: '0906928182x', email: 'lukeses09@gmail.com', company: 'Proudcloud'},
      {name: 'John Cena', mobile: '09759890102', email: 'lukeses09@gmail.com', company: 'Proudcloud'}
    ]

    }
  }

  openRecord (contact) {
    this.props.navigation.navigate('ContactView', { contact: contact} )
  }

  tawag (mobile) {
    phonecall(mobile,false)
  }

  message (mobile) {
    text(mobile, false)
  }

  delete (name) {
    Alert.alert(
      `Deleting ${name}`,
      'Do you wish to continue?',
      [
        //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'NO',
          onPress: () => {
            console.log('Cancel Pressed') 
          },
          style: 'cancel'
        },

        {
          text: 'YES',
          onPress: () => {
            this.setState({ contacts:  this.state.contacts.filter(contact => contact.name != name) })  
          } 
        }
      ],
      { cancelable: false }
    )
  }



  // render here function is required
  render() {
    
    

    return (
      <Container>
        <Header />
        <Content>
          <List>
            {
              // iterate through each contacts
              this.state.contacts.map((contact, i) => {
                return (
                  // will render ListItem for each iteration of contacts
                  // pressing a ListITem will call the dial() function
                  <ListItem key={i} onPress={ () => {this.openRecord(contact)} }>
                    <Body>
                      <Text> {contact.name} </Text>
                      <Text note> {contact.mobile} </Text>
                    </Body>
                   <Right>

                   <View style={{ flexDirection: 'row'}}>

                    
                    <Button transparent onPress={ () => {this.tawag(contact.mobile)} }>
                     <Icon
                      type="FontAwesome"
                      name="phone"
                      style={{ color: "#f4c242" }}
                     />
                    </Button>

                     <Button transparent onPress={ () => {this.message(contact.mobile)} }>
                     <Icon 
                     type="FontAwesome" 
                     name="envelope"
                     style={{ color: "#45bc4b" }}
                     />
                     </Button>
                     
                     <Button transparent onPress={ () => {this.delete(contact.name) } }>
                     <Icon 
                     type="FontAwesome" 
                     name="trash"
                     style={{color: "#bc4545" }} 
                     />
                     </Button>
                   </View>

  
                   </Right>
                  </ListItem>
                )
              })
            }
          </List>
        </Content>
      </Container>
    );
  }
}

export default ContactList