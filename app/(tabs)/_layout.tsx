import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from 'react-native-reanimated/lib/typescript/Animated';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarShowLabel: false,
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        borderTopWidth: 1,
        height: 65
      }
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color , focused}) => (
          <MaterialIcons 
            name="home-filled" 
            size={28} 
            color={focused ? 'gre`en' : 'black'}/>),
        }}
      />
            
      <Tabs.Screen
        name="insights"
        options={{
          title: 'Insights',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="insert-chart"
              size={28}
              color={focused ? 'green' : 'black'} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
          <MaterialIcons 
            name="person" 
            size={28} 
            color={focused ? 'green' : 'black'} 
          />),
          
        }}
      />
    </Tabs>
  );
}
