import React, { Component } from 'react'
import { Container, Text, Thumbnail } from 'native-base'

export default class extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { title, image } = navigation.state.params.channel;

    return {
      title,
      headerRight: <Thumbnail source={{ uri: image }} small />,
    };
  };

  render() {
    const { image, title } = this.props.navigation.state.params.channel;

    return (
      <Container>
        <Thumbnail source={{ uri: image }} />
        <Text>{title}</Text>
      </Container>
    )
  }
}
