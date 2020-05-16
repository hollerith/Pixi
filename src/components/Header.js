// Header
'use strict';
import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import Colors from './Colors';

const Header = props => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('./logo.png')}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>{ props.title }</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 24,
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 48,
    fontWeight: '600',
    fontFamily: 'Lobster-Regular',
    textAlign: 'center',
    color: "darkred",
  },
});

export default Header;
