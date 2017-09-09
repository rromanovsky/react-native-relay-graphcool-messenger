import React from 'react'
import { Drawer } from 'native-base'
import Menu from './components/Menu'
import ChannelListPage from './components/ChannelListPage'

export default class App extends React.Component {
  openMenu() {
    this.drawer._root.open()
  }

  render() {
    return (
      <Drawer
        ref={ref => this.drawer = ref}
        content={<Menu />}
        side="left"
        panOpenMask={.25}
      >
        <ChannelListPage openMenu={this.openMenu} />
      </Drawer>
    )
  }
}
