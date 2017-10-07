import React, { Component } from 'react'
import { Container, Content, Spinner, Text } from 'native-base'
import { QueryRenderer, graphql } from 'react-relay'
import ChannelList from './ChannelList'
import relayEnvironment from '../relayEnvironment'

export default class extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Chats',
    headerTitleStyle : { textAlign: 'center', alignSelf:'center' },
    // headerStyle:{
    //   backgroundColor:'white',
    // },
  });

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
        <Content>
          <QueryRenderer
            environment={relayEnvironment}
            query={query}
            render={({ error, props }) => {
              if (error) {
                return <Text>{error.message}</Text>
              } else if (props) {
                return <ChannelList viewer={props.viewer} />
              }

              return <Spinner color="dodgerblue" />
            }}
          />
        </Content>
      </Container>
    )
  }
}
