import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Constants from 'expo-constants';

export default function HousePlan({ navigation }) {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [light3, setLight3] = useState(false);
  const [fan, setFan] = useState(false);
  const [door, setDoor] = useState(false);
  const devides = ["R1", "R2", "R3", "R4", "R5"];
  const changeStatusDevice = (device, setDevice) => {
    setDevice(!device);
  };

  const changeLight1 = () => {
    if (light1 === false) {
      return (
        <TouchableOpacity
          onPress={() => testSendRequest(0, light1, setLight1)}
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            marginTop: '15%',
          }}>
          <Image
            style={{ width: 80, height: 50 }}
            source={require('../assets/l1.png')}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => testSendRequest(0, light1, setLight1)}
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            marginTop: '15%',
          }}>
          <Image
            style={{ width: 80, height: 50 }}
            source={require('../assets/l2.png')}
          />
        </TouchableOpacity>
      );
    }
  };

  const changeLight2 = () => {
    if (light2 === false) {
      return (
        <TouchableOpacity onPress={() => testSendRequest(1, light2, setLight2)}>
          <Image
            style={{ width: 80, height: 50 }}
            source={require('../assets/light1.png')}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => testSendRequest(1, light2, setLight2)}>
          <Image
            style={{ width: 80, height: 50 }}
            source={require('../assets/light2.png')}
          />
        </TouchableOpacity>
      );
    }
  };

  const changeLight3 = () => {
    if (light3 === false) {
      return (
        <TouchableOpacity onPress={() => testSendRequest(2, light3, setLight3)}>
          <Image
            style={{ width: 80, height: 50 }}
            source={require('../assets/light1.png')}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => testSendRequest(2, light3, setLight3)}>
          <Image
            style={{ width: 80, height: 50 }}
            source={require('../assets/light2.png')}
          />
        </TouchableOpacity>
      );
    }
  };

  const changeFan = () => {
    if (fan === false) {
      return (
        <TouchableOpacity
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            marginTop: '15%',
          }}
          onPress={() => testSendRequest(4, fan, setFan)}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/fan.png')}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            marginTop: '15%',
          }}
          onPress={() => testSendRequest(4, fan, setFan)}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/fan-run.png')}
          />
        </TouchableOpacity>
      );
    }
  };

  const changeDoor = () => {
    if (door === false) {
      return (
        <TouchableOpacity
          onPress={() => testSendRequest(3, door, setDoor)}
          style={{ marginTop: '10%' }}>
          <Text
            style={{
              textAlign: 'center',
              alignItems: 'center',
              color: '#26a65b',
              fontSize: 40,
            }}>
            <Text style={{ color: '#26a65b', fontSize: 20 }}>Open</Text>
            {'\u21b7'}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => testSendRequest(3, door, setDoor)}
          style={{ marginTop: '10%' }}>
          <Text
            style={{
              textAlign: 'center',
              alignItems: 'center',
              color: '#674172',
              fontSize: 40,
            }}>
            <Text style={{ color: '#674172', fontSize: 20 }}>Close</Text>
            {'\u293a'}
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const [test, setTest] = useState('');

  const checkConnect = () => {};

  const sendRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);

      request.responseType = 'json';

      if (data) {
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', '*/*');
        request.setRequestHeader(
          'X-Authorization',
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaW5oY3QwMjAzMjhAZ21haWwuY29tIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJ1c2VySWQiOiIwZjcwZTAxMC05YTY5LTExZTktYmU4NC03NTZmNmIxMzAzYjUiLCJmaXJzdE5hbWUiOiJUaHV5IiwibGFzdE5hbWUiOiJMaW5oIiwiZW5hYmxlZCI6dHJ1ZSwicHJpdmFjeVBvbGljeUFjY2VwdGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiMGYzMDA2ODAtOWE2OS0xMWU5LWJlODQtNzU2ZjZiMTMwM2I1IiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNjA4ODkxNTk3LCJleHAiOjE2MTA2OTE1OTd9.c0zJ3SUbMj5MSYDvGTUIfJHIgf2qTwSUXZya9AyMqC7aw2zj8uSlLmxDGGnDDK2LOpBP8dJ2Vde69holGQj8aQ'
        );
      }

      request.onload = () => {
        if (request.status >= 400) {
          reject(request.response);
        } else {
          resolve(request.response);
        }
      };

      request.onerror = () => {
        reject('Something went wrong!');
      };

      request.send(JSON.stringify(data));
    });
    return promise;
  };

  const testSendRequest = (value, device, setDevice) => {

    sendRequest(
      'POST',
      'http://demo.thingsboard.io/api/plugins/rpc/oneway/3e85b630-28a4-11eb-85ee-f936949cce2a',
      {
        method: devides[value],
        params: !device,
        timeout: 500,
      }
    )
      .then((responseData) => {
        // setBtnColor('#00e640');
        setMess('Success');
        setTest(devides[value] + '.');
        changeStatusDevice(device, setDevice);
      })
      .catch((err) => {
        // setMess(err);
        setTest(devides[value] + ' fail');
      });
  };
  const [text, setText] = useState('');
  const [mess, setMess] = useState('');

  return (
    <>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 4, height: '100%' }}>
          <View
            style={{
              height: '50%',
              backgroundColor: '#e6ffff',
              borderTopColor: '#000000',
              borderTopWidth: 2,
              borderLeftColor: '#000000',
              borderLeftWidth: 2,
            }}>
            <View
              style={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                P2
              </Text>
              {changeLight2()}
            </View>
            <View>
              {/*<Image style={styles.logo} source={require('./assets/lethanhlong.jpg')} />*/}
            </View>
          </View>
          <View
            style={{
              height: '50%',
              backgroundColor: '#e6ffff',
              borderTopColor: '#000000',
              borderTopWidth: 2,
              borderLeftColor: '#000000',
              borderLeftWidth: 2,
              borderBottomColor: '#000000',
              borderBottomWidth: 2,
            }}>
            <View
              style={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                }}>
                P3
              </Text>

              {changeLight3()}
            </View>
          </View>
        </View>

        <View style={{ flex: 5, height: '100%' }}>
          <View
            style={{
              height: '75%',
              backgroundColor: '#e6ffff',
              borderColor: '#000000',
              borderWidth: 2,
            }}>
            <Text
              style={{
                textAlign: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
              }}>
              P1
            </Text>

            {changeFan()}

            {changeLight1()}

            {changeDoor()}
          </View>
          <View
            style={{
              height: '25%',
              borderRightColor: '#000000',
              borderRightWidth: 2,
              borderLeftColor: '#000000',
              borderLeftWidth: 2,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  alignItems: 'center',
                  color: '#674172',
                  fontSize: 69,
                }}
                onPress={() => navigation.goBack()}>
                {'\u21e3'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.content]}>
        <View style={[styles.message]}>
          <Text style={styles.text}>{test}</Text>
        </View>
        <View style={[styles.message]}>
          <Text style={styles.paragraph}>{mess}</Text>
        </View>
        <View style={[styles.message]}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
    flex: 1,
  },
  // header: {
  //   backgroundColor: '#42628F',
  //   // backgroundColor:'#7c94b0',
  // },
  // iconBack: {
  //   paddingTop: '6%',
  //   paddingBottom: '1%',
  //   fontSize: 38,
  //   fontWeight: 'bold',
  //   paddingLeft: 12,
  //   color: '#ffffff',
  // },
  // textHeader: {
  //   paddingTop: '8%',
  //   fontSize: 29,
  //   fontWeight: 'bold',
  //   paddingLeft: 16,
  //   color: '#ffffff',
  // },
  message: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5F5F5',
  },
  paragraph: {
    margin: 4,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});
