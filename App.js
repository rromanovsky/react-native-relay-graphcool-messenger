import React from 'react';
import { Container, Content, Drawer, Text } from 'native-base';
import ChannelListPage from './components/ChannelListPage'

export default class App extends React.Component {
  openMenu = () => {
    this.drawer._root.open();
  }

  renderMenu() {
    return (
      <Container>
        <Content bounces={false} style={{ flex: 1, backgroundColor: "#FFF", top: -1 }}>
          <Text>MENU</Text>
        </Content>
      </Container>
    )
  }

  render() {
    return (
      <Drawer
        ref={ref => this.drawer = ref}
        content={this.renderMenu()}
        side="left"
        panOpenMask={.25}
      >
        <ChannelListPage openMenu={this.openMenu}/>
      </Drawer>
    );
  }
}
