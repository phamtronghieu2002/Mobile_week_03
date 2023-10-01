import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bai1 from "./src/components/Bai01/Bai1";
import router from "./src/routers";
const Stack = createNativeStackNavigator();
export default function App() {
     return (
      <NavigationContainer>
      <Stack.Navigator>
  
       {
         router.map((r,index)=>
         <Stack.Screen key={index}  {...r} />
         )
       }
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
       
     )
}
