import * as React from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native';
import MyHeader from '../components/AppHeader';
import db from '../config';

export default class AllOrdersScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allCheckouts: [],
    };
  }
  getAllCheckouts = () => {
    db.collection('customer_Checkouts').onSnapshot((snapshot) => {
      var allCheckouts = [];
      snapshot.docs.map((doc) => {
        var items = doc.data();
        items['doc_id'] = doc.id;
        allCheckouts.push(items);
      });
      this.setState({
        allCheckouts: allCheckouts,
      });
    });
  };
  componentDidMount(){
    this.getAllCheckouts();
  }
  render() {
    return (
      <View>
        <MyHeader title="All Orders" />
        <FlatList
          data={this.state.allCheckouts}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10, marginLeft: 20, marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.customer_Name}</Text>
              <Text>{'Items' + item.allCartItems.item_name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.7}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
