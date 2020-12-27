import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyHeader from '../components/AppHeader';

export default class IceCreamOrderScreen extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Notifications" />
        <Text style={styles.mainFont}>Notifications Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainFont: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 250,
  },
});
