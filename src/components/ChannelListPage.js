import React, { Component } from 'react'
import { Body, Button, Container, Content, Header, Icon, Left, Spinner, Text, Title } from 'native-base'
import { QueryRenderer, graphql } from 'react-relay'
import ChannelList from './ChannelList'
import environment from '../../Environment'

export default class extends Component {
  render() {
    const query = graphql`
      query ChannelListPageQuery {
        viewer {
          ...ChannelList_viewer
        }
      }
    `

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openMenu}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Channels</Title>
          </Body>
        </Header>
        <Content>
          <QueryRenderer
            environment={environment}
            query={query}
            render={({ error, props }) => {
              if (error) {
                return <Text>{error.message}</Text>
              } else if (props) {
                return <ChannelList viewer={props.viewer} />
              }

              return <Spinner color="dodgerblue"/>
            }}
          />
        </Content>
      </Container>
    )
  }
}
