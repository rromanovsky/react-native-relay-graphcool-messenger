import React, { Component } from 'react'
import { List } from 'native-base'
import { createFragmentContainer, graphql } from 'react-relay'
import Channel from './Channel'

class ChannelList extends Component {
  render() {
    return (
      <List>
        {this.props.viewer.allChannels.edges.map(({ node }, key) => <Channel channel={node} key={key} />)}
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
