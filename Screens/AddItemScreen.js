import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MyHeader from '../components/AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class AddItemScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      item_Name: '',
      item_Price: '',
      item_Quantity: '',
      item_Type: '',
    };
  }

  addItem = (item_Name, item_Price, item_Quantity, item_Type) => {
    db.collection('added_Items').add({
      item_Name: item_Name,
      item_Price: item_Price,
      item_Quantity: item_Quantity,
      item_Type: item_Type,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    alert('Item added successfully');
    this.setState({
      item_Name: '',
      item_Price: '',
      item_Quantity: '',
      item_Type: '',
    });
  };

  render() {
    return (
      <View>
        <MyHeader title="Add Items" />
        <TextInput
          style={styles.textInput1}
          placeholder=" Item Name"
          onChangeText={(text) => {
            this.setState({
              item_Name: text,
            });
          }}
          value={this.state.item_Name}
        />
        <TextInput
          style={styles.textInput2}
          placeholder=" Item Price"
          onChangeText={(text) => {
            this.setState({
              item_Price: Number(text),
            });
          }}
          value={this.state.item_Price}
        />
        <TextInput
          style={styles.textInput2}
          placeholder=" Item Type"
          onChangeText={(text) => {
            this.setState({
              item_Type: text,
            });
          }}
          value={this.state.item_Type}
        />
        <TextInput
          style={styles.textInput3}
          placeholder=" Item Quantity"
          onChangeText={(text) => {
            this.setState({
              item_Quantity: text,
            });
          }}
          value={this.state.item_Quantity}
        />
        <TouchableOpacity
          style={styles.addItemButton}
          onPress={() => {
            this.addItem(
              this.state.item_Name,
              this.state.item_Price,
              this.state.item_Quantity,
              this.state.item_Type
            );
          }}>
          <Text style={styles.addItemText}> Add Item </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput1: {
    borderColor: 'black',
    borderWidth: 3,
    width: 250,
    marginTop: 100,
    borderRadius: 6,
    height: 30,
    alignSelf: 'center',
  },
  textInput2: {
    borderColor: 'black',
    borderWidth: 3,
    width: 250,
    marginTop: 50,
    borderRadius: 6,
    height: 30,
    alignSelf: 'center',
  },
  textInput3: {
    borderColor: 'black',
    borderWidth: 3,
    width: 250,
    marginTop: 50,
    borderRadius: 6,
    height: 30,
    alignSelf: 'center',
  },
  addItemButton: {
    borderWidth: 5,
    width: 150,
    marginTop: 70,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'red',
    backgroundColor: 'red',
  },
  addItemText: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
