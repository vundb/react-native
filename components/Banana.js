import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class Banana extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };

    return (
        <View>
            <Image source={pic} style={{width: 200, height: 180}}/>
        </View>
    );
  }
}
