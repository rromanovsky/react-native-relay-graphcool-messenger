import React from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { TabNavigator } from 'react-navigation'
import ProfilePage from './components/ProfilePage'
import ChannelsNavigator from './components/ChannelsNavigator'

const tabs = [
  {
    text: 'Profile',
    icon: 'person',
    screen: ProfilePage,
    screenKey: 'ProfilePage',
    onPress: props => props.navigation.navigate('ProfilePage'),
  },
  {
    text: 'Chats',
    icon: 'chatbubbles',
    screen: ChannelsNavigator,
    screenKey: 'ChannelsNavigator',
    onPress: props => props.navigation.navigate('ChannelsNavigator'),
  },
];

export default (MainScreenNavigator = TabNavigator(
  tabs.reduce((result, { screenKey, screen }) => {
    result[screenKey] = { screen }

    return result
  }, {}),//{ initialRouteName: { screen: _.first(tabs).screen } }),
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => (
      <Footer>
        <FooterTab>
          {
            tabs.map(({ text, icon, onPress }, key) => (
              <Button
                onPress={() => onPress(props)}
                transparent={props.navigationState.index === key}
                key={key}
                vertical
              >
                <Icon name={icon} active={props.navigationState.index === key} />
                <Text>{text}</Text>
              </Button>
            ))
          }
        </FooterTab>
      </Footer>
    ),
  },
))
