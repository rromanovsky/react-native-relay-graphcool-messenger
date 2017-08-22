import React, { Component } from 'react'
import { List, ListItem } from 'native-base'
import { createFragmentContainer, graphql } from 'react-relay'
import Channel from './Channel'

class ChannelList extends Component {
  render() {
    return (
      <List>
        {
          this.props.viewer.allChannels.edges.map(({ node }) => (
            <ListItem onPress={() => null} key={node.__id}>
              <Channel channel={node} />
            </ListItem>
          ))
        }
      </List>
    )
  }
}

export default createFragmentContainer(ChannelList, graphql`
  fragment ChannelList_viewer on Viewer {
    allChannels(last: 100, orderBy: createdAt_DESC) @connection(key: "ChannelList_allChannels", filters: []) {
      edges {
        node {
          ...Channel_channel
        }
      }
    }
  }
`)
