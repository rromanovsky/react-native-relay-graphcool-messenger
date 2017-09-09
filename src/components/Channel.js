import React, { Component } from 'react'
import { ListItem, Left, Right, Thumbnail, Body, Text } from 'native-base'
import { createFragmentContainer, graphql } from 'react-relay'
import moment from 'moment'

class Channel extends Component {
  render() {
    const { __id, image, title, updatedAt } = this.props.channel;

    return (
      <ListItem onPress={() => null} key={__id} avatar>
        <Left>
          <Thumbnail source={{ uri: image }} />
        </Left>
        <Body>
          <Text>{title}</Text>
          <Text note>0 users</Text>
        </Body>
        <Right>
          <Text note>Last activity</Text>
          <Text note>{moment(updatedAt).format('LL')}</Text>
        </Right>
      </ListItem>
    )
  }
}

export default createFragmentContainer(Channel, graphql`
  fragment Channel_channel on Channel {
    image
    title
    updatedAt
  }
`)
