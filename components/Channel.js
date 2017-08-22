import React, { Component } from 'react'
import { Content, Thumbnail, Body, Text } from 'native-base'
import { createFragmentContainer, graphql } from 'react-relay'

class Channel extends Component {
  render() {
    const { title } = this.props.channel;
console.log(this.props.channel)
    return (
      <Content>
        <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
        <Body>
          <Text>{title}</Text>
          <Text note>123</Text>
        </Body>
      </Content>
    )
  }
}

export default createFragmentContainer(Channel, graphql`
  fragment Channel_channel on Channel {
    id
    title
    updatedAt
    _recipientsMeta {
      count
    }
  }
`)
