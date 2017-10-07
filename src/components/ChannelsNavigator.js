import React from 'react'
import { StackNavigator } from 'react-navigation'
import ChannelListPage from './ChannelListPage'
import ChannelPage from './ChannelPage'

const ChannelsNavigator = StackNavigator(
  {
    ChannelListPage: { screen: ChannelListPage, title: 'Chats' },
    ChannelPage: { screen: ChannelPage },
  },
  {
    initialRouteName: 'ChannelListPage',
  },
);

export default () => <ChannelsNavigator />
