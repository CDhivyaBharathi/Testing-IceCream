import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AllOrdersScreen from '../Screens/AllOrders';
import AddItemScreen from '../Screens/AddItemScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsScreen from '../Screens/SettingsScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import { withBadge } from 'react-native-elements';

export const AppTabNavigator = createBottomTabNavigator({
  AllOrders: {
    screen: AllOrdersScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/OrderList.png')}
          style={{ height: 25, width: 25 }}
        />
      ),
    },
  },
 
  SendNotifications: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/Notify.png')}
          style={{ height: 35, width: 35 }}
        />
      ),
      tabBarLabel: 'Notify ',
    },
  },
   AddItems: {
    screen: AddItemScreen,
    navigationOptions: {
      tabBarIcon: <Icon name="plus-circle" type="fon-awesome" size={25} />,
    },
  },

  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/SettingsCog.png')}
          style={{ height: 25, width: 25 }}
        />
      ),
    },
  },
});
