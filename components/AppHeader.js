import React, { Component} from 'react';
import { Header,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const BellIconWithBadge=(props)=>{
  return(
    <View>
      <Icon name='bell' type='font-awesome' color='#FFBBBB' size={25} 
      onPress={() =>props.navigation.navigate('Notifications')}/>
       <Badge
        value="0"
        status="success"
       containerStyle={{ position: 'absolute', top: -4, right: -4 ,}}/>
    </View>
  )
}


const MyHeader = props => {
  return (
    <Header
      centerComponent={{ text: props.title, style: { color: 'black', fontSize:20 , fontWeight:"bold" } }}
      rightComponent={<BellIconWithBadge {...props}/>}
      backgroundColor = "#A9F1DF"
    />
  );
};

export default MyHeader;
