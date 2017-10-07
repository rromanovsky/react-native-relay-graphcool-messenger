import React, { Component } from 'react'
import { Body, Container, Content, Header, Text, Title } from 'native-base'
import { QueryRenderer, graphql } from 'react-relay'
import { withNavigation } from 'react-navigation'

@withNavigation
export default class extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'profile',
    tabBarLabel: 'Notifications',
    headerTitleStyle : { textAlign: 'center', alignSelf:'center' },
  });

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Profile</Title>
          </Body>
        </Header>
        <Content>
          <Text>Hello</Text>
        </Content>
      </Container>
    )
  }
}
