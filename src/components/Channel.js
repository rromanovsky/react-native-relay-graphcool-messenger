import React, { Component } from 'react'
import { ListItem, Left, Right, Thumbnail, Body, Text } from 'native-base'
import { createFragmentContainer, graphql } from 'react-relay'
import { withNavigation } from 'react-navigation'
import moment from 'moment'

import ChannelPage from './ChannelPage'

@withNavigation
class Channel extends Component {
  onPress = () => {
    const { channel, navigation: { navigate } } = this.props

    navigate('ChannelPage', { channel })
  };

  render() {
    const { id, image, title, updatedAt } = this.props.channel;

    return (
      <ListItem onPress={this.onPress} key={id} avatar>
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
    id
    image
    title
    updatedAt
  }
`)
