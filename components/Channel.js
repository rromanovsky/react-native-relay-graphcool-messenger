import React, { Component } from 'react'
import { Content, Thumbnail, Body, Text } from 'native-base'
import { createFragmentContainer, graphql } from 'react-relay'

class Channel extends Component {
  render() {
    const { title, updatedAt } = this.props.channel;

    return (
      <Content>
        <Thumbnail source={{ uri: 'Image URL' }} size={80} square />
        <Body>
          <Text>{title}</Text>
          <Text note>{updatedAt}</Text>
        </Body>
      </Content>
    )
  }
}

export default createFragmentContainer(Channel, graphql`
  fragment Channel_channel on Channel {
    title
    updatedAt
  }
`)
