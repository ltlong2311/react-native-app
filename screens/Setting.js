import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

const Setting = ({ navigation }) => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <View style={styles.center}>
        <Text>Time: {ctime}</Text>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              alignItems: 'center',
              color: '#674172',
              fontSize: 69,
            }}
            onPress={() => navigation.goBack()}>
            {'\u21e6'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ bottom: 35 }}>
          <TouchableWithoutFeedback>
            <View style={styles.btnAdd}>
              <Text style={{ fontSize: 40, color: 'white' }}>+</Text>
            </View>
          </TouchableWithoutFeedback>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  btnAdd: {
    width: 60,
    height: 60,
    
    fontSize: 10,
    borderRadius: 30,
    backgroundColor: '#22a7f0',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:"center",
    borderColor: 'cyan',
    borderWidth: 1,
  },
});
export default Setting;
