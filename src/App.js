/**
 * Simple React Native App
 * https://github.com/hollerith/react-native-boiler
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';

import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
	Button,
} from 'react-native';

import {
  Header,
  Colors,
} from './components/common';

import { Camera } from 'expo-camera';

import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

	var camera;

	const snap = async () => {
		if (camera) {
			let photo = await camera.takePictureAsync();
			console.log(photo);
		}
	};

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header title="Pixi"/>
			<View style={{ flex: 1 }}>
			  <Camera 
					style={{ flex: 1 }} 
					type={type}
				  ref={ref => {
						camera = ref;
				  }}>

			    <View
			      style={{
			        flex: 1,
			        backgroundColor: 'transparent',
			        flexDirection: 'row',
			      }}>
			    </View>

					<View style={styles.camera}>
					  <TouchableOpacity
					    style={{
					      alignSelf: 'flex-end',
					      alignItems: 'center',
					      backgroundColor: 'transparent',                  
					    }}>
					    <Ionicons
					        name="ios-photos"
					        style={{ color: "#fff", fontSize: 40}}
					    />
					  </TouchableOpacity>
					  <TouchableOpacity
					    style={{
					      alignSelf: 'flex-end',
					      alignItems: 'center',
					      backgroundColor: 'transparent',
					    }}
			        onPress={() => {
			          snap();
			        }}>
					    <FontAwesome
					        name="camera"
					        style={{ color: "#fff", fontSize: 40}}
					    />
					  </TouchableOpacity>
					  <TouchableOpacity
					    style={{
					      alignSelf: 'flex-end',
					      alignItems: 'center',
					      backgroundColor: 'transparent',
					    }}
			        onPress={() => {
			          setType(
			            type === Camera.Constants.Type.back
			              ? Camera.Constants.Type.front
			              : Camera.Constants.Type.back
			          );
			        }}>

					    <MaterialCommunityIcons
					        name="camera-switch"
					        style={{ color: "#fff", fontSize: 40}}
					    />
					  </TouchableOpacity>
					</View>
			  </Camera>
			</View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
  camera: {
    flex:.1, 
    flexDirection:"row",
    justifyContent:"space-between",
    margin:20
  },
  footer: {
    color: Colors.dark,
    fontSize: 24,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
