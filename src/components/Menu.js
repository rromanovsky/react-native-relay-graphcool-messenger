import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'

export default class extends Component {
  render() {
    return (
      <Container>
        <Content bounces={false} style={{ flex: 1, backgroundColor: "#FFF", top: -1 }}>
          <Text>MENU</Text>
        </Content>
      </Container>
    )
  }
}
